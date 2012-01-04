@app = window.app ? {}

jQuery ->
  # Loading and compiling templates at first
  $.get('templates/templates.html', (data) ->
    $('.templates').html(data)
    app.templates = {}
    app.templates.Home = Hogan.compile($(".templates #home").html())
    app.templates.Privacy = Hogan.compile($(".templates #privacy").html())
    app.templates.Refund = Hogan.compile($(".templates #refund").html())
    # --

    class AppRouter extends Backbone.Router
      routes:
        ':page': 'show'
      show: (page) ->
        template = {
          '': app.templates.Home,
          'privacy': app.templates.Privacy,
          'refund': app.templates.Refund,
        }[page]
        $('#info').html(template.render())

    app.AppRouter = AppRouter
    app.router = new app.AppRouter
    Backbone.history.start()
  )
