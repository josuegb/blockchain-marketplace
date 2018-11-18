## Test Convector

### conv generate

The easiest way to include new chaincodes, and model and controller files.

```bash
# Creates a chaincode package with a `model` and `controller` default. This needs to be run inside a Convector project folder.
conv generate chaincode <chaincode-name>
```

```bash
# Creates the file in the current folder (by overriding the folder conventions).
conv generate model <chaincode-name>
```

```bash
# Creates the file in the current folder (by overriding the folder conventions).
conv generate controller <chaincode-name>
```
