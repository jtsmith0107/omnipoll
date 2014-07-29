OmniPoll.Views.QuestionNew = Backbone.View.extend({
  template: JST['questions/new'],
  
  answerTemplate: JST['answers/new'],
  
  initialize: function(){
    this._answerCount = 2;
  },
  
  events: {
    'click add-btn' : 'addAnswer',
    'submit form' : 'submit'
  },
  
  addAnswer: function(event){
    
    this._answerCount++;
    $('#answer-' + this._answerCount).attr('type', 'text');
    
    // <div class="form-group">
//       <label for="answer-1" class="col-sm-2 control-label">Answer 1</label>
//       <div class="col-sm-10">
//         <input type="text" class="form-control" id="answer-1" placeholder="Answer 1">
//       </div>
//     </div>
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