import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components
import CommentList from ".";

// Stores
import commentStore from "../../stores/commentStore";
import authStore from "../../stores/authStore";

//Styles
import {
  CommentFormWrapper,
  SubmitButtonStyled,
  TextareaStyle,
} from "./Styles";
const formStyle = {
  border: "1px solid #D6D6D6",
  borderRadius: 4,
  padding: 15,
  width: "21rem",
};

const Comment = ({ user, pastaId, pastaComments }) => {
  const [comments, setComment] = useState({
    comment: "",
    username: user?.username,
    pastaId: pastaId,
  });

  const handleChange = (event) => {
    setComment({ ...comments, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    commentStore.createComment(comments, pastaId);
    setComment({ comment: "" });
  };

  return (
    <>
      <CommentFormWrapper>
        <form style={formStyle}>
          <CommentList pastaComments={pastaComments} />

          <div className="form-group col-md-12 ">
            <textarea
              class="form-control"
              placeholder="Leave a comment!"
              id="floatingTextarea"
              required
              onChange={handleChange}
              name="comment"
              value={comments.comment}
            />
          </div>
          {authStore.user ? (
            <SubmitButtonStyled
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Send
            </SubmitButtonStyled>
          ) : (
            <>
              <Link to="/sign-in" style={{ color: "black" }}>
                sign in to add a comment
              </Link>
            </>
          )}
        </form>
      </CommentFormWrapper>
    </>
  );
};

export default observer(Comment);
