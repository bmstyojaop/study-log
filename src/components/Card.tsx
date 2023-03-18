import React, { FC } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

type CardProps = {
  title: string;
  detail: string;
  hour: string;
  iconPath: string;
  minute: string;
  username: string;
};

export const Card: FC<CardProps> = (props) => {
  return (
    <article className="h-52 w-96 p-3 md:w-100">
      <div className="flex h-full w-full rounded-lg bg-white p-3 shadow-md">
        <div className="flex w-1/5 flex-col items-center justify-between">
          <img
            className="aspect-square w-full rounded-full border-2 shadow-sm"
            alt="アイコン"
            src={props?.iconPath}
          />
          <RiDeleteBin6Line
            className="text-red-500 opacity-60 transition duration-150 ease-in-out hover:opacity-100"
            size={"2rem"}
          />
        </div>
        <div className="w-full pt-2 pl-2 divide-y divide-sky-200">
          <div className="h-2/5">
            <h3 className="text-xl text-gray-600">
              {props.title.length === 0 ? "00" : props.title}
            </h3>
          </div>
          <div className="flex h-2/5 items-center">
            <p className="text-3xl text-sky-500">
              {props.hour}
              <span className="px-1 text-xl">時間</span>
              {props.minute}
              <span className="px-1 text-xl">分</span>
            </p>
          </div>
          <div className="h-1/5">
            <p className="text-gray-400">{props.username}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
