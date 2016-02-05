Debugger = new Mongo.Collection("Debugger");
Logger = new Mongo.Collection("Logger")

_debugger = function() {
  var _d = Debugger.findOne({})
  if(_d)
    return _d

  Debugger.insert({})
  return _debugger()
}

_debug = function(text) {
  Debugger.update(_debugger()._id, {$set: {text: text}})
}

_log = function(text) {
  Logger.insert({text: text})
}
