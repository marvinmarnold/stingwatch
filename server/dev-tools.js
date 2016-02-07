Meteor.methods({
  _log(text) {
    check(text, String)
    
    _Logger.insert({text: text, createdAt: new Date()})
  },
  _debug(text) {
    check(text, String)

    _Debugger.update(_debugger()._id, {$set: {text: text, createdAt: new Date()}})
  }
});

_debugger = function() {
  var _d = _Debugger.findOne()
  if(_d)
    return _d

  _Debugger.insert({})
  return _debugger()
}

Meteor.publish("dev-tools", function() {
  var options = {sort: {createdAt: -1}, limit: 100}
  return [
    _Debugger.find({}, options),
    _Logger.find({}, options)
  ]
});
