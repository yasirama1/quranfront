<template>
  <div>


    <div>
      <b-form-select v-model="filterData.surat_no" class="mb-3">
        <b-form-select-option v-for="surah in surahList" :key="surah.id" :value="surah.id">{{surah.id}} - {{surah.name}}</b-form-select-option>
      </b-form-select>


      <b-form-checkbox-group
        id="flavors"
        v-model="filterData.translated_by"
        :options="translatorList"
        name="flavors"
        class="ml-4"
        aria-label="Translators"
        stacked
      ></b-form-checkbox-group>


      <b-button v-on:click = "loadTranslations()" variant="success">Search</b-button>
    </div>
    <br>

    <div>
      <b-list-group >
        <b-list-group-item class="" v-for="ayat in ayats" :key="ayat.id" variant="">
              <div v-if = "ayat.translated_by">
                <div class = "col">
                  <div class = "text-right">
                      <div v-if="ayat.arabic">{{ayat.arabic.text}}</div>
                  </div>
                    <br>
                  <div class = "row" v-for="i in ayat.translated_by.length" :key="i" >
                    <div class = "col-md-3 text-left" style="font-size: 65%">
                        {{ayat.arabic.number}} - {{ayat.translated_by[i-1]}}
                    </div>
                    <div class = "col-md-9 text-right" >
                      {{ayat.translations[i-1]}}
                    </div>
                  </div>
                </div>
              </div>
        </b-list-group-item>
      </b-list-group>
    </div>

  </div>
</template>

<script>

import tasService from '@/services/tasService'


export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  async mounted () {
    this.loadTranslations()
    this.loadSurahList()
    this.loadTranslators()
  },

  data () {
    return {
      translations: null,
      filterData: {
        surat_no: 1,
        translated_by: []
      },
      ayats: [{translation: 123}],
      surahList: null,
      translatorList: null,
      countTrans: 0,
    }
  },


  methods: {
    async loadTranslations(){
      
      try{
        console.log("loadTranslations called")
        this.ayats = (await tasService.indexCustom(this.filterData)).data
        console.log(this.ayats)
      }
      catch(e){
        console.log(e.message)
      }

    },
    async loadSurahList(){
      
      try{
        this.surahList = (await tasService.getSurahList()).data
      }
      catch(e){
        console.log(e.message)
      }

    },
    async loadTranslators(){
      
      try{
        this.translatorList = (await tasService.getTranslatorList()).data
      }
      catch(e){
        console.log(e.message)
      }

    },
    async checkModTrans(){
      
      if (this.countTrans % this.ayats.noOfTranslators == 0){
        this.countTrans=0
        return true
      }
      this.countTrans++
      return false;

    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
