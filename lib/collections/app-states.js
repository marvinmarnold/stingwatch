AppStates = new Mongo.Collection("AppStates");

AppStates.attachSchema(new SimpleSchema({
  introCompleted: {
    type: Boolean
  },
  // orientation: {
  //   type: String,
  //   allowedValues: [ORIENTATIONS.UP, ORIENTATIONS.LEFT, ORIENTATIONS.RIGHT, ORIENTATIONS.UNKNOWN]
  // }
}))
