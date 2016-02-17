var express = require('express');
var router = express.Router();
var moment = require('moment');

var mockDate = function (timeStr) {
    return parseInt(moment(timeStr, 'HH:mm').format('X'), 10);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // throw "bam";
  res.json([
      {id: 1, text: 'kinja-mantle #6246 deploy', completed: true, severity: 'info', timestamp: mockDate('9:35')},
      {id: 2, text: 'kinja-mantle #6247 deploy failed', completed: false, severity: 'alert', timestamp: mockDate('11:35')},
      {id: 3, text: 'kinja-mantle #6248 deploy', completed: false, severity: 'info', timestamp: mockDate('11:42')},
      {id: 4, text: 'kinja-profile #627 deploy', completed: false, severity: 'info', timestamp: mockDate('15:20')},
      {id: 5, text: 'kinja-mantle #6246 deploy', completed: false, severity: 'info', timestamp: mockDate('15:22')},
      {id: 6, text: 'replication lag at +2sec', completed: false, severity: 'alert', timestamp: mockDate('15:27')},
      {id: 7, text: 'kinja-core #1246 deploy', completed: false, severity: 'info', timestamp: mockDate('15:25')}
  ]);
});

module.exports = router;
