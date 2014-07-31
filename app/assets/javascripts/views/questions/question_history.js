OmniPoll.Views.QuestionHistoryShow = Backbone.CompositeView.extend({
  template: JST['questions/history_show'],
  
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.answers(), 'add', this.addAnswer);
    this.listenTo(this.model.answers(), 'sync', this.render)
    this.chartView = new OmniPoll.Views.ChartShow({canvasSize: 150});
    this.model.answers().each(this.addAnswer.bind(this));

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
    this.addSubview('.answers-col', answerView);
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