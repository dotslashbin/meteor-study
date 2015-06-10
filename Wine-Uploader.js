Wines = new Mongo.Collection("Wines");

if (Meteor.isClient) {
  // counter starts at 0
  Template.body.helpers({
        Wines:function() {
          return Wines.find({});
        }
  });

  Template.body.events({
        "submit .new-wine":function(event) {
            var name      = event.target.wine_name.value;
            var vintage  = event.target.wine_vintage.value;

            var newWine   = { name: name, vintage: vintage, created_by: Meteor.user() };
            Wines.insert(newWine);
            return false;
        },

        "click .test-button":function(event) {
            alert("Someone clicked on the test");
        },

        "click .delete":function() {
          Wines.remove(this._id); 
        }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup


  });
}
