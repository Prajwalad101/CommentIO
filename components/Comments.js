import { createContext } from "react";
import Data from "../data.json";
import Comment from "./Comment";

export const UserContext = createContext(undefined);

function Comments() {
  const comments = Data.comments;

  return (
    <UserContext.Provider value={Data.currentUser}>
      <div className="mx-auto w-[47%]">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            currentUser={Data.currentUser}
          />
        ))}
      </div>
    </UserContext.Provider>
  );
}

export default Comments;
