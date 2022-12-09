import React, { FC } from "react";

interface IPhotoCard {
  imageUrl: string;
  sub: string;
}

const PhotoCard: FC<IPhotoCard> = ({ imageUrl, sub }) => {
  return (
    <div className="w-[234px] h-[234px] mx-1 my-1 relative overflow-hidden">
      <img
        className="absolute w-full h-full object-cover hover:scale-125 transition-all duration-500"
        src={imageUrl}
        alt=""
      />
      <div className="px-[10px] py-[7px] bg-primary-300 text-[15px] text-white leading-5 mt-[11px] flex justify-center items-center absolute bottom-0 left-0">
        <p>{sub}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
