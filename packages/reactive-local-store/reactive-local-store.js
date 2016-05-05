import { ReactiveVar } from 'meteor/reactive-var';
import Meteor from 'meteor/meteor';

const sanitizedValue = function(v) {
  if(v === "true") {
    return true;
  } else if(v === "false") {
    return false;
  } else if(v === "null") {
    return null;
  } else {
    return v;
  }
}

let _registeredKeys = [];
let _reactiveVar = new ReactiveVar({});

export const RLS = {
  get(key) {
    return sanitizedValue(_reactiveVar.get()[key]);
  },

  set(key, value) {
    window.localStorage.setItem(key, value);
    let __reactiveVar = _reactiveVar.get();
    __reactiveVar[key] = value;
    _reactiveVar.set(__reactiveVar);
  },

  init() {
    _.each(_registeredKeys, key => {
      const value = sanitizedValue(window.localStorage.getItem(key));
      RLS.set(key, value);
    })
  },

  setRegisteredKeys(registeredKeys) {
    _registeredKeys = registeredKeys;
  }
};
