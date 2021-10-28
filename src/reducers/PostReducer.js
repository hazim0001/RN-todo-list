let counter = 1;

const initialState = [];

const PostReducer = (state, action) => {
  if (typeof state === "undefined") {
    return (state = []);
  }
  switch (action.type) {
    case "ADDPOST":
      return [
        ...state,
        {
          id: counter++,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "deletepost":
      return state.filter((post) => post.id !== action.payload);

    default:
      return (state = []);
  }
};

export default PostReducer;
