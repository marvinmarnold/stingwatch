TelephonyEntries = new Mongo.Collection("TelephonyEntries");

TelephonyEntries.attachSchema(new SimpleSchema({
  cid: {
    type: String,
    optional: true
  },
  mcc: {
    type: String,
    optional: true
  },
  mnc: {
    type: String,
    optional: true
  },
  lac: {
    type: String,
    optional: true
  },
  signalStrength: {
    type: Number,
    decimal: true,
    optional: true
  },
  createdAt: {
    type: Date
  }
}))
