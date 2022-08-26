import {useFilterStore} from "./filterStore";


import {watch} from 'vue';

const useFilter = (onFilterChange: Function) => {
    const filterState = useFilterStore();
    const filterModel = filterState.filterModel;
    watch(filterState.filterModel, (newVal, oldVal) => {
        console.log('filter model change on filter hook', newVal);
        onFilterChange(filterModel);
    });

    return filterModel;

};

export {useFilter}
