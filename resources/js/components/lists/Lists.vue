<template>
  <div>
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
          <tr v-for="list in lists" :key="list.id">
            <td>{{ list.id }}</td>
            <td>{{ list.name }}</td>
            <td>
              <router-link :to="`/lists/${list.id}`">View</router-link>
              <span class="error text-danger" style="cursor: pointer;">Delete</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "lists",
  mounted() {
    if (this.lists.length) {
      return;
    }
    this.$store.dispatch("getLists");
  },
  computed: {
    lists() {
      return this.$store.getters.lists;
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