//en esta fase del curso crearemos una app que de el clima con un comando como: 
	//node app -d Madrid España
	// como en este caso no tenemos un comando por ej 'crear' usamos options 
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
	direccion : {

		alias  : 'd',
		desc   : 'Descripcion de la ciudad para obtener el clima.',
		demand : true
	},
	latitud : {
		alias : 'lat',
		desc : 'Es la latitud de la ubicacion para obtener el clima'
	},
	longitud : {
		alias : 'lng',
		desc: 'Es la longitud de la ubicacion para obtener el clima'
	}
}).argv;
/*
lugar.getLugarLatLng(argv.direccion)
		.then( resp =>  {
			console.log(resp)
		})
		.catch(e=>console.log(e));
*/
let getInfo = async () => {

	let coors = await lugar.getLugarLatLng(argv.direccion);
	let temp = await clima.getClima(coors.latitud,coors.longitud);

	return `El clima en ${coors.direccion} es de ${temp}`;
}

//  10.2441931
// -67.60661640000001
/*
clima.getClima(7.8806888,-67.46953069999999)
.then( temp => {
	console.log("La temperatura es : "+temp);
})
.catch(e=>console.log(e));

*/

//--- upgrade to >

	getInfo(argv.direccion)
		.then(message=> console.log(message))
		.catch(e=>console.log(e))


