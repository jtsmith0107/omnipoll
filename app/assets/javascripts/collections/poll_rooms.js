OmniPoll.Collections.PollRooms = Backbone.Collection.extend({
  url: '/api/poll_rooms',
  
  model: OmniPoll.Models.PollRoom,
  
  getOrFetch: function(id){
    var poll_rooms = this;
    var poll_room = null; 
    if(poll_room = this.get(id)){
      poll_room.fetch();
    } else {
      poll_room = new OmniPoll.Models.PollRoom({id: id});
      poll_room.fetch();
      poll_rooms.add(question);
    }
    return question;
  }
});

OmniPoll.Collections.pollRooms = new OmniPoll.Collections.PollRoom();