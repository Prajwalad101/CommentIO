import Upvote from "./Upvote";
import CommentHeader from "./CommentHeader";

function UserComment(props) {
  const { content, user, createdAt, score, replyingTo } = props.comment;
  z;
  return (
    <div className="mb-10 flex items-start gap-5 rounded-md bg-white p-6 last:mb-0">
      <Upvote score={score} />
      <div>
        <CommentHeader user={user} createdAt={createdAt} />
        <p className="text-grayishblue">
          {replyingTo && (
            <span className="font-medium text-moderateblue">
              @{replyingTo}{" "}
            </span>
          )}

          {content}
        </p>
      </div>
    </div>
  );
}

export default UserComment;
