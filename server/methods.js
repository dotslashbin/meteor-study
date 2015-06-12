Meteor.methods({

  runTest:function() {
    console.log(" SERVER SIDE 123131231-> Someone clicked test");
  },

  addNewWine:function(name, vintage) {

    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }


    var newWine   = { name: name, vintage: vintage, create_at: new Date() };
    Wines.insert(newWine);
  },

  deleteWine:function(id) {
    // Wines.remove(id);
    var result = Wines.remove(id);

    return result;
  },

});
