#!/usr/bin/env python3
"""Generate simple PWA PNG icons without extra dependencies."""

from __future__ import annotations

import struct
import zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "icons"
PUBLIC = ROOT / "public"


def chunk(tag: bytes, data: bytes) -> bytes:
    return (
        struct.pack(">I", len(data))
        + tag
        + data
        + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
    )


def write_png(path: Path, size: int, rgba_at) -> None:
    raw = bytearray()
    for y in range(size):
        raw.append(0)
        for x in range(size):
            raw.extend(rgba_at(x, y, size))
    ihdr = struct.pack(">IIBBBBB", size, size, 8, 6, 0, 0, 0)
    png = (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", ihdr)
        + chunk(b"IDAT", zlib.compress(bytes(raw), 9))
        + chunk(b"IEND", b"")
    )
    path.write_bytes(png)


def lerp(a: int, b: int, t: float) -> int:
    return int(a + (b - a) * t)


def paint(x: int, y: int, size: int) -> bytes:
    # Deep pine background with a simple van glyph
    s = size / 512
    px, py = x / s, y / s
    r, g, b = 22, 53, 43

    def inside_rect(x0, y0, x1, y1, rad=0):
        cx = min(max(px, x0 + rad), x1 - rad)
        cy = min(max(py, y0 + rad), y1 - rad)
        if rad <= 0:
            return x0 <= px <= x1 and y0 <= py <= y1
        dx, dy = px - cx, py - cy
        return dx * dx + dy * dy <= rad * rad

    def circle(cx, cy, rad):
        return (px - cx) ** 2 + (py - cy) ** 2 <= rad * rad

    # Van body
    if inside_rect(96, 268, 416, 352, 18):
        r, g, b = 231, 238, 228
    # Cabin
    if inside_rect(132, 188, 292, 276, 16):
        r, g, b = 201, 214, 196
    # Window
    if inside_rect(152, 208, 252, 256, 8):
        r, g, b = 63, 106, 88
    # Wheels
    if circle(178, 368, 28) or circle(348, 368, 28):
        r, g, b = 22, 53, 43
    if circle(178, 368, 10) or circle(348, 368, 10):
        r, g, b = 216, 226, 214

    return bytes((r, g, b, 255))


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    write_png(OUT / "pwa-192.png", 192, paint)
    write_png(OUT / "pwa-512.png", 512, paint)
    write_png(PUBLIC / "apple-touch-icon.png", 180, paint)


if __name__ == "__main__":
    main()
