<template>
  <div class="list-edit">
    <form @submit.prevent="edit">
      <table class="table">
        <tr>
          <th>New Name</th>
          <td>
            <input type="text" class="form-control" v-model="list.name" placeholder="List New Name" />
          </td>
        </tr>
        <tr>
          <td>
            <router-link :to="{ path: '/lists/'+this.$route.params.id}" class="btn">Cancel</router-link>
          </td>
          <td class="text-right">
            <input type="submit" value="Apply" class="btn btn-primary" />
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
  name: "edit-list",
  data() {
    return {
      list: {
        name: ""
      },
      errors: null
    };
  },
  computed: {
    lists() {
      return this.$store.getters.lists;
    }
  },
  methods: {
    edit() {
      this.errors = null;
      const constraints = this.getConstraints();
      const errors = validate(this.$data.list, constraints);
      if (errors) {
        this.errors = errors;
        return;
      }
      axios
        .put(`/api/lists/edit/${this.$route.params.id}`, this.$data.list)
        .then(response => {
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