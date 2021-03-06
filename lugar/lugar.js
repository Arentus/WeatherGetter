const axios = require('axios');

const getLugarLatLng = async(direccion) => {

let encondedUrl = encodeURI(direccion);

let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encondedUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

	if (resp.data.status === 'ZERO_RESULTS') {
		throw new Error(`No hay resultados para la ciudad ${ direccion }`);
	}

	let location = resp.data.results[0];

	return {
		direccion: location.formatted_address,
		latitud : location.geometry.location.lat,
		longitud : location.geometry.location.lng
	}
}

module.exports = {
	getLugarLatLng
}