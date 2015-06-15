Meteor.methods({

  runTest:function() {
    console.log(" SERVER SIDE 123131231-> Someone clicked test");
  },

  addNewWine:function(name, vintage) {

    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }


    // var newWine   = { name: name, vintage: vintage, created_at: new Date(), testfield:123 };

    var newWine = { brand:"test brand", rating:123, name:"testname" }; 


    Wines.insert(newWine, function(error, result){
      console.log("Error: " + error);
      console.log("Result: " + result);

    });
  },

  deleteWine:function(id) {
    // Wines.remove(id);
    var result = Wines.remove(id);

    return result;
  },

});
