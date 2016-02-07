FlowRouter.route("/", {
  name: "home",
  action: function(params) {
    ReactLayout.render(App, {
      content: <IntroPage />
    });
  },
  // triggersEnter: [function () {
  //   Meteor.defer(function () {
  //     $('body').addClass('full-screen');
  //   });
  // }],
})
