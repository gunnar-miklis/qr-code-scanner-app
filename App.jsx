import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { purchasedTickets } from './mockData/mockData';
import Header from './src/components/Header';
import CommonBarCodeScanner from './src/components/CommonBarCodeScanner';
import CheckedInList from './src/components/CheckedInList';


export default function App() {
	const [ hasPermission, setHasPermission ] = useState( false );
	const [ visitors, setVisitors ] = useState( purchasedTickets );
	const [ checkedInVisitors, setCheckedInVisitors ] = useState( [] );
	const [ showScanner, setShowScanner ] = useState( false );

	useEffect( () => {
		getBarCodeScannerPermissions();
	}, [] );

	async function getBarCodeScannerPermissions() {
		const permission = await BarCodeScanner.requestPermissionsAsync();
		setHasPermission( permission.status === 'granted' );
	}

	function filterVisitors() {
		const filteredVisitors = visitors.filter( ( visitor ) => visitor.isCheckedIn );
		setCheckedInVisitors( filteredVisitors );
	}

	function handleScanning( { data } ) {
		setShowScanner( false );

		for ( const visitor of visitors ) {
			if ( visitor.ticketID === data ) {
				return Alert.alert( 'Valid Ticket!', `Name: ${visitor.name}\nTicket ID: ${visitor.ticketID}`,
					[
						{
							text: 'Cancel',
							onPress: () => setShowScanner( true ),
							style: 'cancel',
						},
						{
							text: 'Check In',
							onPress: () => {
								const currentTime = new Date();
								visitor.isCheckedIn = true;
								visitor.checkInTime = currentTime;
								filterVisitors();
								setShowScanner( true );
							},
							style: 'default',
						},
					],
					{
						cancelable: true,
						onDismiss: () => setShowScanner( true ),
					},
				);
			}
		}
		return Alert.alert( 'Ticket NOT found!', `Ticket ID: ${data}`,
			[
				{
					text: 'Ok',
					onPress: () => setShowScanner( true ),
					style: 'default',
				},
			],
		);
	}

	if ( !hasPermission ) {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<Header title='Setup'/>
					<Button
						title='🔐  Allow Camera Access'
						onPress={ () => getBarCodeScannerPermissions() }
					/>
				</ScrollView>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>

				<Header subtitle='Scan a QR Code to validate a Ticket.'/>

				{
					showScanner ? (
						<View style={styles.container}>
							<CommonBarCodeScanner showScanner={showScanner} handleScanning={handleScanning} />
							<Button title='Close' onPress={ () => setShowScanner( false ) } />
						</View>
					) :
						<Button title='Scan' onPress={ () => setShowScanner( true ) } />
				}

				{ checkedInVisitors.length > 0 && <CheckedInList checkedInVisitors={checkedInVisitors} /> }

			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: StatusBar.currentHeight,
	},
} );
