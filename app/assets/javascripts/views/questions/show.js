OmniPoll.Views.QuestionsShow = Backbone.CompositeView.extend({
  template: JST['questions/show'],

  render: function(){
    var content = this.template({
      model: this.model
    })
  } 
  
});