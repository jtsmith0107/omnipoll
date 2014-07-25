OmniPoll.Views.QuestionsShow = Backbone.CompositeView.extend({
  template: JST['questions/show'],
  

  
  className: 'jumbotron',
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    // this.listenTo(this.model.answers(), "sync remove", this.render);
    this.listenTo(this.model.answers(), "add", this.addAnswer);
    this.chartView = new OmniPoll.Views.ChartShow();
    this._voted = false
    
    // this._subviews = {}

    // this.buttonView = new OmniPoll.Views.ButtonView();
    // this.addSubview('.button', this.chartView);

    this.model.answers().each(this.addAnswer.bind(this));

  },
  
  events: {
    'click .list-group-item' : 'selectAnswer',
    'click #submit-vote' : 'submitVote'
  },
  
  selectAnswer: function(event){
    if(!this._voted){
      $('.list-group-item').removeClass('active');
      $(event.currentTarget).addClass('active');  
      this._selected_answer = $(event.currentTarget).attr('data-id');          
    }
  },
  
  submitVote: function(){
    if(!this._voted && this._selected_answer){
      debugger
      var answer = this.model.answers().get(
        parseInt(this._selected_answer)
      );
      var answer_choice = new OmniPoll.Models.AnswerChoice({
        answer: answer
      });
      
      answer_choice.save();
      
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