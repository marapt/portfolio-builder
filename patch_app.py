import re

with open('../agentic-lab/frontend/src/App.jsx', 'r') as f:
    content = f.read()

# The block to extract
block_start = "  const isActuallyUnlocked = isUnlocked || isSignedIn;"
block_end_marker = "  return (\n    <div className=\"app-container\">"

start_idx = content.find(block_start)
end_idx = content.find(block_end_marker)

if start_idx != -1 and end_idx != -1:
    block_to_move = content[start_idx:end_idx]
    
    # Remove it from the bottom
    content = content[:start_idx] + content[end_idx:]
    
    # Find insertion point at top
    insert_marker = "  if (view === 'portal') {"
    insert_idx = content.find(insert_marker)
    
    # Remove the 'Back to Lab Portal' button and onClick from brand so they can't bypass it!
    block_to_move = block_to_move.replace("onClick={() => setView('portal')}", "")
    # Remove the back button entirely
    back_btn_regex = r'<button className="action-btn secondary" style={{ width: \'100%\', marginTop: \'1rem\', padding: \'0.8rem\', display: \'flex\', alignItems: \'center\', justifyContent: \'center\', gap: \'8px\', fontSize: \'0.85rem\' }} onClick=\{[^}]+\}>\s*← Back to Lab Portal\s*</button>'
    block_to_move = re.sub(back_btn_regex, "", block_to_move)

    if insert_idx != -1:
        # Insert at the top
        content = content[:insert_idx] + block_to_move + "\n" + content[insert_idx:]
        
        with open('../agentic-lab/frontend/src/App.jsx', 'w') as f:
            f.write(content)
        print("Success! Moved lockscreen to front.")
    else:
        print("Could not find insert point")
else:
    print("Could not find block to extract")

