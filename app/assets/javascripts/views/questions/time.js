OmniPoll.Views.TimeView = Backbone.View.extend({
  template: JST['questions/timer'],
  
  className: "timer",
  
  render: function(){
	questionTime = window.currentQuestion.updated_at;
	year = parseInt(questionTime.slice(0, 4));
	month = parseInt(questionTime.slice(5, 7));
	day = parseInt(questionTime.slice(8, 10));
	hour = parseInt(questionTime.slice(11,13));
	min = parseInt(questionTime.slice(14, 16));
	sec = parseInt(questionTime.slice(17,19));
	milli = parseInt(questionTime.slice(20,23));
	var switchTime = new Date(year, month - 1, day, hour - 7, min, sec, milli);
	
  var content = this.template({
    time: switchTime
  });
  
  this.$el.html(content);
  this.$el.attr('data-timer', 60 -(new Date() - switchTime)/1000);
  
 this.$el.TimeCircles({
   circle_bg_color: "#ACF0F2",
   "time": {
        "Days" :{ "color": "#C0C8CF", "show": false },
       "Hours": { "color": "#C0C8CF", "show": false },
       "Minutes": { "color": "#EB7F00", "show": false },
       "Seconds": { "color": "#EB7F00", "show":true }
     }
  });
  return this;
  }
});
  