import Api from '@/services/ApiQuran'

export default {
	getSurahList () {
		return Api().get('surah')
	},
}
