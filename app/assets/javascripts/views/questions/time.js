OmniPoll.Views.TimeView = Backbone.View.extend({
  template: JST['questions/timer'],
  
  className: "timer",
  
  render: function(){
    var switchTime = Math.floor(5 - (Date.now()/1000 - window.questionTimer)/60);
    if(switchTime < 1){
      switchTime = 5
    }
    var content = this.template({
      time: switchTime
    });
    
    this.$el.html(content);
    this.$el.attr('data-timer', switchTime);
    
     this.$el.TimeCircles({
       circle_bg_color: "#ACF0F2",
       "time": {
            "Days" :{ "color": "#C0C8CF", "show": false },
           "Hours": { "color": "#C0C8CF", "show": false },
           "Minutes": { "color": "#EB7F00", "show": true },
           "Seconds": { "color": "#EB7F00", "show":false }
         }
      });

    //flip clock
    // var clock = this.$el.FlipClock(switchTime, {
    //   countdown: true,
    //   clockFace: 'MinuteCounter'
    // });
    
    //jquery-countdown with imgs
    // this.$el.countdown({
  //     startTime: switchTime.toString(),
  //     format: 'ss',
  //     image: 'assets/digits.png'
  //   })
    return this;
  }
});
  