OmniPoll.Views.ChartShow = Backbone.CompositeView.extend({
  template: JST["questions/chart"],
  
  initialize: function(){
    //generate colors base on the number of answers
    this.numAnswer = 0;
    this._data = [];
  
    this._colors = ['#225378', 
                   '#1695A3', 
                   '#ACF0F2',
                   '#F3FFE2', 
                   '#EB7F00'];
   this._highlights = ['#1C4563', 
                   '#127985', 
                   '#8FC8C9',
                   '#B6BFA9', 
                   '#D17100'];

  },
  

  addData: function(newData){
      var elNum = this._data.length;      
      
      var pieElement = { 
        value: newData.value,
        color: this._colors[elNum],
        highlight: this._highlights[elNum],
        label: newData.label
      };
      this._data.push(pieElement);
       // this.render();
       // this.pieChart.addData([pieElement], );
      // this.pieChart.update();
    },
  
    render: function(){

      var content = this.template();
      this.$el.html(content);
      this.initChart();
      return this;
    },
  
    initChart: function(){
      var canvas = this.$('canvas')[0].getContext('2d');
      //sort based on size to get color priorities   
     
      this.pieChart = new Chart(canvas).Pie(this._data, {
        animateRotate: true,
        animateScale: true,
        segmentShowStroke: true
      }); 
    }
  
  });