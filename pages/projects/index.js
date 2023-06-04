import Card from "@/components/card";
import styles from "styles/project.module.css";
import { useState } from "react";
import DefCard from "@/components/detailCard";

const contentArr = [
  {
    tags: ["platformer game", "python", "pygame"],
    imgLink: "pentoSmall.png",
    theme: "#27ae60",
    text: "lorem lipsum doremom",
    hover: "#2ecc71",
    title: "Pento's Pledge",
    btnLink: "https://github.com/camelNotationsdjkh/Pento-s-Pledge",
  },
  {
    tags: ["discord Bot", "discord.js", "javascript", "google sheets"],
    imgLink: "nikaSmall.jpg",
    theme: "#2980b9",
    text: "What is love? Baby don't hurt me no more",
    hover: "#3498db",
    title: "Nika | Confession bot",
    btnLink: "https://github.com/camelNotationsdjkh/Nika-confessions",
  },
  {
    tags: ["history", "website", "javascript"],
    imgLink: "worldSmall.jpg",
    theme: "#c0392b",
    text: "What is love? Baby don't hurt me no more",
    hover: "#e74c3c",
    title: "WW2 - The War to end all Wars - Timeline",
    btnLink: "https://github.com/camelNotationsdjkh/WW2-timeline",
  },
  {
    tags: ["assembly"],
    imgLink: "reflowSmall.jpg",
    theme: "#2c3e50",
    text: "What is love? Baby don't hurt me no more",
    hover: "#34495e",
    title: "Pento's Pledge",
    btnLink: "https://github.com/camelNotationsdjkh/Pento-s-Pledge",
  },
  {
    tags: ["C", "EFM8 & STM32 microcontrollers"],
    imgLink: "magSmall.jpg",
    theme: "#8e44ad",
    text: "What is love? Baby don't hurt me no more",
    hover: "#9b59b6",
    title: "Pento's Pledge",
    btnLink: "https://github.com/camelNotationsdjkh/Pento-s-Pledge",
  },
];


export default function ProjectPage() {
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
            key="c3"
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
            key="d1"
            keyVal={3}
            setKey={setKey}
            imgLink="reflowBig.jpg"
            text="Reflow Oven Controller"
            themeColor="#2d3436"
            vis={vis}
            setVis={setVis}
          />

          <Card
            key="d2"
            keyVal={4}
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

