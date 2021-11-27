const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;
const getFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export const authSelector = {
  getIsLoggedIn,
  getUserName,
  getFetchingCurrent,
};

export default authSelector;
