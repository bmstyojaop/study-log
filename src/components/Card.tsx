import { deleteDoc, doc } from "firebase/firestore";
import React, { Dispatch, FC, SetStateAction } from "react";
import { useModal } from "react-hooks-use-modal";
import { AiOutlineClose } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
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
  const [Modal, open, close, isOpen] = useModal("root", {});
  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "studylog", id));
    props.setStudyLog(props.studyLog.filter((doc: StudyLog) => doc.id != id));
  };
  return (
    <>
      <article className="md:w-100 h-52 w-96 p-3">
        <div className="flex h-full w-full rounded-lg bg-white p-3  shadow-md">
          <div className="flex w-1/5 flex-col items-center justify-between">
            <div className="flex h-2/5 items-center justify-center">
              <div className="items-between flex h-12 w-12 justify-center overflow-hidden">
                <img
                  className=" h-full  w-full rounded-full border-[1px]"
                  alt="アイコン"
                  src={props?.iconPath}
                />
              </div>
            </div>
            <button className="h-2/5" onClick={open}>
              <BsBook className="text-sky-500" size={"2rem"} />
            </button>
            {props.uid === auth.currentUser?.uid ? (
              <button className="h-1/5" onClick={() => handleDelete(props.id)}>
                <RiDeleteBin6Line
                  className="text-red-500 opacity-60 transition duration-150 ease-in-out hover:opacity-100"
                  size={"2rem"}
                />
              </button>
            ) : (
              <div className="h-1/5"></div>
            )}
          </div>
          <div className="w-full divide-y divide-sky-200 pl-2">
            <div className="flex h-2/5 items-center px-2">
              <h3 className="text-xl text-gray-600">{props.title}</h3>
            </div>
            <div className="flex h-2/5 items-center px-2">
              <p className=" text-3xl text-sky-500">
                {props.hour}
                <span className="px-1 text-xl">時間</span>
                {props.minute}
                <span className="px-1 text-xl">分</span>
              </p>
            </div>
            <div className="h-1/5 px-2">
              <p className="flex h-full items-center  text-gray-400">{props.username}</p>
            </div>
          </div>
        </div>
      </article>
      <Modal>
        <div className=" h-[36rem] w-screen  rounded-2xl bg-white p-10 md:w-[50rem]">
          <div className="h-full w-full divide-y divide-sky-200 overflow-auto">
            <h2 className="py-2 text-center text-3xl">{props.title}</h2>
            <p className="py-2 text-center text-3xl text-sky-500">
              {props.hour}時間{props.minute}分
            </p>
            {props.detail && <p className="py-2">{props.detail}</p>}
            <div className="relative flex items-center py-2">
              <p className="w-full py-2 text-center text-gray-600">{props.username}</p>
              <button
                className="absolute right-3 z-10 flex items-center rounded-lg border border-sky-800 p-1 text-sky-800 duration-300 hover:border-white hover:bg-sky-500 hover:text-white active:bg-sky-800"
                onClick={close}
              >
                <span>閉じる</span>
                <AiOutlineClose className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
