import Comment from './Comment';

function ReplyComment({ replies }) {
  return (
    <div className="ml-20">
      {replies.map((comment) => (
        <div key={comment.id}>
          <Comment comment={comment} />
        </div>
      ))}
    </div>
  );
}

export default ReplyComment;
