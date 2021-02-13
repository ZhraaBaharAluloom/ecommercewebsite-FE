import React from "react";

const CommentItem = ({ _comment }) => {
  return (
    <div
      style={{
        color: "black",
      }}
    >
      <span style={{ fontWeight: "bold", color: "#007965" }}>
        {_comment.username} :
      </span>
      <span style={{ color: "grey" }}>{_comment.comment}</span>
    </div>
  );
};

export default CommentItem;
