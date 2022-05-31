import Comment from "./Comment";

function ReplyComment({ replies }) {
  return (
    <div>
      {replies.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}

export default ReplyComment;
