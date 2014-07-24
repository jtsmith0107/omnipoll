window.OmniPoll = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new OmniPoll.Routers.OmniPollRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  OmniPoll.initialize();
});
