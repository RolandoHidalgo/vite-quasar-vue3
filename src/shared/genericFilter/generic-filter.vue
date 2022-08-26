<template>
    <q-select filled v-model="model" :options="dpas" label="dpa" @update:model-value="modelChange"/>
    <q-btn color="primary" label="Primary" @click="changeFilter('dpa',3)"/>
    {{model}}
</template>

<script setup>
    import {useFilterStore} from "./filterStore";
    import {ref} from 'vue';
    import {useFilterStore2} from "./filterStore2";

    const changeFilter = (prop, value) => {

        const filterState = useFilterStore();
        filterState.filterModel[prop] = value;
        console.log('pepe', filterState.filterModel[prop]);

    };

    const modelChange = (value) => {

        changeFilter('dpa', value)
    };
    const dpas = [1, 2, 3]
    const model = ref(null);
</script>

<style scoped>

</style>
