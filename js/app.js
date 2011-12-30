(function() {
  var _ref;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.app = (_ref = window.app) != null ? _ref : {};

  jQuery(function() {
    return $.get('templates/templates.html', function(data) {
      var AppRouter;
      $('.templates').html(data);
      app.templates = {};
      app.templates.Privacy = Hogan.compile($(".templates #privacy").html());
      app.templates.Refund = Hogan.compile($(".templates #refund").html());
      AppRouter = (function() {

        __extends(AppRouter, Backbone.Router);

        function AppRouter() {
          AppRouter.__super__.constructor.apply(this, arguments);
        }

        AppRouter.prototype.routes = {
          ':page': 'show'
        };

        AppRouter.prototype.show = function(page) {
          var template;
          if (page) {
            template = {
              'privacy': app.templates.Privacy,
              'refund': app.templates.Refund
            }[page];
            return $('#info').html(template.render());
          }
        };

        return AppRouter;

      })();
      app.AppRouter = AppRouter;
      app.router = new app.AppRouter;
      return Backbone.history.start();
    });
  });

}).call(this);
