import {getRoutes} from "./routes/index";

const URL_PATH = 'admin';

const routes = {
    children: getRoutes(),
    component: () => import('./AdminModule.vue'),
    path: URL_PATH
}

export default {
    routes,
    urlPath: URL_PATH
}
