OmniPoll.Views.ChartShow = Backbone.CompositeView.extend({
  template: JST["questions/chart"],
  
  initialize: function(options){
    //generate colors base on the number of answers
    this.numAnswer = 0;
    this._data = [];
    this.canvasSize = options.canvasSize || 350
  


  },  

  addData: function(newData){
      var elNum = this._data.length;      
      
      var pieElement = { 
        value: newData.value,
        color: OmniPoll.colors[elNum],
        highlight: OmniPoll.highlights[elNum],
        label: newData.label
      };
      this._data.push(pieElement);
       // this.render();
       // this.pieChart.addData([pieElement], );
      // this.pieChart.update();
    },
  
    render: function(){

      var content = this.template({
        size: this.canvasSize
      });
      this.$el.html(content);
      this.initChart();
      return this;
    },
  
    initChart: function(){
      var canvas = this.$('canvas')[0].getContext('2d');
      //sort based on size to get color priorities   
     
      this.pieChart = new Chart(canvas).Pie(this._data, {
        animateRotate: true,
        animateScale: false,
        segmentShowStroke: true
      }); 
    }
  
  });
  
