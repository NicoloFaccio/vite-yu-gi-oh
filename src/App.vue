<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import axios from 'axios';
  import { store } from './store';

  export default{
    components: {
      AppHeader,
      AppMain
    },
    data(){
      return{
        store
      }
    },
    mounted() {
      this.getData(),
      this.getArchetype()
    },
    methods: {
      getData(){
        if(store.selectValue){
          store.ApiUrl += `&archetype${store.selectValue}`
        }

        axios.get(store.ApiUrl).then((response) => {
          store.ArrayCards = response.data.data
        })
      },
      getArchetype(){
        axios.get(store.ApiUrlArchetype).then((response) => {
          store.ArrayArchetypes = response.data
        })
      }
    }
  }

</script>

<template>
  <AppHeader/>

  <AppMain @searchList="getData()"/>
</template>

<style lang="scss">
  @use './styles/general.scss' as *;
</style>
