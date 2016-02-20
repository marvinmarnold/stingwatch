setReactiveStorage = function(key, value) {
  window.localStorage.setItem(key, value);
  Session.set(key, value);
}

initReactiveStores = function() {
  var localStores = [INTRO_COMPLETED, TERMS_ACCEPTED];

  _.each(localStores, function(key) {
    var storedVal = window.localStorage.getItem(key)
    Session.setDefault(key, storedVal);
  })
}

termsAccepted = function() {
  return window.localStorage.getItem(TERMS_ACCEPTED);
}
