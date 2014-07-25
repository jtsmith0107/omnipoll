OmniPoll.Views.ChartShow = Backbone.CompositeView.extend({
  template: JST["questions/chart"],
  
  initialize: function(){
    //generate colors base on the number of answers
    this.numAnswer = 0;
    this._data = [];
    //find the canvas in our dom
  
    this._colors = ['0D5FFF', 
                   '0DFF99', 
                   '0C90E8',
                   '0CE8CA', 
                   '00DDFF'];
  },
  

  addData: function(newData){
      var elNum = this._data.length;

      var pieElement = { 
        value: newData.value,
        color: this._colors[elNum],
        highlight: "#FF5A5E",
        label: newData.label
      };
      this._data.push(pieElement);
       this.render();
      // this.pieChart.addData(pieElement);
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
    
   
      var pie_data   = [
      {
        value: 300,
        color:"#0D7DFF",
       // highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: 400,
        color: "#0CABE8",
       // highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: 100,
        color: "#00FCFF",
        //highlight: "#FFC870",
        label: "Yellow"
      },
      {
        value: 100,
        color: "#0CE8AC",
        //highlight: "#FFC870",
        label: "Yellow"
      },
      {
        value: 100,
        color: "#0DFF79",
      //  highlight: "#FFC870",
        label: "Yellow"
      }
      ]
      this.pieChart = new Chart(canvas).Pie(pie_data, {
        animateRotate: true, 
        segmentShowStroke: true
      });   
      debugger
    }
  
  });