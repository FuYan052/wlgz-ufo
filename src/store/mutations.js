export default {
  changeLoginStatus (state, loginStatus) {
    state.isLogin = loginStatus
  },
  changeType(state, status) {
    state.type = status;
  },
  changeUserPhone(state, status) {
    state.userPhone = status;
  },
  changeToken(state, status) {
    state.token = status;
  },
  changeProjectId(state, status) {
    state.token = status;
  },
}