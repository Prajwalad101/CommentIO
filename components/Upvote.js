import Image from 'next/image';

function Upvote() {
  return (
    <div className="flex flex-col gap-3 bg-verylightgray px-2 rounded-lg py-3">
      <div className="flex justify-center">
        <Image
          src="/images/icon-plus.svg"
          alt="plus icon"
          height={13}
          width={13}
        />
      </div>
      <p className="font-bold text-moderateblue">10</p>
      <div className="flex justify-center pb-1">
        <Image
          src="/images/icon-minus.svg"
          alt="plus icon"
          height={3}
          width={15}
        />
      </div>
    </div>
  );
}

export default Upvote;
