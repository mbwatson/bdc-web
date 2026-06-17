#!/usr/bin/env python3
"""Package and deploy the Freshdesk Lambda ZIP using AWS CLI."""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


def run(command: list[str]) -> None:
    print("+", " ".join(command))
    subprocess.run(command, check=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--function-name",
        required=True,
        help="Lambda function name to update",
    )
    parser.add_argument(
        "--region",
        default=None,
        help="AWS region (uses default profile region when omitted)",
    )
    parser.add_argument(
        "--zip-path",
        default="dist/freshdesk-proxy.zip",
        help="Deployment ZIP path relative to services/freshdesk",
    )
    parser.add_argument(
        "--publish",
        action="store_true",
        help="Publish a new Lambda version after updating code",
    )
    parser.add_argument(
        "--skip-package",
        action="store_true",
        help="Skip rebuilding the ZIP before deploy",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    service_dir = Path(__file__).resolve().parent
    zip_path = (service_dir / args.zip_path).resolve()

    if not args.skip_package:
        package_script = service_dir / "package_lambda.py"
        run([sys.executable, str(package_script), "--output", str(zip_path)])

    if not zip_path.exists():
        raise FileNotFoundError(f"Missing deployment ZIP: {zip_path}")

    update_command = [
        "aws",
        "lambda",
        "update-function-code",
        "--function-name",
        args.function_name,
        "--zip-file",
        f"fileb://{zip_path}",
    ]
    if args.region:
        update_command.extend(["--region", args.region])
    if args.publish:
        update_command.append("--publish")

    run(update_command)

    wait_command = [
        "aws",
        "lambda",
        "wait",
        "function-updated",
        "--function-name",
        args.function_name,
    ]
    if args.region:
        wait_command.extend(["--region", args.region])

    run(wait_command)
    print("Freshdesk Lambda deploy complete.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
