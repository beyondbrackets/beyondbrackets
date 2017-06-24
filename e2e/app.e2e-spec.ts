import { BeyondbracketsPage } from './app.po';

describe('beyondbrackets App', function() {
  let page: BeyondbracketsPage;

  beforeEach(() => {
    page = new BeyondbracketsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
