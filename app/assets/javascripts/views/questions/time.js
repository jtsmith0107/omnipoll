OmniPoll.Views.TimeView = Backbone.View.extend({
  template: JST['questions/timer'],
  
  render: function(){
    var switchTime = Math.floor(30 - (Date.now()/1000 - window.questionTimer));
    if(switchTime < 1){
      switchTime = 30
    }
    var content = this.template();
    this.$el.html(content);
    // $('.yourCountdownContainer').countdown({
 //        date: "June 7, 2087 15:03:26"
 //    });
    return this;
  }
});
  