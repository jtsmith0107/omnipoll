OmniPoll.Collections.AnswerChoices = Backbone.Collection.extend({
  initialize: function(models, options){
    this.answer = options.answer
  }, 
  
  model: OmniPoll.Models.AnswerChoice,
  
  url: function(){
    return this.answer.url() + "/answerschoices";
  }

  

  
});