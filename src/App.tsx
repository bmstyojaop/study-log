import React, { FC } from "react"
import { Header } from "./components/Header"
import { Card } from "./components/Card"

const icons = [
  { icon: "/assets/img/testicon1.jpg" },
  { icon: "/assets/img/testicon2.jpg" },
  { icon: "/assets/img/testicon3.jpg" },
  { icon: "/assets/img/testicon4.jpg" },
  { icon: "/assets/img/testicon5.jpg" },
  { icon: "/assets/img/testicon6.jpg" },
  { icon: "/assets/img/testicon7.jpg" },
  { icon: "/assets/img/testicon8.jpg" },
  { icon: "/assets/img/testicon9.jpg" },
  { icon: "/assets/img/testicon10.jpg" },
  { icon: "/assets/img/testicon1.jpg" },
  { icon: "/assets/img/testicon2.jpg" },
  { icon: "/assets/img/testicon3.jpg" },
  { icon: "/assets/img/testicon4.jpg" },
  { icon: "/assets/img/testicon5.jpg" },
  { icon: "/assets/img/testicon6.jpg" },
  { icon: "/assets/img/testicon7.jpg" },
  { icon: "/assets/img/testicon8.jpg" },
  { icon: "/assets/img/testicon9.jpg" },
  { icon: "/assets/img/testicon10.jpg" },
  { icon: "/assets/img/testicon1.jpg" },
  { icon: "/assets/img/testicon2.jpg" },
  { icon: "/assets/img/testicon3.jpg" },
  { icon: "/assets/img/testicon4.jpg" },
  { icon: "/assets/img/testicon5.jpg" },
  { icon: "/assets/img/testicon6.jpg" },
  { icon: "/assets/img/testicon7.jpg" },
  { icon: "/assets/img/testicon8.jpg" },
  { icon: "/assets/img/testicon9.jpg" },
  { icon: "/assets/img/testicon10.jpg" },
]

const App: FC = () => {
  return (
    <div>
      <Header />
      <main
        className="bg-gray-200 w-screen 
        h-screen 
        flex 
        justify-center
      "
      >
        <div className="container flex flex-col items-center pt-4 md:px-4 md:flex-row md:items-start md:justify-around  md:flex-wrap">
          {icons.map((icon) => (
            <Card key={icon.icon} iconPath={icon.icon} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
