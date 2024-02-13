<script>
  import CardList from './Cards/CardList.vue';
  import { store } from '../store';

  export default{
    name: "AppMain",

    data(){
      return {
        store
      }
    },

    components: {
      CardList
    }
  }

</script>

<template>
    <main>
        <section>
          <div>
            <select
              class="selection"
              name=""
              id=""
              v-model="store.selectValue"
              @change="$emit('searchList')"
            >
              <option
                :value="element.archetype_name"
                v-for="(element,index) in store.ArrayArchetypes"
                :key="index"
              >
                {{ element.archetype_name }}
              </option>
            </select>
          </div>

          <div class="back-list">
            <CardList/>
          </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
  main{
    background-color: rgba(212, 143, 56, 1);
    padding-bottom: 20px;
    section {
      margin: 0 auto;
      width: 80%;
      .selection {
        margin-block: 20px;
        padding: 5px 20px;
      }

      .back-list{
        background-color: white;
        padding: 10px;
      }
    }
  }
</style>
