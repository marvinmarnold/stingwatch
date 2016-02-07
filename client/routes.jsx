FlowRouter.route("/", {
  name: "home",
  action: function(params) {
    ReactLayout.render(App, {
      content: <IntroPage />
    });
  },
})
