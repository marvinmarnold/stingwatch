// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See reactive-local-store-tests.js for an example of importing.
export var ReactiveStore = {};

var _keys = [];

if(Meteor.isClient) {
  _.extend(ReactiveStore, {
    set(key, value) {
      window.localStorage.setItem(key, value);
      Session.set(key, value);
    },

    get(key) {
      return Session.get(key);
    },

    init() {
      _.each(_keys, key => {
        var v = window.localStorage.getItem(TERMS_ACCEPTED);
        Session.set(key, v);
      })
    },

    setKeys(keys) {
      _keys = keys;
    }
  })
}
