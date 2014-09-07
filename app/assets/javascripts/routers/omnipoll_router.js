OmniPoll.Routers.OmniPollRouter = Backbone.Router.extend({
  initialize: function(){
    var pusher = new Pusher('97e5d6642eaad569dab5');
    var channel = pusher.subscribe('whatever_channel');
    var router = this;
    
    
    channel.bind('my_event', function(data) {
      window.currentQuestion = $.parseJSON(data.question);
      if(Backbone.history.fragment === 'questions/home'){
        router.questionShow();
      }
    });
  },
  
  routes: {
      '' : '',
      'questions/home' : 'questionShow',
      'questions/new' : 'questionNew',
      'questions/history' : 'questionHistory',
		  'questions/:id' : 'questionsById',
			'poll_room/:id' : 'pollRoomShow'
	  
  },
  
  splash: function(){
    var splashView = new OmniPoll.Views.SplashView();
    this._swapView(splashView);
  },
  
  questionShow: function(){
    var question = OmniPoll.Collections.questions.getOrFetch(parseInt(window.currentQuestion.current_question_id));
    
    var showView = new OmniPoll.Views.QuestionsShow({
      model: question
    });
    this._swapView(showView);
  },
  
  questionsById: function(id){
	var question = OmniPoll.Collections.questions.getOrFetch(id);
	
	var showView = new OmniPoll.Views.QuestionsShow({
		model: question
	});
	
	this._swapView(showView);
  },
  
  questionNew: function(){
    var newView = new OmniPoll.Views.QuestionNew();
    this._swapView(newView);
  },
  
  questionHistory: function(){
    OmniPoll.Collections.completedQuestions.fetch({
      data: {completed: true}
    });
    var historyView = new OmniPoll.Views.HistoryView({
      collection: OmniPoll.Collections.completedQuestions
    });
    this._swapView(historyView);
  },
	
	pollRoomShow : function(id){
		var pollRoom = OmniPoll.Collections.pollRooms.getOrFetch(id);
		
		var showView = new OmniPoll.Views.PollRoomShow({
			model: pollRoom
		});
		this._swapView(showView);
	},
  
  _swapView: function(newView){
    if(this.currentView){
      this.currentView.remove();
    } 
    $('#main').html(newView.render().$el);
    this.currentView = newView;
  }
});