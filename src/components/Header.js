import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Ticket Scanner</Text>
			<Text style={styles.paragraph}>Scan a QR Code to validate a Ticket.</Text>
		</View>
	);
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	paragraph: {
		fontSize: 16,
		marginBottom: 40,
	},
} );
