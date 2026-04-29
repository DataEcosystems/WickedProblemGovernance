#!/bin/bash

set -e

cd "$(dirname "$0")"
cd ..

dist/cli.js transform ijpds-dataset ../../data/ijpds/Measurement_System.json
