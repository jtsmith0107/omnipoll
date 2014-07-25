OmniPoll.Views.AnswersShow = Backbone.View.extend({
  initialize: function(){
    // this.$el = $('.list-group-item');
   //  this._ensureElement();
   //  _.bindAll(this, 'render');
   //  this.render();
  },
  tagName: 'li',
  
  className: 'list-group-item',
  
  attributes: function(){
    return {
      "data-id": this.model.escape('id')
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
    return this;
  } 
  
});

// setup a rake task to change current question id
// `rails g task omnipoll change_question`
// rake omnipoll:change_question