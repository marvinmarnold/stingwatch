Meteor.methods({
  _log(text) {
    _Logger.insert({text: text})
  },
  _debug(text) {
    _Debugger.update(_debugger()._id, {$set: {text: text}})
  }
});

_debugger = function() {
  var _d = _Debugger.findOne()
  if(_d)
    return _d

  _Debugger.insert({})
  return _debugger()
}
