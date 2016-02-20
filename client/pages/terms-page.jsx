TermsPage = React.createClass({
  acceptTerms() {
    setReactiveStorage(TERMS_ACCEPTED, true);
    FlowRouter.go('/watching');
  },

  rejectTerms() {
    setReactiveStorage(TERMS_ACCEPTED, false);
    FlowRouter.go('/terms-rejected');
  },

  render() {
    return (
      <EnsureIntroLayout>
        <div className='container'>
          <h1 className='text-xs-center m-t-1'>Terms</h1>
          <p>Sorry, you gotta accept the terms, blah blah.</p>
          <p>Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.</p>
          <p>Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.</p>
          <div className="row m-b-3 m-t-2">
            <div className='col-xs-6'>
              <button className='btn btn-lg btn-block btn-primary' onClick={this.acceptTerms}>
                Accept
              </button>
            </div>
            <div className='col-xs-6'>
              <button className='btn btn-lg btn-danger btn-block'>
                Reject
              </button>
            </div>
          </div>
        </div>
      </EnsureIntroLayout>
    )
  }

});
