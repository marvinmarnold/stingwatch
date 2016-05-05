import { ReactiveVar } from 'meteor/reactive-var';
import Meteor from 'meteor/meteor';

const sanitizedValue = function(v) {
  if(v === "true") {
    return true;
  } else if(v === "false") {
    return false;
  } else {
    return v;
  }
}

let _registeredKeys = [];
let _reactiveVar = new ReactiveVar();

export class RLS {

  set(key, value) {
    window.localStorage.setItem(key, value);
    _reactiveVar[key] = value;
  }

  init() {
    _.each(_registeredKeys, key => {
      this.set(key, value);
    })
  }

  setRegisteredKeys(registeredKeys) {
    _registeredKeys = registeredKeys;
  }

}
