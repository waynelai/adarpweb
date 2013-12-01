window.Seewamee = window.Ember.Application.create();

window.Seewamee.Router.map(function() {
    this.resource('index', { path: '/' }, function () {
        this.route('contact');
        this.route('about');
    });
    this.route('contact', { path: '/contact' });
    this.route('about', { path: '/about' });
});

window.Seewamee.IndexRoute = window.Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
