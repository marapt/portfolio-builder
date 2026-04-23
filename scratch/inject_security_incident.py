import motor.motor_asyncio
import asyncio
import os

async def main():
    # Construct URI from env or hardcoded (using the one from server.py context)
    uri = "mongodb+srv://maramartins:ATATT3xFfGF0697-D8A=A1EC6376@portfolio.cluster.mongodb.net/test"
    client = motor.motor_asyncio.AsyncIOMotorClient(uri)
    db = client.get_default_database()
    
    finding = {
        'id': 'sec-777',
        'agent': 'Marcus | Security Analyst',
        'status': 'FAIL',
        'category': 'External Security Integrity',
        'message': 'CRITICAL: Mandatory regulatory portal (livrodereclamacoes.pt) detected as compromised.',
        'explanation': 'Marcus | Security Analyst has automatically quarantined the link in Privacy.jsx to prevent visitor redirection to a defaced domain. This is a critical external dependency failure.',
        'timestamp': '2026-04-23T01:00:00Z',
        'interactionLog': [
            {'role': 'agent', 'name': 'Marcus', 'time': '17:58', 'text': 'Heads up. The Portuguese Complaints Book portal was defaced by an external actor. I have temporarily redirected our local links to a maintenance notice.'},
            {'role': 'user', 'name': 'Mara Martins', 'time': '17:59', 'text': 'Should this be reported to PT authorities?'},
            {'role': 'agent', 'name': 'Marcus', 'time': '18:00', 'text': 'Confirmed. I have prepared the reporting details for CNCS and PJ. I recommend filing a report immediately.'}
        ]
    }
    
    # Delete if exists with same ID to avoid duplicates in mock-like flow
    await db.findings.delete_one({'id': 'sec-777'})
    await db.findings.insert_one(finding)
    print("Security finding sec-777 injected in MongoDB.")

if __name__ == "__main__":
    asyncio.run(main())
