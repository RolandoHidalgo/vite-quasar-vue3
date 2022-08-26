import HomeLayOut from '../../layouts/HomeLayout/HomeLayOut.vue';
import ModuleBase from '../../layouts/ModuleLayout/ModuleBase.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import AdminModule from '../../../modules/administracion'


const modules = [
    AdminModule
];

const modulesRoutes = modules.map(e => e.router.routes);

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {path: '/', component: HomeLayOut},
    {path: '/modules', component: ModuleBase, children: modulesRoutes},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export {router}
