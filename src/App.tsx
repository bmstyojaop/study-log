import React, { FC } from "react"
import { Header } from "./components/Header"
import { Card } from "./components/Card"

const App: FC = () => {
  return (
    <div>
      <Header />
      <main className="bg-gray-200 w-screen h-screen flex justify-center">
        <div className="container flex flex-col items-center pt-4 md:flex-row md:items-start md:justify-around md:px-4 md:flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  )
}

export default App
