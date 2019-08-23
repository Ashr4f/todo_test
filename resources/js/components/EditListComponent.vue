<template>
  <div>
    <h1>Edit List</h1>
    <form @submit.prevent="updateList">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>List Title:</label>
            <input type="text" class="form-control" v-model="list.nameList">
            <router-link to='/createItem'><button class="btn btn-primary"> Add Item  </button></router-link>
          </div>
        </div>
        </div>
        
        <br />
        <div class="form-group">
          <button class="btn btn-primary">Edit List</button>
        </div>
    </form>
  </div>
</template>

<script>


export default {
        data() {
        return {
            list: {},
            item: {}
        }
        },

        created() {
        let uri = `/api/list/editList/${this.$route.params.id}`;

            this.axios.get(uri).then((response) => {
                this.list = response.data;
            });

        let uriO = '/api/item';
            this.axios.get(uriO).then(response => {
            this.items = response.data.data;
        });
        },

        methods: {

            updateList() {

                let uri = `/api/list/updateList/${this.$route.params.id}`;

                this.axios.post(uri, this.list).then((response) => {

                this.$router.push({name: 'list'});

                });
            },

            addItem(){

            let uri = '/api/item/createItem';

            this.axios.post(uri, this.item).then((response) => {

            this.$router.push({name: 'item'})

                .catch(error => {

                    console.log('shit happen')

                });

           });

        }
        }

}

</script>