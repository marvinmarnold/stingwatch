AppStates = new Mongo.Collection("AppStates");

AppStates.attachSchema(new SimpleSchema({
  deviceId: {
    type: String
  },
  introCompleted: {
    type: Boolean
  },
  termsAccepted: {
    type: Boolean
  },
  // orientation: {
  //   type: String,
  //   allowedValues: [ORIENTATIONS.UP, ORIENTATIONS.LEFT, ORIENTATIONS.RIGHT, ORIENTATIONS.UNKNOWN]
  // }
}))
