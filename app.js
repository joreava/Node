
console.log('Starting app.');
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
const _ = require('lodash');
//var res = notes.Suma(8,5);

var filterArray = _.uniq(['Chema',1,'Chema',1,2,3,3,4]);
console.log(filterArray);

//console.log(_.isString(4));

//console.log(res);
//var user = os.userInfo()
//fs.appendFileSync('greetings.txt', `Hello ${user.username} world! Your are ${notes.age}`);