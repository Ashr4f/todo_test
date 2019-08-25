<template>
  <div class="container">
    <div class="btn-wrapper">
      <router-link to="/lists/new" class="btn btn-primary btn-sm">New</router-link>
    </div>
    <table class="table">
      <thead v-if="lists.length">
        <th>ID</th>
        <th>Name</th>
        <th>Todos</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <template v-if="!lists.length">
          <tr>
            <td colspan="4" class="text-center">No Lists Available</td>
          </tr>
        </template>
        <template v-else>
          <tr v-for="(list, index) in lists" :key="list.id">
            <td>{{ index + 1 }}</td>
            <td>{{ list.name }}</td>
            <td>0</td>
            <td>
              <router-link :to="`/lists/${list.id}`">View</router-link>
              <span
                @click.prevent="remove(list.id)"
                class="error text-danger"
                style="cursor: pointer;"
              >Delete</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "todos",
  mounted() {
    this.$store.dispatch("getLists");
    this.$store.dispatch("getTodos");
  },
  computed: {
    lists() {
      return this.$store.getters.lists;
    },
    todos() {
      return this.$store.getters.todos;
    }
  },
  methods: {
    remove(id) {
      axios
        .delete(`/api/lists/${this.$store.getters.lists}/${id}`)
        .then(response => {
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
.list-view {
  display: flex;
  align-items: center;
}
.list-info {
  flex: 3;
}
.btn-wrapper {
  text-align: right;
  margin-bottom: 20px;
}
</style>