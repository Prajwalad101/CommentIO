import Image from "next/image";

function Upvote({ score }) {
  return (
    <div className="flex w-[85px] flex-col items-center gap-3 rounded-lg bg-verylightgray py-3">
      <div className="flex justify-center">
        <Image
          src="/images/icon-plus.svg"
          alt="plus icon"
          height={13}
          width={13}
        />
      </div>
      <p className="font-medium text-moderateblue">{score}</p>
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
