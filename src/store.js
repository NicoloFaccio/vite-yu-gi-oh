import { reactive } from "vue";

export const store = reactive({
    ApiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    ArrayCards: [],
    ApiUrlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    ArrayArchetypes: [],
    selectValue: ''
})