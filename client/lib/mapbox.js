Meteor.startup(function(){
  Mapbox.load({
    plugins: ['minimap', 'markercluster', 'heat', 'locate', 'turf']
  });
});
