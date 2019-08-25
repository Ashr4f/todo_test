<template>
  <div class="list-new">
    <form @submit.prevent="add">
      <table class="table">
        <tr>
          <th>Name</th>
          <td>
            <input type="text" class="form-control" v-model="list.name" placeholder="List Name" />
          </td>
        </tr>
        <tr>
          <td>
            <router-link to="/lists" class="btn">Cancel</router-link>
          </td>
          <td class="text-right">
            <input type="submit" value="Create" class="btn btn-primary" />
          </td>
        </tr>
      </table>
    </form>
    <div class="errors" v-if="errors">
      <ul>
        <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">{{ fieldsError.join('\n') }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import validate from "validate.js";
export default {
  name: "new",
  data() {
    return {
      list: {
        name: ""
      },
      errors: null
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    add() {
      this.errors = null;
      const constraints = this.getConstraints();
      const errors = validate(this.$data.list, constraints);
      if (errors) {
        this.errors = errors;
        return;
      }
      axios.post("/api/lists/new", this.$data.list).then(response => {
        this.$router.push("/lists");
      });
    },
    getConstraints() {
      return {
        name: {
          presence: true,
          length: {
            minimum: 1,
            message: "Must be at least 1 character long"
          }
        }
      };
    }
  }
};
</script>

<style>
.errors {
  background: lightcoral;
  border-radius: 5px;
  padding: 21px 0 2px 0;
}
</style>