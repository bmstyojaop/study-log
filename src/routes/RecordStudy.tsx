import React from "react";

import { TimeInput } from "../components/TimeInput";

export const RecordStudy = () => {
  return (
    <div className="flex w-full justify-center h-[90vh]">
      <form className="p-5 w-full bg-white md:w-[50rem]  rounded-3xl drop-shadow-md">
        <div className="mb-6">
          <h1 className="text-2xl mb-8 text-center">学習記録</h1>
          <label htmlFor="email" className=" mb-2 block text-sm font-medium text-gray-900">
            学習内容
          </label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 shadow-sm p-2.5 focus:border-blue-500 focus:ring-blue-500"
            placeholder="例）数学A 問題集"
            required
          />
        </div>
        <TimeInput />
        <div className="mb-6">
          <label htmlFor="detail" className="mb-2 block text-sm font-medium text-gray-900">
            メモ
          </label>
          <textarea
            id="detail"
            className="h-40 block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 shadow-sm p-2.5 focus:border-blue-500 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 text-center text-sm font-medium text-white py-2.5 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-3000"
          >
            記録する
          </button>
        </div>
      </form>
    </div>
  );
};
