#!/bin/bash

set -e

cd "$(dirname "$0")"
cd ..

cat ../../data/ijpds/Measurement_System.json | dist/cli.js transform ijpds-dataset | dist/cli.js load excel -o ../../data/ijpds/ijpds.xlsx
