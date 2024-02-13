<script>
  import SingleCard from './SingleCard.vue';
  import { store } from '../../store';

  export default{
    name: "CardList",
    components: {
      SingleCard
    },
    data(){
      return{
        store
      }
    }
  }

</script>

<template>
  <div class="back-cards">
    Found {{ store.ArrayCards.length }} cards
  </div>

  <div class="cardList">
    <SingleCard 
      v-for="(element, index) in store.ArrayCards"
      :key="index"
      :propsElement="element"
    />
  </div>
</template>

<style scoped lang="scss">
  .back-cards{
    background-color: black;
    color: white;
    font-weight: bold;
    padding: 20px; 
    margin-block: 10px;
  }
  .cardList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
</style>
