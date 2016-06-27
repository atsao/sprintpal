
angular.module('TaskCtrl', [])

.controller('TaskController', function($scope, Vote, Main, Task, $interval, $location) {
  
  $scope.taskList = [];         // Current task list
  $scope.completedTasks = [];   // Completed tasks

  $scope.addSingleTopic = function( ) {     // Sends single topic to backend
    Task.addSingleTopic($scope.topic)       // Sends POST to /api/topic with topic
      .catch(function (err) {
        console.log(err);
      });
    $scope.topic = '';    // Resets input field
  };
  
  // onTopicChange
  Main.socket.on('onTopicChange', function(data){
    // Updates taskList with topics
    $scope.taskList = data.topics;
    // Updates completed tasks
    $scope.completedTasks = data.completedTopics;
    $scope.$apply();  // This line seems to be needed to make sure all clients update appropriately
  });
  
  // Checks sockets on connection to update your view
  Main.socket.on('onConnection', function(data){

    console.log('the data: ', data);
    // Updates taskList with topics
    $scope.taskList = data.topics;
    // Updates completed tasks
    $scope.completedTasks = data.completedTopics;
    // This line seems to be needed to make sure all clients update appropriately
    $scope.$apply();
  });
  
  // When the current topic is complete
  Main.socket.on('onTopicComplete', function(data){
    // Updates taskList with topics
    $scope.taskList = data.topics;
    // Updates completed tasks
    $scope.completedTasks = data.completedTopics;
    $scope.$apply();    // This line seems to be needed to make sure all clients update appropriately
  });
  
  // Init - make API call to update everything on connection
  $scope.init = function(){
    // Sends GET request to /api/topics, which then emits to onTopicConnection above to update DOM
    Task.getState()
    .catch(function (err) {
        console.log(err);
    });
  }();

  $scope.$watch('completedTasks', function(newValue) {
    newValue.forEach(function(topic) {
      Task.updateTopic(topic).catch(function(error) {
        console.error(error);
      });
    });
  });

});