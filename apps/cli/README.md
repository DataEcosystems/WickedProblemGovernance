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
cat ../../data/ijpds/Measurement_System.json | npm exec wpg -- transform ijpds-dataset >../../data/ijpds/ijpds.jsonl

cat ../../data/ijpds/ijpds.jsonl | npm exec wpg -- load excel -o ../../data/ijpds/ijpds.xlsx

npm exec wpg -- transform excel ../../data/ijpds/ijpds.xlsx >../../data/ijpds/ijpds-from-xlsx.jsonl

npm exec wpg -- diff ../../data/ijpds/ijpds.jsonl ../../data/ijpds/ijpds-from-xlsx.jsonl
```

### `load`

Sub-commands to load the interchange JSONL to other data formats.

#### `excel`

Loads WPG interchange resources in JSONL into an Excel workbook.

```
npm exec wpg -- load excel <path to .xlsx file>
```

Example:
```
cat ../../data/ijpds/ijpds.jsonl | npm exec wpg -- load excel -o ../../data/ijpds/ijpds.xlsx
```

#### `rdf`

Loads WPG interchange resources in JSONL into RDF N-Quads.

```
npm exec wpg -- load rdf
```

Example:
```
cat ../../data/ijpds/ijpds.jsonl | npm exec wpg -- load rdf
```

To convert to Turtle using [Raptor](https://librdf.org/raptor/):

```
cat ../../data/ijpds/ijpds.jsonl | npm exec wpg -- load rdf | \
    rapper -i nquads -o turtle - https://purl.dataecosystems.org/wpg/data/ \
        -f 'xmlns:schema="https://schema.org/"' \
        -f 'xmlns:wpg="https://purl.dataecosystems.org/wpg/ontology#"'
```

### `transform`

Sub-commands to transform other data formats to the interchange in JSONL.

#### `ijpds`

Transforms the IJPDS dataset into interchange JSONL.

```
npm exec -- wpg transform ijpds
```

Example:
```
cat ../../data/ijpds/Measurement_System.json | npm exec wpg -- transform ijpds-dataset
```

### `excel`

Transform an Excel workbook (.xlsx) or Google Sheets URL. The format is expected to be the same format loaded by `load excel`.

```
npm exec -- wpg transform excel <path to .xlsx file or Google Sheets URL>
```

Example:
```
npm exec wpg -- transform excel ijpds.xlsx
```
