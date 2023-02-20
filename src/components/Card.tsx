import React, { FC } from "react";

type CardProps = {
  iconPath: string;
};

export const Card: FC<CardProps> = (props) => {
  return (
    <article className="h-52 w-96 p-3 md:w-100">
      <div className="flex h-full w-full rounded-lg bg-white p-3 shadow-md">
        <div className="w-1/5">
          <img className="aspect-square w-full rounded-full border-2 shadow-sm" alt="アイコン" src={props.iconPath} />
        </div>
        <div className="w-full pt-2 pl-2 divide-y divide-sky-200">
          <div className="h-2/5">
            <h3 className="text-xl text-gray-600">React + TypeScriptの環境構築</h3>
          </div>
          <div className="flex h-2/5 items-center">
            <p className="text-3xl text-sky-500">
              1<span className="px-1 text-xl">時間</span>30<span className="px-1 text-xl">分</span>
            </p>
          </div>
          <div className="h-1/5">
            <p className="text-gray-400">@reactdaikukisan</p>
          </div>
        </div>
      </div>
    </article>
  );
};
