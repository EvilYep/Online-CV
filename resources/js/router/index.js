import  { createRouter, createWebHistory } from "vue-router";

const App =         () => import(/* webpackChunkName: "App" */                  '../components/App');
const PostsIndex =  () => import(/* webpackChunkName: "posts/PostsIndex" */     '../components/posts/PostsIndex');
const PostsCreate = () => import(/* webpackChunkName: "posts/PostsCreate" */    '../components/posts/PostsCreate');
const PostsEdit =   () => import(/* webpackChunkName: "posts/PostsEdit" */      '../components/posts/PostsEdit');

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '/posts/index',
                name: 'posts.index',
                component: PostsIndex,
            },
            {
                path: '/posts/create',
                name: 'posts.create',
                component: PostsCreate,
            },
            {
                path: '/posts/:id/edit',
                name: 'posts.edit',
                component: PostsEdit,
                props: true,
            },
        ]
    },

];

export default createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes
});
