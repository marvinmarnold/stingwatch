// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// // Import and rename a variable exported by reactive-local-store.js.
import { ReactiveStore } from "meteor/reactive-local-store";

// Write your tests here!
// Here is an example.
Tinytest.add('ReactiveStore exported', function (test) {
  test.isNotUndefined(ReactiveStore);
});
