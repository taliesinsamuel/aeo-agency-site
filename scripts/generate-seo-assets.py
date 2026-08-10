#!/usr/bin/env python3
"""Generate og-image.png and apple-touch-icon.png from existing brand colors."""
from __future__ import annotations

import os

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))


def load_font(size: int) -> ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size=size)
            except OSError:
                continue
    return ImageFont.load_default()


def draw_mark(draw: ImageDraw.ImageDraw, x: int, y: int, scale: float = 1.0) -> None:
    """Three slanted pill marks matching the Answered Labs logo silhouette."""
    w = int(14 * scale)
    h = int(42 * scale)
    gap = int(10 * scale)
    radius = int(7 * scale)
    for i in range(3):
        ox = x + i * gap
        # Slight slant via polygon approximation of rounded rects.
        draw.rounded_rectangle(
            (ox, y, ox + w, y + h),
            radius=radius,
            fill="#1c1d1f",
        )


def make_og() -> None:
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), "#f4f5f7")
    draw = ImageDraw.Draw(img)

    # Soft atmosphere (no flat single-color field).
    for i in range(0, w, 28):
        for j in range(0, h, 28):
            draw.ellipse((i, j, i + 2, j + 2), fill="#d9dde3")

    # Center card glow
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse((280, 40, 920, 420), fill=(120, 150, 220, 28))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
    draw = ImageDraw.Draw(img)

    draw_mark(draw, 96, 168, scale=2.2)
    title = load_font(72)
    sub = load_font(34)
    draw.text((196, 175), "Answered Labs", font=title, fill="#1c1d1f")
    draw.text(
        (96, 300),
        "Be the business AI recommends.",
        font=sub,
        fill="#4a5160",
    )
    draw.text(
        (96, 360),
        "Answer Engine Optimization for local businesses",
        font=load_font(28),
        fill="#6f7988",
    )
    draw.text((96, 540), "answeredlabs.com", font=load_font(26), fill="#8a93a3")
    out = os.path.join(ROOT, "og-image.png")
    img.save(out, "PNG", optimize=True)
    print("wrote", out)


def make_apple() -> None:
    size = 180
    img = Image.new("RGB", (size, size), "#ffffff")
    draw = ImageDraw.Draw(img)
    # Centered mark
    draw_mark(draw, 52, 48, scale=1.7)
    out = os.path.join(ROOT, "apple-touch-icon.png")
    img.save(out, "PNG", optimize=True)
    print("wrote", out)


if __name__ == "__main__":
    make_og()
    make_apple()
