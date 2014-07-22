define ['jquery', 'knockout'],
($, ko) ->

  class Index

    constructor: ->

      $(document).on 'click', '.click-test', -> alert 'click event'


  new Index()