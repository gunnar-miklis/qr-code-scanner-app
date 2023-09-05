import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, StyleSheet } from 'react-native';

export default function CommonBarCodeScanner( { scanned, handleBarCodeScan } ) {
	return (
		<View style={styles.container}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScan}
				style={[ StyleSheet.absoluteFill, styles.barCodeScanner ]}
				ratio={'1:1'}
			/>
		</View>
	);
}

const styles = StyleSheet.create( {
	container: {
		width: '70%',
		aspectRatio: 1,
		backgroundColor: 'black',
	},
} );
