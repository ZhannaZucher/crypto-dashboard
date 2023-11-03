import HeaderInfos from "./components/HeaderInfos"
import dynamic from "next/dynamic"
import Table from "./components/Table"
const GlobalChart = dynamic(() => import("./components/GlobalChart"), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        <GlobalChart />
      </header>
      <Table />
    </div>
  )
}
