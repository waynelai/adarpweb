window.App = window.Ember.Application.create();

window.App.Router.map(function() {
    this.route('index', { path: '/' });
    this.route('contact', { path: '/contact' });
    this.route('about', { path: '/about' });
    this.route('xiwami');
    this.route('analysis');
    this.route('acquisition');
    this.route('visualization');
});

window.App.IndexRoute = window.Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
