import { useState } from "react"
import data from "../data/headData"
import info from "../data/blobInfo"
import Head from 'next/head'
import Disc from "../components/Disc"

export default function Main() {

  const [active, setActive] = useState("none");

  return (
    <div>

      <Head>
        <title>{data[active].title}</title>
        <link rel="icon" href={data[active].icon} />
      </Head>

      <Disc blobInfo={info["advice"]} current={active} setCurrent={setActive}/>
      <Disc blobInfo={info["number"]} current={active} setCurrent={setActive}/>
      <Disc blobInfo={info["norris"]} current={active} setCurrent={setActive}/>

    </div>
  )
}
