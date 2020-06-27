const axiosLoaded = require('axios')

export default () => {
	var axios = axiosLoaded.create({
		baseURL: 'http://api.alquran.cloud/v1'
	})

	// axios.defaults.headers.common['Authorization'] = 'bearer '+ localStorage.getItem('jwt');
	return axios;
}