var topicController = require('./topicController.js');
var voteController = require('../votes/voteController.js');
var server = require('../server.js');

var Q = require('bluebird');

module.exports = function(app) {

  app.param('code', topicController.findTopic);

  app.route('/')
    .get(function(req, res) {
      // Emits current state of topicController to onTopicConnection
      server.io.emit('onTopicConnection', topicController);
      res.send(topicController);
    })
    .post(function(req, res) {
      // console.log('api/topic POST ran -------------------: ', req.body);
      
      // Parse topic to be added
      var topic = req.body.topic;
      
      // The below doesn't invoke the database:
      // Invoke singleTopic and pass topic.
      //topicController.singleTopic(topic);
      // voteController.singleTopic(topic);
      
      // The below involves the database:
      // Send the number of total votes to our method in voteCtrl to handle all that needs to happen
      topicController.newTopic(topic);
      
      // Send back our whole data object
      res.send(topicController);
    });
    
  // app.route('/next')
  //   .post(function(req, res) {
  //     // console.log('api/topic/next POST ran -------------------: req.data.result', req.body.result);
      
  //     var result = req.body.result; // Stores the final result from the vote

  //     // Moves current task into completed array, updates next topic
      
  //     // Invokes taskComplete with the result
  //     // topicController.taskComplete(result);
      
  //     // Invokes taskComplete without the result
  //     topicController.taskComplete();
      
  //     // Send back our whole data object
  //     res.send(topicController);
  //   });
    
    
    // FUll app with database attempt
    // .post(function(req, res) {
    //   console.log('api/topic POST ran -------------------: ', req.body.topic);
    //   var topic = req.body.topic;
    //   // Send the number of total votes to our method in voteCtrl to handle all that needs to happen
    //   topicController.newTopic(topic);
    //   // Send back our whole data object
    //   res.send(topicController);
    // });

  app.put('/:code', topicController.updateTopic);

};