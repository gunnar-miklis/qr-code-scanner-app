import { Text, View, StyleSheet } from 'react-native';
import Visitor from './Visitor';

export default function CheckedInList( { checkedInVisitors } ) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Checked-In</Text>
			{
				checkedInVisitors.map( ( ticket ) => (
					<Visitor key={ticket.ticketID} ticket={ticket} />
				) )
			}
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
		marginTop: 40,
	},
} );
