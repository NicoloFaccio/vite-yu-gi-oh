<script>
  import { store } from '../../store';

  export default{
    name: "SingleCard",
    props: [
      'propsElement'
    ],
    data(){
      return{
        store
      }
    }
  }

</script>

<template>
  <div class="cardImage">
    <div>
      <img :src="propsElement.card_images[0].image_url" alt="image creature">
      <div>
        <h4>{{ propsElement.name }}</h4>
        <span>{{ propsElement.archetype }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .cardImage{
    flex-basis: calc(100% / 5 - 20px);
    background-color: rgba(212, 143, 56, 1);
    div {
      img {
        width: 100%;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 160%;
        h4 {
          color: white;
        }
      }
    }
  }
</style>
