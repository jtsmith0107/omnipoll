OmniPoll.Routers.OmniPollRouter = Backbone.Router.extend({
  initialize: function(){
    var pusher = new Pusher('97e5d6642eaad569dab5');
    var channel = pusher.subscribe('whatever_channel');
    var router = this;
    channel.bind('my_event', function(data) {
      window.currentQuestion = data.question;
      router.questionShow();
    });
  },
  
  routes: {
      '' : 'questionShow'    
  },
  
  questionShow: function(){
    // request for the current question needed
    

    //HARD CODING UNTIL QUESTIONS CHANGE PROPERLY
    var question = OmniPoll.Collections.questions.getOrFetch(parseInt(window.currentQuestion));
    //CHANGE ME!    
    
    
    var showView = new OmniPoll.Views.QuestionsShow({
      model: question
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