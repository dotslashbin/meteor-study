Wines = new Mongo.Collection("Wines");

if (Meteor.isClient) {
  // counter starts at 0
  Meteor.subscribe("wines");
  Template.wineList.helpers({
    Wines:function() {
      return Wines.find({});
    },

    "click .delete":function() {
      Meteor.call("deleteWine", this._id)
    }
  });

  Template.wine.events({
    "click .delete":function() {
      Meteor.call("deleteWine", this._id)
    }

  });

  Template.wineForm.events({
    "submit .new-wine":function(event) {

      var name = event.target.wine_name.value;
      var vintage = event.target.wine_vintage.value;

      Meteor.call("addNewWine", name, vintage);
    },

    "click .test-button":function(event) {
      Meteor.call("runTest");
    },
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
