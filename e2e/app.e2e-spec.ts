import { SchoolSyncFrontendPage } from './app.po';

describe('school-sync-frontend App', function() {
  let page: SchoolSyncFrontendPage;

  beforeEach(() => {
    page = new SchoolSyncFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
