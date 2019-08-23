<template>
    
<div>
    <h1>To Do List</h1>
    
        <div class="row">

            <div class="col-md-10"></div>

            <div class="col-md-2">
                <router-link :to="{ name: 'createList' }" class="btn btn-success">Create List</router-link>
            </div>

        </div><br />




        <div v-if='lists' class='container'>

        <div class="card" style="width: 18rem;" v-for="list in lists" :key="list.id">
            

            <div class="card-body" >

                <h2 class="card-title">{{ list.nameList }}</h2>

                <h6 class="card-subtitle mb-2 text-muted">

                    Id: {{ list.id }}</h6>

                <div v-for="item in items" :key='item.id'>
                    <ul class='list-group'>
                        <li class="list-group-item font-weight-bold">{{ item.title}} <br>
                            <button class="btn btn-light btn-sm btn-block">Edit</button>
                            <button class="btn btn-dark btn-sm btn-block">Delete</button>
                            </li>
                    </ul>
                </div>

                
                   

                <router-link :to="{name: 'editList', params: { id: list.id }}" class="btn-sm btn btn-primary btn-block">Edit</router-link>

                <button class="btn btn-danger btn-block btn-sm" @click.prevent="deleteList(list.id)">Delete</button>

            </div>

        </div>
</div>
<div v-else> pending </div>
</div>

</template>

<script>


export default {
    
    data() {
        return {
            lists: [],
            items: []
        }
    },

    created() {

        let uri = '/api/list';

        this.axios.get(uri).then(response => {

        this.lists = response.data.data;

        });

        let uriO = '/api/item';
        this.axios.get(uriO).then(response => {
            this.items = response.data.data;
        });

    },

    methods: {

        deleteList(id)
        {

            let uri = `/api/list/deleteList/${id}`;

            this.axios.delete(uri).then(response => {

            this.lists.splice(this.lists.indexOf(id), 1);
            this.router.push({name: list})

            });

        }

    }    
}
</script>