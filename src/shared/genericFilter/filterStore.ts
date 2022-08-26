import {defineStore} from "pinia";

import {filter} from './Filter';
// @ts-ignore
import {ref} from 'vue'

const useFilterStore = defineStore('filter', () => {
    const reactiveFilter = ref(filter);


    return {filterModel: reactiveFilter}
});

export {useFilterStore}
