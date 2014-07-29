OmniPoll.Views.QuestionNew = Backbone.View.extend({
  template: JST['questions/new'],
  
  answerTemplate: JST['answers/form'],
  
  initialize: function(){
    this._answerCount = 2;
  },
  
  events: {
    'click add-btn' : 'addAnswer',
    'submit form' : 'submit'
  },
  
  addAnswer: function(event){
    
    this._answerCount++;
    var content = this.answerTemplate();
    this.$el.append(content);
    
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