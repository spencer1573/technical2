import { Technical2Page } from './app.po';

describe('technical2 App', () => {
  let page: Technical2Page;

  beforeEach(() => {
    page = new Technical2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
