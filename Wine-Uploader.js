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

  // Meteor.startup(function () {
  //   // code to run on server at startup
  // });
}

Meteor.methods({
  addNewWine:function(event) {

    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var name      = event.target.wine_name.value;
    var vintage  = event.target.wine_vintage.value;

    var newWine   = { name: name, vintage: vintage, created_by: Meteor.user() };
    Wines.insert(newWine);
    return false;
  },

  deleteWine:function(id) {
    Wines.remove(id);
  },

  runTest:function() {
    console.log("Someone clicked test");
  }

});
