<template>

    <div>

        <h1>Create A List</h1>

            <form @submit.prevent="addList">

                <div class="row">

                    <div class="col-md-6">

                        <div class="form-group">

                            <label>List Title :</label>

                            <input type="text" class="form-control" v-model="list.nameList">

                        </div>

                    </div>

                </div>

                <br />

                <div class="form-group">

                    <button class="btn btn-primary">Create List</button>

                </div>

            </form>

    </div>
</template>

<script>



export default {

    data(){

        return {
            list:{},
        }
    },

    methods: {

        addList(){
            let uri = '/api/list/createList';
                this.axios.post(uri, this.list).then((response) => {
                this.$router.push({name: 'list'})
           })
                .catch(error => {
                    console.log('shit happen')
                });;
        }
    }

}


</script>