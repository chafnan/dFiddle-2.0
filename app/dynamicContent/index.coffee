define ['jquery', 'knockout'],
($, ko) ->

  class DynamicContent

    constructor: ->

      $(document).on 'click', '.click-test', -> alert 'click event'


  new DynamicContent()