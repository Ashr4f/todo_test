<template>
  <div class="container">
    <h1>Add a ToDo</h1>

    <form @submit.prevent="add">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>ToDo Title :</label>

            <input type="text" class="form-control" v-model="todo.title" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>ToDo Description :</label>

            <textarea class="form-control" v-model="todo.body" rows="5"></textarea>
          </div>

          <div v-for="list in lists" :key="list.id">
            <label>Link to List</label>
            <select name="Liste" id>
              <option>{{list.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <br />

      <div class="form-group">
        <button class="btn btn-primary">Create ToDo</button>
      </div>
    </form>
  </div>
</template>