OmniPoll.Models.PollRoom = Backbone.Model.extend({
  urlRoot: '/api/poll_rooms/',
  
  parse: function(jsonResp){
   if(jsonResp.questions){
      var resp = jsonResp
      this.questions().set(jsonResp.questions, {parse: true});
      delete jsonResp.questions;
    }
    return jsonResp;
  },
  
  questions: function(){
    this._questions = this._questions ||
    new OmniPoll.Collections.Question([], {pollRoom: this});
    return this._questions;
  }
});