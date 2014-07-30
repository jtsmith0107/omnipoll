OmniPoll.Views.QuestionsShow = Backbone.CompositeView.extend({
  template: JST['questions/show'],
  
  className: 'jumbotron question-show',
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    // this.listenTo(this.model.answers(), "sync remove", this.render);

    this.listenTo(this.model.answers(), "add", this.addAnswer);
    this.chartView = new OmniPoll.Views.ChartShow();
    this._voted = false
    
    $('.nav').prepend('<li>' + JST['questions/link_new']()+'</li>')
    
    var timeView = new OmniPoll.Views.TimeView();
    this.addSubview('.timer', timeView);     
    
    this.buttonView = new OmniPoll.Views.ButtonView();
    this.addSubview('.button', this.chartView);
    this.model.answers().each(this.addAnswer.bind(this));

  },
  
  events: {
    'click .list-group-item' : 'selectAnswer',
    'click #submit-vote' : 'submitVote',
    'click .create-answer' : 'addAnswer',
    'click #new-question': 'questionNew'
  },
  
  questionNew: function(){
    Backbone.history.navigate('questions/new');
  },
  
  selectAnswer: function(event){
    
    if(!this._voted){
      
      if($(event.currentTarget).hasClass('active') === true){
        $('.list-group-item').removeClass('active');    
      }else{
        $('.list-group-item').removeClass('active'); 
       $(event.currentTarget).toggleClass('active');  
      }   
      this._selected_answer = $(event.currentTarget).attr('data-id');          
    }
  },
  
  createAnswer: function(){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var newAnswer = new OmniPoll.Models.Question(params['answer']);
    newAnswer.question_id = window.currentQuestion;
    newAnswer.save({}, {
      success: function(){
        this.addAnswer(newAnswer);
      }
    })
  },
  
  submitVote: function(){
    if(!this._voted && this._selected_answer){

      var answer = this.model.answers().get(
        parseInt(this._selected_answer)
      );
      var answer_choice = new OmniPoll.Models.AnswerChoice(
        {answer_id: answer.escape('id')},
        {answer: answer}
      );
      
      var show = this;
      
      answer_choice.save({}, {
        success: function(){
          
          answer.answer_choices().add(answer_choice);
          var count = answer.get('answer_choice_count');
          answer.set({answer_choice_count: count + 1});
          
          _.each(show.subviews('.answers'), function(answerShow){
            var data = answerShow.attributes()['data-id'];
            if (data === answer.escape('id')){
              answerShow.render();
              // show.removeSubview('.answers',answerShow);
              // show.addSubview('.answers', answerShow);
            }        
          });
        }
      });      
    }
  },
  
  addAnswer: function(answer){
    var answerView = new OmniPoll.Views.AnswersShow({
      model: answer
    });
    this.removeSubview('.chart', this.chartView);
        
    chartData = {
      value: parseInt(answer.escape('answer_choice_count')),
      label: answer.escape('title')
    }

    this.chartView.addData(chartData);
    this.addSubview('.answers', answerView);
    this.addSubview('.chart', this.chartView);
  },
  
  render: function(){
    var content = this.template({
      question: this.model
    })

    this.$el.html(content);
    this.attachSubviews();
    
    return this;
  } 
  
});