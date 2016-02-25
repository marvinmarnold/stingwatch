FlowRouter.route("/", {
  name: "status",
  action: function(params) {
    ReactLayout.render(App, {
      content: <StatusPage />
    });
  },
})
STATUS_PATH = FlowRouter.path('status')

FlowRouter.route("/terms", {
  name: "terms",
  action: function(params) {
    ReactLayout.render(App, {
      content: <TermsPage />
    });
  },
})
TERMS_PATH = FlowRouter.path('terms')

FlowRouter.route("/intro", {
  name: "intro",
  action: function(params) {
    ReactLayout.render(App, {
      content: <IntroPage />
    });
  },
})
