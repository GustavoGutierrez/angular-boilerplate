import { NgBoilerplatePage } from './app.po';

describe('ng-boilerplate App', () => {
  let page: NgBoilerplatePage;

  beforeEach(() => {
    page = new NgBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
