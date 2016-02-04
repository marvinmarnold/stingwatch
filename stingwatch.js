var refreshPeriod = 10 * 1000 // ms
if (Meteor.isClient) {

  Template.telephonyEntries.helpers({
    entries: {
      return TelephonyEntries.find()
    }
  });
}

if (Meteor.isCordova) {
  Meteor.startup(function () {
    Meteor.setTimeout(function () {
      var cid = telephony.getCid()

      TelephonyEntries.insert({
        cid: cid
      })
    }, refreshPeriod);
  });
}
