
Meteor.methods({
  addNewWine:function(event) {

    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var name      = event.target.wine_name.value;
    var vintage  = event.target.wine_vintage.value;

    console.log("Name: " + name);
    console.log("Vintage: " + vintage);

    // var newWine   = { name: name, vintage: vintage, created_by: Meteor.user() };
    // Wines.insert(newWine);
    return false;
  },

  deleteWine:function(id) {
    Wines.remove(id);
  },

  runTest:function() {
    console.log("Someone clicked test ON CLIENT");
  }

});
