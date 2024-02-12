<script>
  import CardList from './Cards/CardList.vue';

  export default{
    name: "AppMain",

    components: {
        CardList
    }
  }

</script>

<template>
    <main>
        <section>
            <h1>ciao</h1>

            <CardList/>
        </section>
    </main>
</template>

<style scoped lang="scss">
  main{
    background-color: rgba(212, 143, 56, 1);
    section {
        margin: 0 auto;
        width: 80%;
    }
  }
</style>
