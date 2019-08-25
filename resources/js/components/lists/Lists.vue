<template>
  <div>
    <div v-if="lists.length">
      <div class="row m-0 align-items-start flex-column">
        <router-link to="/lists/new" class="btn btn-success">Add more</router-link>
      </div>
      <br />
      <br />
      <div class="row m-0 justify-content-between">
        <div
          class="card mb-3"
          style="flex: 0 0 48%; max-width: 48%;"
          v-for="(list, index) in lists"
          :key="list.id"
        >
          <div class="card-body">
            <h2 class="card-title">{{ list.name }}</h2>

            <h6 class="card-subtitle mb-2 text-muted">
              <strong>ID:</strong>
              {{ index + 1 }}
            </h6>

            <router-link
              :to="{ path: '/lists/'+list.id+''}"
              class="btn-sm btn btn-dark btn-block"
            >View</router-link>

            <router-link
              :to="{ path: '/lists/'+list.id+'/edit'}"
              class="btn-sm btn btn-primary btn-block"
            >Edit</router-link>

            <button class="btn btn-danger btn-block btn-sm" @click.prevent="remove(list.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row m-0 d-block">
      <h3 class="float-left">Add your first list now</h3>
      <router-link to="/lists/new" class="btn btn-success float-right">Create List</router-link>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "lists",
  mounted() {
    this.$store.dispatch("getLists");
  },
  computed: {
    lists() {
      return this.$store.getters.lists;
    }
  },
  methods: {
    remove(id) {
      axios.delete(`/api/lists/${id}`).then(response => {
        const index = this.lists.findIndex(list => list.id === id);
        if (~index) {
          this.lists.splice(index, 1);
        }
      });
    }
  }
};
</script>

<style scoped>
.btn-wrapper {
  text-align: right;
  margin-bottom: 20px;
}
</style>