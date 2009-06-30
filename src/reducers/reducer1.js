const initState1 = {
  test: false
};
export default (state = initState1, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};
