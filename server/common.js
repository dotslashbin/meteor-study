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
      label: "crated_at"
    }
});
//
// Wines = new Mongo.Collection("Wines");
//
// Wines.attachSchema(Schemas.Wines);
