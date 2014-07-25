OmniPoll.Views.AnswersShow = Backbone.CompositeView.extend({
  template: JST['answers/show'],

  render: function(){
    var content = this.template({
      answer: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  } 
  
});