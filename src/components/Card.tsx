import React, { FC } from "react"

type CardProps = {
  iconPath: string
}

export const Card: FC<CardProps> = (props) => {
  return (
    <article className="w-96 h-52 p-3 md:w-100">
      <div className="bg-white w-full h-full p-3 flex rounded-lg shadow-md ">
        <div className="w-1/5 ">
          <img
            className=" w-full aspect-square h- rounded-full border-2 shadow-sm "
            alt="アイコン"
            src={props.iconPath}
          />
        </div>
        <div className="w-full pl-2 pt-2 divide-y divide-sky-200">
          <div className="h-2/5 ">
            <h3 className="text-gray-600 text-xl">React + TypeScriptの環境構築</h3>
          </div>
          <div className="h-2/5 flex items-center">
            <p className="text-3xl text-sky-500 ">
              1<span className=" px-1 text-xl">時間</span>30<span className="px-1 text-xl">分</span>
            </p>
          </div>
          <div className="h-1/5">
            <p className="text-gray-400">@reactdaikukisan</p>
          </div>
        </div>
      </div>
    </article>
  )
}
