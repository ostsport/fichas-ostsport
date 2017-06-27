import { FichasOstsportPage } from './app.po';

describe('fichas-ostsport App', () => {
  let page: FichasOstsportPage;

  beforeEach(() => {
    page = new FichasOstsportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
