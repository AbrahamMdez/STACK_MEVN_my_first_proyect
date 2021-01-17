<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <a href="/" class="navbar-brand">MEVN STACK</a>
    </nav>

    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <!-- Esta es la forma en crear un action en el formulario, llamamos al metodo que esta en el Script -->
              <form @submit.prevent="addTask">
                <div class="form-group">
                  <input type="text" v-model="task.title" placeholder="Inserta una tarea...">
                </div>
                <div class="form-group">
                  <textarea v-model="task.description" cols="30" rows="10" class="form-control" placeholder="Descripcion..."></textarea>
                </div>
                <button class="btn btn-primary btn-block">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  class Task {
    constructor( title, description) {
      this.title = title;
      this.description = description;
    }
  }
  export default {
    data() {
      return {
        task: new Task()
      }
    }, 
    
    methods: {
      addTask() {
        //Este metodo permite solicitar datos y eniar datos al servidor
        fetch('/tasks/add', {
          method: 'POST',
          body: JSON.stringify(this.task),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then ( res => res.json())
        .then ( data => console.log(data))

        this.task = new Task()
      }
    }
  }
</script>


