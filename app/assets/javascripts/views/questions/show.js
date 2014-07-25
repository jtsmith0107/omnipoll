OmniPoll.Views.QuestionsShow = Backbone.CompositeView.extend({
  template: JST['questions/show'],
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.answers(), "sync remove", this.render);
    this.listenTo(this.model.answers(), "add", this.addAnswer);
    this.chartView = new OmniPoll.Views.ChartShow();
    
    this._subviews = {}

    this.model.answers().each(this.addAnswer.bind(this));

  },
  
  event: {
    'click .list-group-item' : 'selectAnswer',
    'click .submit-vote' : 'submitVote'
  },
  
  selectAnswer: function(event){
    event.currentTarget.addClass('active');
  },
  
  submitVote: function(){
    
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