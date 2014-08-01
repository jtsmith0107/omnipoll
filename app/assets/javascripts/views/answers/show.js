OmniPoll.Views.AnswersShow = Backbone.View.extend({
  initialize: function(options){
    // this.$el = $('.list-group-item');
   //  this._ensureElement();
   //  _.bindAll(this, 'render');
   //  this.render();
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
  
  selectAnswer: function(event) {

    // console.log(event.currentTarget);
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

// setup a rake task to change current question id
// `rails g task omnipoll change_question`
// rake omnipoll:change_question