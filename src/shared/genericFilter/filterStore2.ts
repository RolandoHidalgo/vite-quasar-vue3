import {defineStore} from "pinia";

import {filter} from './Filter';

interface Prueba {
    nombre: string;
    edad: number;
}


const useFilterStore2 = defineStore('filter2', {
    state: (): Prueba => {
        return {nombre: '1', edad: 22};
    }
});

export {useFilterStore2}
