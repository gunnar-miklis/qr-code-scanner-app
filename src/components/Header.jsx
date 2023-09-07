import { Text, View, StyleSheet, StatusBar } from 'react-native';

export default function Header( { title, subtitle } ) {
	return (
		<View style={styles.container}>

			<StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />

			<Text style={styles.title}>{title ? title : 'Ticket Scanner'}</Text>
			{ subtitle && <Text style={styles.paragraph}>{subtitle}</Text> }
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
