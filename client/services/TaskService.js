
angular.module('TaskService', [])

.factory('Task', ['$http', '$location', function($http, $location) {

  return {
    
    // socket: io('localhost:3000'),
    
    //call to get state
    getState: function() {
      return $http.get('/api/topic');
    },

    // Full call with database. NOT CALLED
    addTopic: function(data) {
      return $http({
        method: 'POST',
        url: '/api/topic',
        data: {topic: data}
      });
    },
    
    addSingleTopic: function(data) {
      return $http({
        method: 'POST',
        url: '/api/topic',    // Goes to topicRoutes.js
        data: JSON.stringify({topic:data})
      });
    },

    updateTopic: function(topic) {
      return $http({
        method: 'PUT',
        url: '/api/topic/' + topic.code,
        data: topic
      });
    }
    
  };
         
}])
