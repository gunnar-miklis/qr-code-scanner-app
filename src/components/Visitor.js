import { Alert, Text, TouchableOpacity, View } from 'react-native';

function formatDate( checkInTime ) {
	const y = checkInTime.getFullYear();
	const m = checkInTime.getMonth().toString().padStart( 2, '0' );
	const d = checkInTime.getDay().toString().padStart( 2, '0' );
	const hh = checkInTime.getHours().toString().padStart( 2, '0' );
	const mm = checkInTime.getMinutes().toString().padStart( 2, '0' );
	const ss = checkInTime.getSeconds().toString().padStart( 2, '0' );
	return `Check in date: ${y}-${m}-${d}\nCheck in time: ${hh}:${mm}:${ss}`;
}

export default function Visitor( { ticket } ) {
	function showTicket() {
		return Alert.alert( ticket.name, `Ticket ID: ${ticket.ticketID}\n\n${formatDate( ticket.checkInTime )}` );
	}
	return (
		<View>
			<TouchableOpacity onPress={ () => showTicket() }>
				<Text>✅ {ticket.name}</Text>
			</TouchableOpacity>
		</View>
	);
}
