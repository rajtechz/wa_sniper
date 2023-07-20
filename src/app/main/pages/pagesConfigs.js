import activitiesPageConfig from './activities/activitiesPageConfig';
import authenticationPagesConfig from './authentication/authenticationPagesConfig';
import errorPagesConfig from './error/errorPagesConfig';
import pricingPagesConfig from './pricing/pricingPagesConfig';
import searchPagesConfig from './search/searchPagesConfig';

const pagesConfigs = [
  ...authenticationPagesConfig,
  errorPagesConfig,
  activitiesPageConfig,
  pricingPagesConfig,
  searchPagesConfig,
];

export default pagesConfigs;
