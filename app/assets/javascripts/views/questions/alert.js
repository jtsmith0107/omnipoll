OmniPoll.Views.VoteAlert = Backbone.View.extend({
  template: JST['questions/alert'],
  
  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});