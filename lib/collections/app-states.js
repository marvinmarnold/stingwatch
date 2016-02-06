AppStates = new Mongo.Collection("AppStates");

AppStates.attachSchema(new SimpleSchema({
  introCompleted: {
    type: Boolean
  }
}))
