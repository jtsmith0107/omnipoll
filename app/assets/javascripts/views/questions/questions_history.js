OmniPoll.Views.HistoryView = Backbone.CompositeView.extend({
  template: JST['questions/history'],
  
  className: "questions-history",
  
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addQuestion);
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.each(this.addQuestion.bind(this));
  },
  
  addQuestion: function(question){
    var questionView = new OmniPoll.Views.QuestionHistoryShow({
      model: question
    });
    this.addSubview(".questions-list", questionView);
  },
  
  render: function(){
    var content = this.template({
      questions: this.collection
    });
    
    //change button to current poll button

    this.$el.html(content);
    this.attachSubviews();
    
    return this;
  } 
});