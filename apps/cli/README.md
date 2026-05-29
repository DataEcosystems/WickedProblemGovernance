# @wpg/cli

Command-line tools for the Wicked Problem Governance (WPG) data interchange.

## Building/Installation

See the [root README](https://github.com/DataEcosystems/WickedProblemGovernance).

## Commands

### `diff`

Compare two sets of interchange resources in JSONL and report differences.

```
npm exec wpg -- diff <left .jsonl file path> <right .jsonl file path>
```

Example:
```
cat ../../data/ijpds/Measurement_System.json | npm exec wpg -- from ijpds-dataset >../../data/ijpds/ijpds.jsonl

cat ../../data/ijpds/ijpds.jsonl | npm exec wpg -- to excel -o ../../data/ijpds/ijpds.xlsx

npm exec wpg -- from excel ../../data/ijpds/ijpds.xlsx >../../data/ijpds/ijpds-from-xlsx.jsonl

npm exec wpg -- diff ../../data/ijpds/ijpds.jsonl ../../data/ijpds/ijpds-from-xlsx.jsonl
```

### `from`

Sub-commands to produce interchange JSONL `from` other data formats.

#### axis-demo-excel

Produce interchange JSONL from the Mosaic Axis demo data spreadsheet.

```
npm exec -- wpg from axis-demo-excel
```

Example:

```
npm exec -- wpg from axis-demo-excel ../../data/axis-demo/demo\ data\ backfill.xlsx
```


#### `ijpds`

Produce interchange JSONL from the IJPDS dataset.

```
npm exec -- wpg from ijpds
```

Example:
```
cat ../../data/ijpds/Measurement_System.json | npm exec wpg -- from ijpds-dataset
```

### `excel`

Produce interchange JSONL froh an Excel workbook (.xlsx) or Google Sheets URL. The workbook is expected to be in the same format produced by `to excel`.

```
npm exec -- wpg from excel <path to .xlsx file or Google Sheets URL>
```

Example:
```
npm exec wpg -- from excel ijpds.xlsx
```

### `to`

Sub-commands to convert interchange JSONL `to` other data formats.

#### `excel`

Convert interchange JSONL to an Excel workbook.

```
npm exec wpg -- to excel -o <path to .xlsx file>
```

Example:
```
cat ../../data/ijpds/ijpds.jsonl | npm exec wpg -- to excel -o ../../data/ijpds/ijpds.xlsx
```

#### `rdf`

Convert interchange JSONL to [RDF](https://www.w3.org/TR/rdf11-concepts/) [N-Quads](https://www.w3.org/TR/n-quads/).

```
npm exec wpg -- to rdf
```

Example:
```
cat ../../data/ijpds/ijpds.jsonl | npm exec wpg -- to rdf
```

To convert to Turtle using [Raptor](https://librdf.org/raptor/):

```
cat ../../data/ijpds/ijpds.jsonl | npm exec wpg -- to rdf | \
    rapper -i nquads -o turtle - https://purl.dataecosystems.org/wpg/data/ \
        -f 'xmlns:schema="https://schema.org/"' \
        -f 'xmlns:wpg="https://purl.dataecosystems.org/wpg/ontology#"'
```