// // Import Tinytest from the tinytest Meteor package.
// import { Tinytest } from "meteor/tinytest";
// import { Meteor } from 'meteor/meteor';
// import { RLS } from "./reactive-local-store.js";
//
// Tinytest.add('RLS - loads values from localStorage on init', function (test) {
//
//   // Prepare localStorate
//   window.localStorage.setItem("a", "b");
//   window.localStorage.setItem("c", 1);
//
//   // Init RLS
//   RLS.init();
//
//   // Ensure RLS initialized correctly
//   test.equal(RLS.get("a"), "b");
//   test.equal(RLS.get("c"), 1);
//   test.isUndefined(RLS.get("d"));
// });
