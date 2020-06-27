const axiosLoaded = require('axios')

export default () => {
	var axios = axiosLoaded.create({
		// baseURL: 'http://localhost:3000'
		baseURL: 'https://quranserver.herokuapp.com'
	})

	return axios;
}