#!/usr/bin/env python3
import os
import stat
from pathlib import Path

def install_hook():
    root_dir = Path(__file__).parent.parent
    hooks_dir = root_dir / ".git" / "hooks"
    hook_path = hooks_dir / "post-commit"

    hook_content = f"""#!/bin/bash
# Automated Jira Sync Hook
echo "Triggering Jira Task Sync..."
cd {root_dir}
python3 backend/sync_to_jira.py
"""

    if not hooks_dir.exists():
        print("Error: .git/hooks directory not found. Are you in the root of the git repo?")
        return

    with open(hook_path, "w") as f:
        f.write(hook_content)

    # Make it executable
    st = os.stat(hook_path)
    os.chmod(hook_path, st.st_mode | stat.S_IEXEC)
    print(f"✅ Post-commit hook installed at {hook_path}")

if __name__ == "__main__":
    install_hook()