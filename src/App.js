import React from "react";
import { Input } from "./Input";
import { Post } from "./Post"
import { Users } from "./users"
import { Redus } from "./reducer"
function App() {
  const [postId, setPostId] = React.useState("");

  const changeHandler = event => {
    setPostId(event.target.value);
  };


  return (
    <div className="container pt-3 ">
      <Input postId={postId} changeHandler={changeHandler}/>
      <Post postId={postId}/>
      <Users postId={postId}/>
      <Redus postId={postId}/>
    </div>
  );
}

export default App;



