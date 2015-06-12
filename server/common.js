var Schemas = {};

Schemas.Wines = new SimpleSchema({
    name: {
      type:String,
      label: "name",
    },

    vintage: {
      type: String,
      label: "vintage"
    },
    created_at: {
      type: Date,
      label: "crated_At"
    }
});

Meteor.methods({

  runTest:function() {
    console.log(" SERVER SIDE 123131231-> Someone clicked test");
  }

});
