OmniPoll.Collections.AnswerChoices = Backbone.Collection.extend({
  model: OmniPoll.Models.AnswerChoice,
  
  url: function(){
    return this.answer.url() + "/answerschoices";
  },
  
  initialize: function(models, options){
    this.answer = options.answer
  }
  
});