export const routes = [{
    path: '/',
    },
    {
    path: "/dashboard/:id",
    },
    {
        path: "*", // default page is 404
        component: 'Error404',
        noExact: true,
    }
]