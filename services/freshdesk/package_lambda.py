#!/usr/bin/env python3
"""Build a deployment ZIP for the Freshdesk Lambda."""

from __future__ import annotations

import argparse
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo

FIXED_TIMESTAMP = (1980, 1, 1, 0, 0, 0)


def add_file(zip_file: ZipFile, source: Path, archive_name: str) -> None:
    info = ZipInfo(archive_name, FIXED_TIMESTAMP)
    info.compress_type = ZIP_DEFLATED
    info.external_attr = 0o100644 << 16
    zip_file.writestr(info, source.read_bytes())


def build_zip(output_path: Path) -> Path:
    service_dir = Path(__file__).resolve().parent
    handler_path = service_dir / "handler.py"

    if not handler_path.exists():
        raise FileNotFoundError(f"Missing Lambda entrypoint: {handler_path}")

    output_path.parent.mkdir(parents=True, exist_ok=True)

    with ZipFile(output_path, mode="w") as zip_file:
        add_file(zip_file, handler_path, "handler.py")

    return output_path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        default="dist/freshdesk-proxy.zip",
        help="Path to write the deployment ZIP (default: dist/freshdesk-proxy.zip)",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    service_dir = Path(__file__).resolve().parent
    output_path = (service_dir / args.output).resolve()
    archive = build_zip(output_path)
    print(f"Created deployment archive: {archive}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
