OmniPoll.Views.TimeView = Backbone.View.extend({
  template: JST['questions/timer'],
  
  className: "timer",
  
  render: function(){
    var switchTime = Math.floor(30 - (Date.now()/1000 - window.questionTimer));
    if(switchTime < 1){
      switchTime = 30
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
           "Minutes": { "color": "#C0C8CF", "show": false },
           "Seconds": { "color": "#EB7F00", "show":true }
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
  