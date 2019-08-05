import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: 'Wash dishes', completed: false},
        {name: 'Clean shower', completed: false},
        {name: 'Hoover living room', completed: false}
      ],
      newTask: ''
    },
    methods: {
      saveNewTask: function (e) {
        e.preventDefault();
        this.tasks.push({
          name: this.newTask,
          completed: false
        });
        this.newTask = '';
      },
      completeTask: function (index) {
        this.tasks[index].completed = true;
      }
    }
  });
});
