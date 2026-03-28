#!/usr/bin/env python3
"""Extract locale data from copy.ts into separate files."""
import os

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, "src", "lib", "copy.ts")
OUT = os.path.join(BASE, "src", "lib", "copy")

with open(SRC, "r") as f:
    lines = f.readlines()

locales = {
    "en": (981, 2183),
    "es": (2184, 2550),
    "it": (2551, 2870),
    "fr": (2871, 3125),
    "de": (3126, 3315),
    "zh": (3316, 3541),
}

os.makedirs(OUT, exist_ok=True)

for locale, (start, end) in locales.items():
    block_lines = lines[start - 1 : end]
    block = "".join(block_lines).strip()
    colon_idx = block.index(": ")
    block = block[colon_idx + 2 :]
    if block.endswith(","):
        block = block[:-1]

    ta = (
        "Record<CopyKey, string>"
        if locale == "en"
        else "Partial<Record<CopyKey, string>>"
    )
    content = (
        f'import type {{ CopyKey }} from "@/lib/copy";\n\n'
        f"const {locale}: {ta} = {block};\n\n"
        f"export default {locale};\n"
    )

    path = os.path.join(OUT, f"{locale}.ts")
    with open(path, "w") as out:
        out.write(content)
    print(f"{locale}: wrote {path} ({content.count(chr(10))} lines)")

print("Done")
