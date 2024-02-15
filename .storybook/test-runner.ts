import type { TestRunnerConfig } from '@storybook/test-runner';
// import { checkA11y, injectAxe } from 'axe-playwright';

const config: TestRunnerConfig = {
  // async preVisit(page) {
  //   await injectAxe(page); // a11y設定
  // },
  async postVisit(page, context) {
    // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler?.innerHTML();
    expect(innerHTML).toMatchSnapshot();

    // await checkA11y(page, '#storybook-root', { // a11y設定
    //   detailedReport: true,
    //   detailedReportOptions: {
    //     html: true,
    //   },
    // });
  },
};

export default config;