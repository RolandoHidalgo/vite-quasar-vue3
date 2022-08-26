<template>

</template>

<script setup>
    import {useFilter} from "../shared/genericFilter/filterComposables";

    const onFilterChange = (filterModel) => {
        console.log('filterModel Change on test', filterModel)
    }
    const filterModel = useFilter(onFilterChange);
</script>

<style scoped>

</style>
