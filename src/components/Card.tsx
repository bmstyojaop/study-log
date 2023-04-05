import { deleteDoc, doc } from "firebase/firestore";
import React, { Dispatch, FC, SetStateAction } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { auth, db } from "../firebase";
import { StudyLog } from "../types/types";

type CardProps = {
  id: string;
  title: string;
  detail: string;
  hour: string;
  iconPath: string;
  minute: string;
  setStudyLog: Dispatch<SetStateAction<StudyLog[]>>;
  studyLog: StudyLog[];
  uid: string;
  username: string;
};

export const Card: FC<CardProps> = (props) => {
  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "studylog", id));
    props.setStudyLog(props.studyLog.filter((doc: StudyLog) => doc.id != id));
    console.log("handledelete");
  };
  return (
    <article className="md:w-100 h-52 w-96 p-3">
      <div className="flex h-full w-full rounded-lg bg-white p-3 shadow-md">
        <div className="flex w-1/5 flex-col items-center justify-between">
          <img
            className="aspect-square w-full rounded-full border-2 shadow-sm"
            alt="アイコン"
            src={props?.iconPath}
          />
          {props.uid === auth.currentUser?.uid ? (
            <button onClick={() => handleDelete(props.id)}>
              <RiDeleteBin6Line
                className="text-red-500 opacity-60 transition duration-150 ease-in-out hover:opacity-100"
                size={"2rem"}
              />
            </button>
          ) : null}
        </div>
        <div className="w-full divide-y divide-sky-200 pt-2 pl-2">
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
