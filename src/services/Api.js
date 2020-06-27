const axiosLoaded = require('axios')

export default () => {
	var axios = axiosLoaded.create({
		baseURL: 'https://quranserver.herokuapp.com'
	})

	// axios.defaults.headers.common['Authorization'] = 'bearer '+ localStorage.getItem('jwt');
	return axios;
}