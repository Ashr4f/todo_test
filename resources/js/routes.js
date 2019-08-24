import Home from './components/Home.vue';

import register from './components/auth/Register.vue';
import login from './components/auth/Login.vue';

import Profile from './components/Profile.vue';
import PageNotFound from './components/PageNotFound.vue';


import ListsMain from './components/lists/Main.vue';
import Lists from './components/lists/Lists.vue';
import List from './components/lists/View.vue';
import NewList from './components/lists/New.vue';

/*
import CreateItemComponent from './components/CreateItemComponent.vue';
import CreateListComponent from './components/CreateListComponent.vue';

import DeleteItemComponent from './components/DeleteItemComponent.vue';
import DeleteListComponent from './components/DeleteListComponent.vue';
*/


/*
import ItemComponent from './components/ItemComponent.vue';

import HomeComponent from './components/HomeComponent.vue';

import EditListComponent from './components/EditListComponent.vue';
import EditItemComponent from './components/EditItemComponent.vue';
 */

export const routes = [{
    path: "*",
    component: PageNotFound
}, {
    path: "/",
    component: Home,
    meta: {
        requiresAuth: true
    }
},
{
    path: "/register",
    component: register,
},
{
    path: "/login",
    component: login,
},
{
    path: "/profile",
    component: Profile,
    meta: {
        requiresAuth: true
    }
}, {
    path: '/lists',
    component: ListsMain,
    meta: {
        requiresAuth: true
    },
    children: [
        {
            path: '/',
            component: Lists
        },
        {
            path: 'new',
            component: NewList
        },
        {
            path: ':id',
            component: List
        }
    ]
}
    /*
    {
        name: 'home',
        path: '/',
        component: HomeComponent,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: 'createList',
        path: '/createList',
        component: CreateListComponent,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: 'createItem',
        path: '/createItem',
        component: CreateItemComponent,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: 'deleteItem',
        path: '/deleteItem',
        component: DeleteItemComponent,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: 'deleteList',
        path: '/deleteList',
        component: DeleteListComponent,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: 'editItem',
        path: '/editItem/:id',
        component: EditItemComponent,
        meta: {
            requiresAuth: true
        }
    },

    {
        name: 'editList',
        path: '/editList/:id',
        component: EditListComponent,
        meta: {
            requiresAuth: true
        }
    },

    

    {
        name: 'item',
        path: '/item',
        component: ItemComponent,
        meta: {
            requiresAuth: true
        }
    },
    */
];
