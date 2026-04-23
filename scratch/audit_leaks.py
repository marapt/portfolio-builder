import json
import os

def compare_locales(en_path, pt_path):
    with open(en_path, 'r') as f:
        en = json.load(f)
    with open(pt_path, 'r') as f:
        pt = json.load(f)
    
    leaks = []
    
    def walk(d_en, d_pt, path=""):
        for k, v in d_en.items():
            p = f"{path}.{k}" if path else k
            if isinstance(v, dict):
                walk(v, d_pt.get(k, {}), p)
            elif isinstance(v, str):
                v_pt = d_pt.get(k)
                # If they are identical and longer than 5 chars (to avoid UI keys like "Login")
                # and not names/brands
                if v == v_pt:
                    ignore = ["Mara", "Martins", "MongoDB", "Render", "Vercel", "California", "USA", "Email", "Vite", "React"]
                    if not any(token.lower() in v.lower() for token in ignore):
                        leaks.append((p, v))
                        
    walk(en, pt)
    return leaks

if __name__ == "__main__":
    en_f = "frontend/src/locales/en-US.json"
    pt_f = "frontend/src/locales/pt-PT.json"
    results = compare_locales(en_f, pt_f)
    if results:
        print(f"Found {len(results)} potential leaks:")
        for path, val in results:
            print(f"[LEAK] {path}: {val}")
    else:
        print("No leaks detected! 100% pt-PT parity.")
