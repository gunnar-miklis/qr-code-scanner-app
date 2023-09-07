import { BarCodeScanner } from 'expo-barcode-scanner';
import { View, StyleSheet } from 'react-native';

export default function CommonBarCodeScanner( { showScanner, handleScanning } ) {
	return (
		<View style={styles.container}>
			<BarCodeScanner
				onBarCodeScanned={showScanner ? handleScanning : undefined}
				style={styles.barCodeScanner}
			/>
		</View>
	);
}

const styles = StyleSheet.create( {
	container: {
		aspectRatio: 1,
		width: '80%',
		overflow: 'hidden',
		backgroundColor: 'black',
		borderRadius: 10,
		marginBottom: 40,
	},
	barCodeScanner: {
		width: 'auto',
		height: 400,
	},
} );
