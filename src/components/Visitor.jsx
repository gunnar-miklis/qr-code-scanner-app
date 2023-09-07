import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { formatDate } from '../utils/functions';

function displayCheckInTime( checkInTime ) {
	const { y, m, d, hh, mm, ss } = formatDate( checkInTime );
	return `Check in date: ${y}-${m}-${d}\nCheck in time: ${hh}:${mm}:${ss}`;
}

export default function Visitor( { ticket } ) {
	function showTicket() {
		return Alert.alert( ticket.name, `Ticket ID: ${ticket.ticketID}\n\n${displayCheckInTime( ticket.checkInTime )}` );
	}
	return (
		<View>
			<TouchableOpacity onPress={ () => showTicket() }>
				<Text>✅ {ticket.name}</Text>
			</TouchableOpacity>
		</View>
	);
}
