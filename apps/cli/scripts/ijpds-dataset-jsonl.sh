#!/bin/bash

set -e

cd "$(dirname "$0")"
cd ..

cat ../../data/ijpds/Measurement_System.json | dist/cli.js transform ijpds-dataset
