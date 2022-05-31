import Image from 'next/image';
import Upvote from './Upvote';

function Comment(props) {
  const { content, user, createdAt, score } = props.comment;

  const formattedUrl = user.image.png.slice(1);

  return (
    <div className="mb-10 bg-white rounded-md p-5 flex gap-5 items-start">
      <Upvote score={score} />
      <div>
        <div className="flex gap-4 items-center justify-between mb-3">
          <div className="flex gap-4">
            <Image
              src={formattedUrl}
              alt="user profile"
              width={30}
              height={30}
            />
            <p className="font-medium">{user.username}</p>
            <p className="text-grayishblue">{createdAt}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Image
              src="/images/icon-reply.svg"
              alt="reply icon"
              height={14}
              width={14}
            />
            <p className="text-moderateblue font-medium">Reply</p>
          </div>
        </div>
        <p className="text-grayishblue">{content}</p>
      </div>
    </div>
  );
}

export default Comment;
