export function formatDate( date ) {
	const y = date.getFullYear();
	const m = date.getMonth().toString().padStart( 2, '0' );
	const d = date.getDay().toString().padStart( 2, '0' );
	const hh = date.getHours().toString().padStart( 2, '0' );
	const mm = date.getMinutes().toString().padStart( 2, '0' );
	const ss = date.getSeconds().toString().padStart( 2, '0' );
	return { y, m, d, hh, mm, ss };
}
