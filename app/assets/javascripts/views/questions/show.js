OmniPoll.Views.QuestionsShow = Backbone.CompositeView.extend({
  template: JST['questions/show'],
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.answers(), "sync remove", this.render);
    this.listenTo(this.model.answers(), "add", this.addAnswer);
    
    
    this._subviews = {}
    this.chart = new OmniPoll.Views.ChartShow();
    this.addSubview('.chart', this.chart);  
    this.model.answers().each(this.addAnswer.bind(this));

  },
  
  addAnswer: function(answer){
    var answerView = new OmniPoll.Views.AnswersShow({
      model: answer
    });
    chartData = {
      value: answer.escape('answer_choice_count'),
      label: answer.escape('title')
    }
    this.chart.addData(chartData);
    this.addSubview('.answers', answerView);
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