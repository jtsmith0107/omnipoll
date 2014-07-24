OmniPoll.Views.AnswersShow = Backbone.CompositeView.extend({
  template: JST['answers/show'],

  render: function(){
    var content = this.template({
      model: this.model
    })
  } 
  
});