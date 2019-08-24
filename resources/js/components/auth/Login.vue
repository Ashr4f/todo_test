<template>
  <div class="container-fluid">
    <div class="container">
      <div class="login row justify-content-center">
        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body pb-4">
              <form @submit.prevent="authenticate">
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    v-model="form.email"
                    class="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    v-model="form.password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                </div>

                <div class="form-group">
                  <input type="submit" class="btn btn-primary" value="Login" />
                </div>

                <div
                  class="form-group"
                  style="position: absolute; left: 1.25rem; bottom: -1.6rem;"
                  v-if="authError"
                >
                  <p class="error text-danger" style="font-weight: bold;">{{authError}}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../../helpers/auth";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch("login");
      login(this.$data.form)
        .then(res => {
          this.$store.commit("loginSuccess", res);
          this.$router.push({ path: "/lists" });
        })
        .catch(error => {
          this.$store.commit("loginFailed", { error });
        });
    }
  },
  computed: {
    authError() {
      return this.$store.getters.authError;
    }
  }
};
</script>

<style scoped>
</style>