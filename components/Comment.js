function Comment(props) {
  return (
    <div className="mb-5">
      <h1>{props?.comment?.content}</h1>
    </div>
  );
}

export default Comment;
