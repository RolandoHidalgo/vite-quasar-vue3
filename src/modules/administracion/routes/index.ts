import UserRoutes from './Users';

const routes: Array<any> = [{
    path: '',
    component: ()=>import('../pages/WelcomePage.vue')
}]
;

const getRoutes = () => routes.concat(
    UserRoutes
)

export {getRoutes};
