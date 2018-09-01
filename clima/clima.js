const axios = require('axios');

const getClima = async(lat,lng) => {

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b67db8b1a93bf34cae05723c0512a1ca`)
		
	return resp.data.main.temp ;
}

module.exports = {
	getClima
}