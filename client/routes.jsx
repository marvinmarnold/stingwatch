FlowRouter.route("/", {
  name: "home",
  action: function(params) {
    ReactLayout.render(App, {
      content: <IntroPage />
    });
  },
})

FlowRouter.route("/terms", {
  name: "terms",
  action: function(params) {
    ReactLayout.render(App, {
      content: <TermsPage />
    });
  },
})

FlowRouter.route("/watching", {
  name: "watching",
  action: function(params) {
    ReactLayout.render(App, {
      content: <WatchingPage />
    });
  },
})

FlowRouter.route("/danger", {
  name: "danger",
  action: function(params) {
    ReactLayout.render(App, {
      content: <DangerPage />
    });
  },
})
