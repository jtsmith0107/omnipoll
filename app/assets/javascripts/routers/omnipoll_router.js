OmniPoll.Routers.OmniPollRouter = Backbone.Router.extend({
  routes: {
    '' : 'questionShow'
    
  },
  
  questionShow: function(){
    // request for the current question needed
    
    
    //HARD CODING UNTIL QUESTIONS CHANGE PROPERLY
    var question = OmniPoll.Collections.questions.getOrFetch(3);
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