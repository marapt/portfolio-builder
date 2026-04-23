import json
import os
from pathlib import Path
from typing import List, Optional
import uuid
import logging

logger = logging.getLogger(__name__)

class LocalDB:
    def __init__(self, storage_path: str = "backend/data/local_db.json"):
        self.storage_path = Path(storage_path)
        self.storage_path.parent.mkdir(parents=True, exist_ok=True)
        self.data = {"findings": [], "status_checks": []}
        self.load()

    def load(self):
        if self.storage_path.exists():
            try:
                with open(self.storage_path, "r") as f:
                    self.data = json.load(f)
            except Exception as e:
                logger.error(f"Failed to load local DB: {e}")

    def save(self):
        try:
            with open(self.storage_path, "w") as f:
                json.dump(self.data, f, indent=2)
        except Exception as e:
            logger.error(f"Failed to save local DB: {e}")

    class Collection:
        def __init__(self, parent, name):
            self.parent = parent
            self.name = name

        async def find(self, filter_query=None, projection=None):
            items = self.parent.data.get(self.name, [])
            # Basic filter support (only exact match or $not regex)
            if filter_query:
                # This is a very limited mock of MongoDB filtering
                pass 
            return self.Cursor(items)

        async def count_documents(self, filter_query):
            return len(self.parent.data.get(self.name, []))

        async def insert_one(self, doc):
            self.parent.data[self.name].append(doc)
            self.parent.save()

        async def insert_many(self, docs):
            self.parent.data[self.name].extend(docs)
            self.parent.save()

        async def delete_many(self, filter_query):
            # Specialized for the orchestrator use case
            if "id" in filter_query and "$not" in filter_query["id"]:
                pattern = filter_query["id"]["$not"]
                self.parent.data[self.name] = [
                    item for item in self.parent.data[self.name]
                    if pattern.search(item["id"])
                ]
            else:
                self.parent.data[self.name] = []
            self.parent.save()

        async def update_one(self, filter_query, update_query):
            items = self.parent.data[self.name]
            for item in items:
                if all(item.get(k) == v for k, v in filter_query.items()):
                    if "$push" in update_query:
                        for k, v in update_query["$push"].items():
                            if k not in item: item[k] = []
                            item[k].append(v)
                    if "$set" in update_query:
                        for k, v in update_query["$set"].items():
                            item[k] = v
                    break
            self.parent.save()

        async def find_one(self, filter_query):
            items = self.parent.data[self.name]
            for item in items:
                if all(item.get(k) == v for k, v in filter_query.items()):
                    return item
            return None

        class Cursor:
            def __init__(self, items):
                self.items = items
            async def to_list(self, length):
                return self.items[:length]

    @property
    def findings(self):
        return self.Collection(self, "findings")

    @property
    def status_checks(self):
        return self.Collection(self, "status_checks")
