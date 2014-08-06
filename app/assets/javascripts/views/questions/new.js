OmniPoll.Views.QuestionNew = Backbone.View.extend({
  template: JST['questions/new'],
  
  answerTemplate: JST['answers/form'],
  
  initialize: function(){
    this._answerCount = 2;
  },
  
  events: {
    'click #add-answer' : 'addAnswer',
    'submit form' : 'submit',
    'click .remove-btn' : 'removeAnswer'
  },
  
  className: "jumbotron",
  
  id: "question-jumbo",
  
  addAnswer: function(event){
    event.preventDefault();
    if(this._answerCount < 10){
      this._answerCount++;
      var content = this.answerTemplate();
      this.$('.form-group.answers-group').append(content);
    }    
  },
  
  removeAnswer: function(event){
    event.preventDefault();

    if(this._answerCount > 2){
          this._answerCount--;
       $(event.currentTarget.parentElement).remove()
     }
  },
  
  render: function(){
    var content = this.template();
    this.$el.html(content)
    return this
  },
  
  submit: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newQuestion = new OmniPoll.Models.Question(params['question']);
    // newQuestion.
    newQuestion.save({}, {
      success: function(){
        OmniPoll.Collections.questions.add(newQuestion);
        Backbone.history.navigate('/', {trigger: true});
      }
    })
  }
});