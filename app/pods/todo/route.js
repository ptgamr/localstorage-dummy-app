import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('todo');
  },

  actions: {
    addNewTodo(title) {
      let newTodo = this.store.createRecord('todo', { title: title, isDone: false });
      newTodo.save().then(() => {
        this.controller.set('newTodoTitle', '');
      });
    },

    toggleDone(todo) {
      todo.set('isDone', !todo.get('isDone'));
      return todo.save();
    }
  }
});
