require('./bootstrap');
window.Vue = require('vue');

  

import VueRouter from 'vue-router';

Vue.use(VueRouter);

  

import VueAxios from 'vue-axios';

import axios from 'axios';

  

import App from './App.vue';

Vue.use(VueAxios, axios);



import CreateItemComponent from './components/CreateItemComponent.vue';
import CreateListComponent from './components/CreateListComponent.vue';

import DeleteItemComponent from './components/DeleteItemComponent.vue';
import DeleteListComponent from './components/DeleteListComponent.vue';

import ListComponent from './components/ListComponent.vue';
import ItemComponent from './components/ItemComponent.vue';

import HomeComponent from './components/HomeComponent.vue';

import EditListComponent from './components/EditListComponent.vue';
import EditItemComponent from './components/EditItemComponent.vue';

const routes = [
  
    {name: 'home',
    path: '/',
    component: HomeComponent
    },
    
    {name: 'createList',
    path: '/createList',
    component: CreateListComponent
    },

    {name: 'createItem',
    path: '/createItem',
    component: CreateItemComponent   
    },
    
    {name: 'deleteItem',
    path: '/deleteItem',
    component: DeleteItemComponent
    },

    {name: 'deleteList',
    path: '/deleteList',
    component: DeleteListComponent
    },

    {name: 'editItem',
    path: '/editItem/:id',
    component: EditItemComponent
    },

    {name: 'editList',
    path: '/editList/:id',
    component: EditListComponent
    },

    {name: 'list',
    path: '/list',
    component: ListComponent},

    {name: 'item',
    path: '/item',
    component: ItemComponent},

 
    
    // {
    
    //     name: 'posts',
        
    //     path: '/posts',
        
    //     component: IndexComponent
        
    //     },




    ];

    const router = new VueRouter({ mode: 'history', routes: routes});
  
    const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');