import { ReactiveVar } from 'meteor/reactive-var';
import Meteor from 'meteor/meteor';

if(Meteor.isClient || Meteor.isCordova) {

  export class RLS {
    _registeredKeys: [],
    _reactiveVar: new ReactiveVar({}),

    get(key) {
      return _reactiveVar[key];
    },

    set(key, value) {
      window.localStorage.setItem(key, value);
      this._reactiveVar[key] = value;
    }

    init() {
      _.each(this._registeredKeys, key => {
        this.set(key, value);
      })
    },

    setRegisteredKeys(registeredKeys) {
      this._registeredKeys = registeredKeys;
    }
  }
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
