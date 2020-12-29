export default {
  requests(state, _, __, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  },
};
