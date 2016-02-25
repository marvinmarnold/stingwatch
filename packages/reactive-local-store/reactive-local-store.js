// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See reactive-local-store-tests.js for an example of importing.
export var ReactiveStore = {};

var _keys = [];

if(Meteor.isClient || Meteor.isCordova) {
  _.extend(ReactiveStore, {
    set(key, value) {
      window.localStorage.setItem(key, value);
      Session.set(key, value);
    },

    get(key) {
      var v = Session.get(key);

      return v;
    },

    init() {
      _.each(_keys, key => {
        var v = window.localStorage.getItem(key);
        Session.set(key, sanitizedValue(v));
        // console.log('init() key: ' + key + ", val: " + v);
      })
    },

    setKeys(keys) {
      _keys = keys;
    }
  })
}

var sanitizedValue = function(v) {
  if(v === "true") {
    return true;
  } else if(v === "false") {
    return false;
  } else {
    return v;
  }
}
