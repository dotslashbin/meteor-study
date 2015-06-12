Wines = new Mongo.Collection("Wines");

if (Meteor.isClient) {
  // counter starts at 0
  Meteor.subscribe("wines");
  Template.body.helpers({
        Wines:function() {
          return Wines.find({});
        }
  });

  Template.body.events({
        "submit .new-wine":function(event) {
            Meteor.call("addNewWine", event);
        },

        "click .test-button":function(event) {
            Meteor.call("runTest");
        },

        "click .delete":function() {
            Meteor.call("deleteWine", this._id)
        }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.publish("wines", function() {
      return Wines.find({});
  });
}
