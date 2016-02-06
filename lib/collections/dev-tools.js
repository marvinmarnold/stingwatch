// These collections are for debugging on Cordova,
// where it is normally difficult to inspect the environment

// Debugger is a singelton collection that continually updates a single instance
_Debugger = new Mongo.Collection("_Debugger");

// Logger is a never endling list of new log messages
_Logger = new Mongo.Collection("_Logger")
