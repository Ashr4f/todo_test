<template>
  <div class="list-view" v-if="list">
    <div class="list-info">
      <table class="table">
        <tr>
          <th>ID</th>
          <td>{{ list.id }}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{{ list.name }}</td>
        </tr>
      </table>
      <router-link to="/lists">Back to all lists</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "view-list",
  created() {
    if (this.lists.length) {
      this.list = this.lists.find(list => list.id == this.$route.params.id);
    } else {
      axios.get(`/api/lists/${this.$route.params.id}`).then(response => {
        this.list = response.data.list;
      });
    }
  },
  data() {
    return {
      list: null
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    lists() {
      return this.$store.getters.lists;
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
</style>