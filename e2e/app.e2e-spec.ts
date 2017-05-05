import { FeatureRequestAppPage } from './app.po';

describe('feature-request-app App', function() {
  let page: FeatureRequestAppPage;

  beforeEach(() => {
    page = new FeatureRequestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
