
// @ts-ignore
import {defineStore, storeToRefs} from "pinia";
// @ts-ignore
import {ref} from 'vue'

const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    function increment() {
        count.value = count.value + 5;
    }

    return {count, increment}
})

const useCounterStoreTools = () => {
    const store = useCounterStore();

    const {count} = storeToRefs(store);
    // the increment action can be just extracted
    const {increment} = store;

    return {increment, count};
};

export {useCounterStore,useCounterStoreTools}
