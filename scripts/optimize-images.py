"""Optimize the gym's photos for web use.

Reads every image in ./photos, converts it to compressed WebP and copies it
into ./public/photos with stable, descriptive-ish filenames. The originals in
./photos are never modified.

Usage:
    python3 scripts/optimize-images.py
"""

import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required: pip install pillow")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "photos")
DST = os.path.join(ROOT, "public", "photos")

MAP = {
    "img-1.png": "img-1.webp",
    "img-2.png": "img-2.webp",
    "img-3.png": "img-3.webp",
    "img-4.png": "img-4.webp",
    "img-5.png": "img-5.webp",
    "img-6.png": "img-6.webp",
    "img-7.png": "img-7.webp",
    "logo.jpg": "logo.webp",
}

TMP = os.path.join(ROOT, "photos", ".rgb_tmp")


def webp(path, out, size=None, quality=82):
    img = Image.open(path)
    if img.mode != "RGB":
        img = img.convert("RGB")
    if size:
        img = img.resize(size, Image.LANCZOS)
    img.save(out, "WEBP", quality=quality, method=6)


def main():
    os.makedirs(DST, exist_ok=True)
    for src, dst in MAP.items():
        src_path = os.path.join(SRC, src)
        if not os.path.exists(src_path):
            print("MISSING:", src_path)
            continue
        webp(src_path, os.path.join(DST, dst))
        print("ok:", src, "->", dst)

    # Icons / OG image built from the logo + hero photo.
    logo = os.path.join(SRC, "logo.jpg")
    hero = os.path.join(SRC, "img-2.png")

    icon = os.path.join(ROOT, "app", "icon.png")
    os.makedirs(os.path.dirname(icon), exist_ok=True)
    img = Image.open(logo).convert("RGB").resize((256, 256), Image.LANCZOS)
    img.save(icon, "PNG")

    apple = os.path.join(ROOT, "app", "apple-icon.png")
    img.save(apple, "PNG")

    # Open Graph image: dark panel, yellow wordmark, hero photo strip.
    og_path = os.path.join(ROOT, "public", "og.png")
    W, H = 1200, 630
    og = Image.new("RGB", (W, H), (9, 9, 11))
    hero_img = Image.open(hero).convert("RGB").resize((560, 350), Image.LANCZOS)
    og.paste(hero_img, (20, 260))
    try:
        from PIL import ImageFont

        font_bold = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 92
        )
        font_small = ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 36
        )
        draw = ImageDraw(og)
        draw.text((640, 130), "TRAIN HARDER.", font=font_bold, fill=(250, 250, 250))
        draw.text((640, 250), "LIVE STRONGER.", font=font_bold, fill=(223, 225, 4))
        draw.text(
            (640, 400),
            "LUXURY FITNESS PUNJABI BAGH",
            font=font_small,
            fill=(161, 161, 170),
        )
        draw.text(
            (640, 455),
            "NEW DELHI",
            font=font_small,
            fill=(161, 161, 170),
        )
    except Exception:
        pass
    og.save(og_path, "PNG")
    print("ok: og.png")

    if os.path.isdir(TMP):
        for f in os.listdir(TMP):
            os.remove(os.path.join(TMP, f))
        os.rmdir(TMP)


if __name__ == "__main__":
    main()