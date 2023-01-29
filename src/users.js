import React, { useEffect, useState } from "react";


export function Users ({ postId }) {
  const [cont2, setCount2] = useState({id:'2'});
  const search = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${postId}`)
      .then((response) => response.json())
      .then((json) => setCount2(json));
      
  };

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  //       .then((response) => response.json())
  //       .then((json) => setCount2(json));
  //   }, [postId]);
  useEffect(() => {}, [cont2]);
  return (
    <div>
      <button onClick={() => search(postId)}>users</button>
      {cont2 && (
        <div>
          <div>{cont2.id}</div>
          <div>{cont2.name}</div>
          <div>{cont2.email}</div>
        </div>
      )}
    </div>
  );
      }