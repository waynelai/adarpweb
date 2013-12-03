window.App = window.Ember.Application.create();

window.App.Router.map(function() {
    this.route('index', { path: '/' });
    this.route('contact', { path: '/contact' });
    this.route('about', { path: '/about' });
});

window.App.IndexRoute = window.Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
