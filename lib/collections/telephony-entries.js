TelephonyEntries = new Mongo.Collection("TelephonyEntries");

TelephonyEntries.attachSchema(new SimpleSchema({
  cid: {
    type: Number
  }
}))
