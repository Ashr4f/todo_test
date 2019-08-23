<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card card-default">
          <div class="card-header">ToDos</div>

          <div class="card-body">
            <h3>Here you can find your ToDos</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    welcome() {
      return this.$store.getters.welcome;
    }
  }
};
</script>