import ReplyComment from './ReplyComment';
import UserComment from './UserComment';

function Comment(props) {
  // checks if the comment contains replies [empty or not]
  let doesReplyExist;

  if (props.comment.replies && props.comment.replies.length !== 0) {
    doesReplyExist = true;
  } else {
    doesReplyExist = false;
  }

  return (
    <>
      <UserComment comment={props.comment} />
      {doesReplyExist && (
        <div className="flex ml-10">
          <div className="border-r-[3px] border-r-lightgray mr-10" />
          <ReplyComment replies={props.comment.replies} />
        </div>
      )}
    </>
  );
}

export default Comment;
