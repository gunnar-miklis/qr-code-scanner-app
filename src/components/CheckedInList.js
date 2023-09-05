import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CheckedInList( { visitors } ) {
	const [ checkedInVisitors, setCheckedInVisitors ] = useState( [] );

	useEffect( () => {
		if ( visitors ) {
			const filteredVisitors = visitors.filter( ( visitor ) => visitor.isCheckedIn );
			setCheckedInVisitors( filteredVisitors );
		}
	}, [] );

	if ( !checkedInVisitors.length ) return;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Checked-In</Text>
			{
				checkedInVisitors && checkedInVisitors.map( ( ticket ) => (
					<Text key={ticket.ticketID}>✅ {ticket.name}</Text>
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
