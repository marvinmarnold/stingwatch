Meteor.methods({
  'telephony-entries/add': function(telephonyEntry) {
    check(telephonyEntry, {
      mcc: String,
      mnc: String
    });

    TelephonyEntries.insert(telephonyEntry)
  }
});

Meteor.publish("telephony-entries", function() {
  return TelephonyEntries.find()
});
