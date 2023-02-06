import React, { FC } from "react"

export const Card: FC = (props) => {
  return (
    <article className="w-96 h-52 p-3 md:w-100">
      <div className="bg-white w-full h-full rounded-lg shadow-md">
        <img className="" alt="アイコン" />
      </div>
    </article>
  )
}
