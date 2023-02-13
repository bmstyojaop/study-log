import { FC } from "react"

export const Header: FC = () => {
  return (
    <header className="z-50 h-24 select-none rerative">
      <div className="container relative mx-auto flex h-24 flex-wrap items-center justify-between overflow-hidden border-b border-gray-200 font-medium sm:px-4 md:overflow-visible lg:justify-center lg:px-0">
        <div className="flex h-full w-1/4 items-center justify-start pr-4">
          <a href="#" className="inline-block py-4 md:py-0">
            <span className="p-1 text-xl font-black leading-none text-gray-900">StudyLog</span>
          </a>
        </div>
        <div className="top-0 left-0 hidden h-full w-full items-start bg-gray-900 bg-opacity-50 p-4 text-sm md:absolute md:relative md:flex md:w-3/4 md:items-center md:bg-transparent md:p-0 lg:text-base">
          <div className="flex w-full flex-col items-start justify-center text-center space-x-6 md:mt-0 md:w-2/3 md:flex-row md:items-center lg:space-x-8">
            <a
              href="#"
              className="mx-0 ml-6 inline-block w-full py-2 text-left font-medium text-indigo-600 md:mx-2 md:ml-0 md:w-auto md:px-0 md:text-center lg:mx-3"
            >
              ホーム
            </a>
            <a
              href="#"
              className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
            >
              記録
            </a>
            <a
              href="#"
              className="mx-0 inline-block w-full py-2 text-left font-medium text-gray-700 hover:text-indigo-600 md:mx-2 md:w-auto md:px-0 md:text-center lg:mx-3"
            >
              設定
            </a>
          </div>
          <div className="flex w-full flex-col items-start justify-end pt-4 md:w-1/3 md:flex-row md:items-center md:py-0">
            <a href="#" className="mr-0 w-full px-3 py-2 text-gray-700 md:mr-2 md:w-auto lg:mr-3">
              ログイン
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center bg-indigo-600 px-6 py-3 text-sm font-medium leading-4 text-white hover:bg-indigo-500 focus:outline-none focus:ring-0 focus:ring-indigo-600 focus:ring-offset-2 md:focus:ring-2 md:w-auto md:rounded-full md:px-3 lg:px-5"
            >
              新規登録
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
