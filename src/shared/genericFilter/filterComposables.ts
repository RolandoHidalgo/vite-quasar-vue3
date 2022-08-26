import {useFilterStore} from "./filterStore";

// @ts-ignore
import {watch} from 'vue';

const useFilter = (onFilterChange) => {
    const filterState = useFilterStore();
    const filterModel = filterState.filterModel;
    watch(filterState.filterModel, (newVal, oldVal) => {
        console.log('filter model change on filter hook', newVal);
        onFilterChange(filterModel);
    });
    // watch(filterModel, (newVal, oldVal) => {
    //     console.log('filter model change on filter hook', newVal);
    //     onFilterChange(filterModel)
    // }, {deep: true});

    return filterModel;

};

export {useFilter}
