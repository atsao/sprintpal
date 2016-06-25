var Topic = require('./topicModel.js');

module.exports = {
  findTopic: function(req, res, next) {
    var desc = req.body.topic;
    Topic.findOne({desc: desc}).then(function(topic) {
      if (topic) {
        req.topic = topic;
        next();
      } else {
        res.send('Topic doesn\'t exist');
      }
    }).catch(function(error) {
      console.error(error);
      next();
    });
  },

  allTopics: function(req, res) {
    Topic.find({}).then(function(topics) {
      res.json(topics);
    }).catch(function(error) {
      console.error(error);
    });
  },

  newTopic: function(req, res) {
    var topic = req.body.topic;

    Topic.findOne({desc: topic}).then(function(match) {
      if (match) {
        res.send(match);
      } else {
        return topic;
      }
    }).then(function(topic) {
      if (topic) {
        var newTopic = {
          desc: topic
        };
        return Topic.create(newTopic);
      }
    }).then(function(createdTopic) {
      if (createdTopic) {
        res.json(createdTopic);
      }
    }).catch(function(error) {
      console.error(error);
    });
  },

  updateTopic: function(req, res) {
    var topic = req.topic.desc;
    var rating = req.body.rating;
    
    var query = { desc: topic };

    Topic.findOneAndUpdate(query, { rating: rating }, {upsert: true}).then(function(topic) {
      res.json(topic);
    }).catch(function(error) {
      console.error(error);
    });
  }
};