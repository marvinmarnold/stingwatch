Meteor.methods({
  'telephony-entries/add': function(telephonyEntry) {
    check(telephonyEntry, {
      mcc: Match.Optional(String),
      mnc: Match.Optional(String),
      lac: Match.Optional(String),
      cid: Match.Optional(String),
      signalStrength: Match.Optional(Number),
    });

    telephonyEntry.createdAt = new Date()

    TelephonyEntries.insert(telephonyEntry)
  }
});

Meteor.publish("telephony-entries", function() {
  return TelephonyEntries.find({}, {sort: {createdAt: -1}})
});
