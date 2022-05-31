import { useContext } from "react";

import { UserContext } from "./Comments";

import Image from "next/image";

function CommentHeader({ user, createdAt }) {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser.username === user.username;

  const formattedUrl = user.image.png.slice(1);

  return (
    <div className="mb-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Image src={formattedUrl} alt="user profile" width={30} height={30} />
        <p className="font-medium">{user.username}</p>
        {isCurrentUser && (
          <p className="m-0 rounded-sm bg-moderateblue p-0 px-1 text-sm text-white">
            you
          </p>
        )}
        <p className="text-grayishblue">{createdAt}</p>
      </div>
      {isCurrentUser ? (
        <div className="flex gap-7">
          <div className="flex items-center gap-2">
            <Image
              src="/images/icon-delete.svg"
              alt="reply icon"
              height={14}
              width={12}
            />
            <span className="font-medium text-softred">Delete</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/icon-edit.svg"
              alt="reply icon"
              height={14}
              width={14}
            />
            <span className="font-medium text-moderateblue">Edit</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Image
            src="/images/icon-reply.svg"
            alt="reply icon"
            height={14}
            width={14}
          />
          <p className="font-medium text-moderateblue">Reply</p>
        </div>
      )}
    </div>
  );
}

export default CommentHeader;
