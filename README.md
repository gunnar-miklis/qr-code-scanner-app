

## SETUP
#### install
```bash
yarn create expo-app QrCodeScanner
mv -v QrCodeScanner qr-code-scanner
cd qr-code-scanner

yarn expo add expo-camera
yarn expo install expo-barcode-scanner

yarn add -D eslint eslint-plugin-react eslint-plugin-react-hooks
yarn run eslint --init
```
#### run
```bash
yarn expo start # --tunnel

```