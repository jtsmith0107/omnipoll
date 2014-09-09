OmniPoll.Views.SplashView = Backbone.View.extend({
  template: JST['poll_rooms/splash'],
  
  className: "splash",
    
  render: function(){
    var content = this.template();
    
    this.$el.html(content)
    return this
  }
});