import React from "react";
import { observer } from "mobx-react";

// Components
import CommentItem from "./CommentItem";

//Styles
import { CommentListWrapper } from "./Styles";

const CommentList = ({ pastaComments }) => {
  const commentList = pastaComments.map((_comment) => (
    <CommentItem _comment={_comment} />
  ));

  return <CommentListWrapper>{commentList}</CommentListWrapper>;
};

export default observer(CommentList);
