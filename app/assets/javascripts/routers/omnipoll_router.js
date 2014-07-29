OmniPoll.Routers.OmniPollRouter = Backbone.Router.extend({
  initialize: function(){
    var pusher = new Pusher('97e5d6642eaad569dab5');
    var channel = pusher.subscribe('whatever_channel');
    var router = this;
    channel.bind('my_event', function(data) {
      window.currentQuestion = $.parseJSON(data.question);
      if(Backbone.history.fragment === ''){
        router.questionShow();
      }
    });
    this._subviews = {}


  },
  
  routes: {
      '' : 'questionShow',
      'questions/new' : 'questionNew'
  },
  
  questionShow: function(){
    var question = OmniPoll.Collections.questions.getOrFetch(parseInt(window.currentQuestion.current_question_id));
    
    var showView = new OmniPoll.Views.QuestionsShow({
      model: question
    });
    this._swapView(showView);
  },
  
  questionNew: function(){
    var newView = new OmniPoll.Views.QuestionNew();
    this._swapView(newView);
  },
  
  _swapView: function(newView){
    if(this.currentView){
      this.currentView.remove();
    } 
    $('#main').html(newView.render().$el);
    this.currentView = newView;
  }
});