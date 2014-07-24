OmniPoll.Collections.Answers = Backbone.Collection.extend({
  url: function(){
    return this.question.url() + "/answers";
  },
  
  initialize: function(models, options){
    this.question = option.question
  },
  
  model: OmniPoll.Models.Answer
});