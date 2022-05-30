import Data from '../data.json';
import Comment from './Comment';

function Comments() {
  const comments = Data.comments;
  return (
    <div className="bg-blue-500 mx-auto w-[90%]">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
