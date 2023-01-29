import React from "react";

export function Input({ postId, changeHandler }) {
  return (
    <div className="container pt-3 ">
      <input type="text" value={postId} onChange={changeHandler} />
      <h1>{postId}</h1>
    </div>
  );
}

