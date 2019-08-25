<template>
  <div class="container-fluid">
    <div class="container">
      <div class="register row justify-content-center">
        <div class="col-12 col-lg-6">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body pb-4">
              <form @submit.prevent="authenticate">
                <div class="form-group">
                  <label for="email">Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    required
                    v-model="form.name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    required
                    v-model="form.email"
                  />
                </div>

                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                    v-model="form.password"
                  />
                </div>

                <div class="form-group">
                  <input type="submit" class="btn btn-primary" value="Register" />
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
import { register } from "../../helpers/auth";
export default {
  name: "register",
  mounted() {
    this.$store.commit("resetAuthError");
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null,
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("value")
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch("register");
      register(this.$data.form)
        .then(res => {
          this.$store.commit("logout", res);
          this.$router.push({ path: "/login" });
        })
        .catch(error => {
          this.$store.commit("registerFailed", { error });
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