OmniPoll.Views.PollRoomShow = Backbone.View.extend({
  
  template: JST['poll_rooms/show'],	
	
	initialize: function(){

	},
	
	render: function(){
    var content = this.template({
      question: this.model
    });
	
    
    
    this.$el.html(content);
    this.attachSubviews();
    
    return this;
  } 
});