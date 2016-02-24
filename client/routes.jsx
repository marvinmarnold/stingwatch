FlowRouter.route("/", {
  name: "home",
  action: function(params) {
    ReactLayout.render(App, {
      content: <h1>App started</h1>
    });
  },
})
