OmniPoll.Views.QuestionsShow = Backbone.CompositeView.extend({
  template: JST['questions/show'],
  
  className: 'jumbotron question-show',
  
  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
    // this.listenTo(this.model.answers(), "sync remove", this.render);

    this.listenTo(this.model.answers(), "add", this.addAnswer);
    this.chartView = new OmniPoll.Views.ChartShow({canvasSize: 350});
    this._voted = false
    if($('.nav').find('#new-question').length < 1 && window.currentUser !== null){
      $('.nav').prepend('<li>' + JST['questions/link_new']()+'</li>')
    }
    $('body').attr('style', 'background-color: #F3FFE2')
    
    var timeView = new OmniPoll.Views.TimeView();
    this.addSubview('.timer', timeView);     
    
    this.buttonView = new OmniPoll.Views.ButtonView();
    this.addSubview('.button', this.chartView);
    this.answerCount = 0;
    this.model.answers().each(this.addAnswer.bind(this));

  },
  
  events: {
    'click .list-group-item' : 'selectAnswer',
    'click #submit-vote' : 'submitVote',
    'click .create-answer' : 'createAnswer',
    'click #new-question': 'questionNew'
  },
  
  questionNew: function(){
    Backbone.history.navigate('questions/new');
  },
  
  selectAnswer: function(event){
	  if(!this._voted){
      //if any answers have active class, fade the active, and unfade target
			
      if($(event.currentTarget).hasClass('active') === true){
        $('.list-group-item').removeClass('active');
        $('.list-group-item').css('border' , "");
				$(".answers li:not('.active')").fadeTo("fast", 1);   
      }else{
				if($('.active').length !== 0){
					$('.active').fadeTo('fast', 0.3);
					$(event.currentTarget).fadeTo('fast', 1.0);
				}
				$('.list-group-item').removeClass('active'); 
				$('.list-group-item').css('border' , "")
				$(event.currentTarget).toggleClass('active');  
				$(event.currentTarget).css('border' , "1px solid white")
				$(".answers li:not('.active')").fadeTo("fast", 0.3);   
      }

      this._selected_answer = $(event.currentTarget).attr('data-id');          
    }
  },
  
  createAnswer: function(event){
    event.preventDefault();
    var params = $('#modal-form').serializeJSON();
    var newAnswer = new OmniPoll.Models.Answer(params['answer']);
    newAnswer.set('question_id', this.model.id);
    var showView = this
    newAnswer.save({}, {
      success: function(){
        showView.model.answers().add(newAnswer);
        $("#answerModal").modal('hide');
      }
    })
  },
  
  redrawChart: function(answer){
		chartData = {
			value: parseInt(answer.escape('answer_choice_count')),
			label: answer.escape('title')
		};
		this.chartView.addData(chartData);
		this.addSubview('.chart', this.chartView);

  },
  
  submitVote: function(){
    if(!this._voted && this._selected_answer){

      var answer = this.model.answers().get(
        parseInt(this._selected_answer)
      );
      var answer_choice = new OmniPoll.Models.AnswerChoice(
        {answer_id: answer.escape('id')},
        {answer: answer}
      );
      
      var show = this;
      
      answer_choice.save({}, {
        success: function(){          
          var alertView = new OmniPoll.Views.VoteAlert();
          show.addSubview(".chart",alertView);
          $('#submit-vote').remove();          
          
          answer.answer_choices().add(answer_choice);
          var count = answer.get('answer_choice_count');
          answer.set({answer_choice_count: count + 1});
          
          _.each(show.subviews('.answers'), function(answerShow){
            var data = answerShow.attributes()['data-id'];
              answerShow.render();
          });
					chartData = {
						value: parseInt(answer.escape('answer_choice_count')),
						label: answer.escape('title')
					};
					show.chartView.updateData(chartData);
          show.chartView.render();
        }
      });      
    }
  },
  

  
  addAnswer: function(answer){
    var show = this
    var answerView = new OmniPoll.Views.AnswersShow({
      model: answer,
      color: OmniPoll.colors[show.answerCount++]
    });
    show.removeSubview('.chart', show.chartView);        

	show.redrawChart(answer);

    show.addSubview('.answers', answerView);

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