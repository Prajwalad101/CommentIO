import Data from '../data.json';
import Comment from './Comment';

function Comments() {
  const comments = Data.comments;
  return (
    <div className="mx-auto w-[50%]">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
