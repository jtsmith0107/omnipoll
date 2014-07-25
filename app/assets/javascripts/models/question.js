OmniPoll.Models.Question = Backbone.Model.extend({
  urlRoot: '/api/questions/',

  
  parse: function(jsonResp){
   if(jsonResp.answers){
      var resp = jsonResp
      this.answers().set(jsonResp.answers, {parse: true});
      delete jsonResp.answers;
    }
    return jsonResp;
  },
  
  answers: function(){
    this._answers = this._answers ||
    new OmniPoll.Collections.Answers([], {question: this});
    return this._answers;
  }
  
});