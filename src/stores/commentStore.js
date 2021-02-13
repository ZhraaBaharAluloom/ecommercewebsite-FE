import { action, makeObservable, observable, configure } from "mobx";

import instance from "./instance";
configure({
  enforceActions: "never",
});

class CommentStore {
  comments = [];
  loading = true;

  // Fetch Items
  fetchComments = async () => {
    try {
      const res = await instance.get("/comments");
      this.comments = res.data;
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: commentStore.js ~ line 16 ~ commentStore ~ fetchComments= ~ error",
        error
      );
    }
  };

  createComment = async (commentData, pastaId) => {
    console.log(
      "🚀 ~ file: commentStore.js ~ line 13 ~ CommentStore ~ createComment= ~ commentData",
      pastaId
    );

    try {
      const res = await instance.post(
        `/pastas/${pastaId}/comment`,
        commentData
      );
      console.log(
        "🚀 ~ file: commentStore.js ~ line 23 ~ CommentStore ~ createComment= ~ res",
        res
      );

      this.comments.push(res.data);

      alert("sent");
    } catch (error) {
      console.log(
        "🚀 ~ file: commentStore.js ~ line 18 ~ CommentStore ~ createComment= ~ error",
        error
      );
    }
  };

  constructor() {
    makeObservable(this, {
      comments: observable,
      createComment: action,
    });
  }
}

const commentStore = new CommentStore();
commentStore.fetchComments();
export default commentStore;
