OmniPoll.Models.AnswerChoice = Backbone.Model.extend({
  urlRoot: 'api/answerchoices',
  
  initialize: function(attributes, option){
    this.answer_id = option.answer_id
    // this.answer_id = this.answer.escape('id');
  }
  
});