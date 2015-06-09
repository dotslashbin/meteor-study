Wines = new Mongo.Collection("Wines");

if (Meteor.isClient) {
  // counter starts at 0
  Template.body.helpers(
    {
        Wines:function() {
          return Wines.find({});
        }
    }
  );

  Template.body.events(
    {
        "submit .new-wine":function(event) {

            var newWine = { name:"generated1", vintage:"1000" };

            Wines.insert(newWine);

            return false;
        }
    }
  )
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup


  });
}
