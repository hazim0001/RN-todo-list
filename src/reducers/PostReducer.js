let counter = 1;

const PostReducer = (state, action) => {
  if (typeof state === "undefined") {
    return (state = []);
  }
  console.log("from post reducer");
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
    case "fetch":
      console.log("from fetch", action.payload);
    default:
      return state;
  }
};

export default PostReducer;
