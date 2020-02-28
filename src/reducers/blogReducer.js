export const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    default:
      return state;
  }
};
