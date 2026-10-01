# Template reproduksi bug Python - Mrkus-Dev
# Usage: python reproduce.py
print("Reproducing bug...")

try:
    # Tulis kode pemicu bug di sini
    print("Bug NOT reproduced - cek issue lagi")
except Exception as e:
    print(f"Bug reproduced: {e}")
