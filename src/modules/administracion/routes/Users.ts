const routes = [
    {
        redirect: {name: 'userList'},
        path: 'users',
        children: [{
            component: () => import('../pages/users/ListarUsers.vue'),
            name: 'userList',
            path: 'list',

        }]
    }

];

export default routes;
