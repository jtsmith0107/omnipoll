OmniPoll.Models.Answer = Backbone.Model.extend({
  urlRoot: 'api/answers/',
  
  parse: function(jsonResp){
    if(jsonResp){
      var resp = jsonResp
      this.answer_choices().set(jsonResp.answer_choices, {parse: true});
      delete jsonResp.answers_choices;
    }
    return jsonResp;
  },
  
  answer_choices: function(){
    this._answer_choices = this._answer_choices || 
    new OmniPoll.Collections.AnswerChoices([],{
      answer: this.model
    });
    return this._answer_choices;
  }
  
});