OmniPoll.Collections.Questions = Backbone.Collection.extend({
  url: '/api/questions',
  model: OmniPoll.Models.Question,
  
  getOrFetch: function(id){
    var questions = this;
    var question; 
    if(question = this.get(id)){
      question.fetch();
    } else {
      question = new OmniPoll.Models.Question({id: id});
      question.fetch();
      questions.add(question);
    }
    return question;
  }
})

OmniPoll.Collections.questions = new OmniPoll.Collections.Questions();