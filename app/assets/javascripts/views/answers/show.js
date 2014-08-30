OmniPoll.Views.AnswersShow = Backbone.View.extend({
  initialize: function(options){
   this.model = options.model;
   this.color = options.color
   this.listenTo(this.model.answer_choices(), 'sync add', this.render)
  },
  
  tagName: 'li',
  
  className: 'list-group-item',
  
  attributes: function(){
    return {
      "data-id": this.model.escape('id')
      // 'style' : 'background-color:' + this.color + ';'
    }
  },
  
  template: JST['answers/show'],

  events: {
    'click' : 'selectAnswer'
  },
  
  render: function(){
    var content = this.template({
      answer: this.model
    });
    
    this.$el.html(content);
    this.$el.css('background-color', this.color);
    return this;
  } 
  
});
