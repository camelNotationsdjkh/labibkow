import Card from "@/components/card";
import styles from "styles/project.module.css";
import { useState } from "react";
import DefCard from "@/components/detailCard";


export default function ProjectPage() {
    const contentArr = [
      {
        tags: ["software", "game", "platformer"],
        imgLink: "pentoSmall.png",
        theme: "red",
        text: "lorem lipsum doremom",
      },
      {
        tags: ["software"],
        imgLink: "nikaSmall.jpg",
        theme: "green",
        text: "What is love? Baby don't hurt me no more"
      },
      {
        tags: ["software"],
        imgLink: "worldSmall.jpg",
        theme: "green",
        text: "What is love? Baby don't hurt me no more"
      },
    ];
  
    const [curKey, setKey] = useState(0);
    const [vis, setVis] = useState(false);
  
    return (
      <>
        <div
          className={styles.transparent}
          style={{
            display: vis ? "block" : "none"
          }}
        >
          <div className={styles.theCont}>
            <DefCard theDict={contentArr[curKey]} vis={vis} setVis={setVis} />
          </div>
        </div>
        <ProjHead title="Software 💻" />
        <div className={styles.flexBox}>
          <Card
            key="c1"
            keyVal={0}
            setKey={setKey}
            imgLink="pentoBig.jpg"
            text="Pento's Pledge"
            themeColor="#16a085"
            vis={vis}
            setVis={setVis}
          />

          <Card
            key="c2"
            keyVal={1}
            setKey={setKey}
            imgLink="nikaBig.jpg"
            text="Nika: Discord Confessions Bot"
            themeColor="#2980b9"
            vis={vis}
            setVis={setVis}
          />

          <Card
            key="c2"
            keyVal={2}
            setKey={setKey}
            imgLink="worldBig.jpg"
            text="WW2 Timeline Website"
            themeColor="#c0392b"
            vis={vis}
            setVis={setVis}
          />
        </div>
        <ProjHead title="Hardware 🤖" />
        <div className={styles.flexBox}>
          <Card
            key="c1"
            keyVal={0}
            setKey={setKey}
            imgLink="reflowBig.jpg"
            text="Reflow Oven Controller"
            themeColor="#2d3436"
            vis={vis}
            setVis={setVis}
          />

          <Card
            key="c2"
            keyVal={1}
            setKey={setKey}
            imgLink="robotBack.jpg"
            text="Magnetically controlled Robot"
            themeColor="#8e44ad"
            vis={vis}
            setVis={setVis}
          />
        </div>
      </>
    );
}

function ProjHead({title}){
  return (
    <>
        <div className={styles.headerContent}>
          {title}
          <div className={styles.blueLine}></div>
        </div>
    </>
  )
}

