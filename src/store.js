import { reactive } from "vue"

export const store = reactive ({
    cards: [],
    archetypes: [],
    archetypeValue: "",
    loading: false
});