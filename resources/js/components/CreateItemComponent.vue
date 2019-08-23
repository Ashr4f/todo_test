<template>
  <div>
    <h1>Add an Item</h1>

    <form @submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Title :</label>

            <input type="text" class="form-control" v-model="item.title" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Item Description :</label>

            <textarea class="form-control" v-model="item.body" rows="5"></textarea>
          </div>

          <div v-for="list in lists" :key="list.id">
            <label>Link to List</label>
            <select name="Liste" id>
              <option>{{list.nameList}}</option>
            </select>
          </div>
        </div>
      </div>
      <br />

      <div class="form-group">
        <button class="btn btn-primary">Create Item</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {},
      lists: []
    };
  },

  methods: {
    addItem() {
      let uri = "/api/item/createItem";

      axios.post(uri, this.item).then(response => {
        this.$router
          .push({ name: "list" })

          .catch(error => {
            console.log("shit happen");
          });
      });
    },

    listChoice() {
      let uriO = "api/list";
      axios.get(uriO).then(response => {
        this.lists = response.data.data;
      });
    }
  }
};
</script>