#!/bin/bash

set -e

cd "$(dirname "$0")"
cd ..

if command -v rapper &>/dev/null; then
  dist/cli.js transform ijpds-dataset ../../data/ijpds/Measurement_System.json | \
    dist/cli.js load rdf | \
        rapper -i nquads -o turtle - https://purl.dataecosystems.org/wpg/data/ \
            -f 'xmlns:schema="https://schema.org/"' \
            -f 'xmlns:wpg="https://purl.dataecosystems.org/wpg/ontology#"'
else
  dist/cli.js transform ijpds-dataset ../../data/ijpds/Measurement_System.json | dist/cli.js load rdf
fi
