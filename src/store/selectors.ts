import { TRootState } from '#utils/configuredStore';

const selectApiToken = (state: TRootState) => state.apiToken;
const selectPortfolio = (state: TRootState) => state.portfolio;
const selectBonds = (state: TRootState) => state.bonds;

export { selectApiToken, selectPortfolio, selectBonds };
