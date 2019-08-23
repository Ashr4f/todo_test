<template>
    
<div>
    <h1>To Do List</h1>
    
        <div class="row">

            <div class="col-md-10"></div>

            <div class="col-md-2">
                <router-link :to="{ name: 'createItem' }" class="btn btn-primary">Create Item</router-link>
            </div>

        </div><br />




        <div v-if='items'>
        <div class="card" style="width: 18rem;" v-for="item in items" :key="item.id">
            

            <div class="card-body">

                <h2 class="card-title">{{ item.title }}</h2>

                <h6 class="card-subtitle mb-2 text-muted">

                    Id: {{ item.id }}</h6>

                <p class="card-text">

                    Description : {{ item.body }}</p>

                <router-link :to="{name: 'editItem', params: { id: item.id }}" class="btn btn-primary">Edit</router-link>

                <button class="btn btn-danger" @click.prevent="deleteItem(item.id)">Delete</button>

            </div>

        </div>
</div>
<div v-else> pending</div>
</div>

</template>

<script>


export default {
   
    data() {
        return {
            items: []
        }

    },

    created() {

        let uri = '/api/item';

        this.axios.get(uri).then(response => {

        this.items = response.data.data;

        console.log(this.item);

        console.log('prout');

        });

    },

    methods: {

        deleteItem(id)
        {

            let uri = `/api/item/deleteItem/${id}`;

            this.axios.delete(uri).then(response => {

            this.items.splice(this.items.indexOf(id), 1);
            this.router.push({name: list});

            });

        }

    }    
}
</script>