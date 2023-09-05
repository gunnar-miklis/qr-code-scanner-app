import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { purchasedTickets } from './mockDB/mockData';
import Header from './src/components/Header';
import CommonBarCodeScanner from './src/components/CommonBarCodeScanner';
import CheckedInList from './src/components/CheckedInList';


export default function App() {
	const [ hasPermission, setHasPermission ] = useState( false );
	const [ visitors, setVisitors ] = useState( purchasedTickets );
	const [ scanned, setScanned ] = useState( false );
	const [ showScanner, setShowScanner ] = useState( false );

	useEffect( () => {
		getBarCodeScannerPermissions();
	}, [] );

	async function getBarCodeScannerPermissions() {
		const permission = await BarCodeScanner.requestPermissionsAsync();
		setHasPermission( permission.status === 'granted' );
	}

	function handleBarCodeScan( { data } ) {
		setShowScanner( false );
		setScanned( true );

		for ( const visitor of visitors ) {
			if ( visitor.ticketID === data ) {
				return Alert.alert( 'Valid Ticket!', `Name: ${visitor.name}\nTicket ID: ${visitor.ticketID}`,
					[
						{
							text: 'Cancel',
							onPress: () => setScanned( false ),
							style: 'cancel',
						},
						{
							text: 'Check In',
							onPress: () => {
								visitor.isCheckedIn = true;
								setVisitors( visitors );
								setScanned( false );
								setShowScanner( false );
							},
							style: 'default',
						},
					],
					{
						cancelable: true,
						onDismiss: () => {},
					},
				);
			}
		}
		setScanned( false );
		setShowScanner( false );
		return Alert.alert( 'Ticket NOT found!', `Ticket ID: ${data}` );
	}

	if ( !hasPermission ) {
		return (
			<View style={styles.container}>
				<Header/>
				<Button
					title='Allow Camera Access 🔐'
					onPress={ () => getBarCodeScannerPermissions() }
				/>
			</View>
		);
	}

	return (
		<View style={styles.container}>

			<StatusBar style="auto" />

			<Header/>

			{
				showScanner ?
					<CommonBarCodeScanner scanned={scanned} handleBarCodeScan={handleBarCodeScan} /> :
					<Button title='Open Scanner' onPress={() => setShowScanner( showScanner ? false : true )} />
			}

			<CheckedInList visitors={visitors} />

		</View>
	);
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: '100%',
	},
} );
