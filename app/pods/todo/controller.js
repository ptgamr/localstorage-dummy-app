import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
  notDoneTodos: computed.filter('model.@each.isDone', function(todo) {
    return !todo.get('isDone');
  }),

  doneTodos: computed.filter('model.@each.isDone', function(todo) {
    return todo.get('isDone');
  })
});
