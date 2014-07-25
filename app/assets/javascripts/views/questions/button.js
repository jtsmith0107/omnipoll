OmniPoll.Views.ButtonView = Backbone.View.extend({
  template: JST['questions/button'],
  
  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});