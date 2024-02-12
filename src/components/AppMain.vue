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
            <div>
                <p>Found 39 cards</p>
            </div>
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
        div:first-child {
            background-color: black;
            color: white;
            font-weight: bold;
            padding: 20px;
        }
    }
  }
</style>
