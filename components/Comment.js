import ReplyComment from './ReplyComment';
import UserComment from './UserComment';

function Comment(props) {
  console.log(JSON.stringify(props.comment, null, 4));

  return (
    <>
      <UserComment comment={props.comment} />
      {props.comment.replies && (
        <ReplyComment replies={props.comment.replies} />
      )}
    </>
  );
}

export default Comment;
