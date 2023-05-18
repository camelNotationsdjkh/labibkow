import Card from "@/components/card";
import styles from "styles/project.module.css";
import { useState } from "react";
import DefCard from "@/components/detailCard";


export default function ProjectPage() {
    const contentArr = [
      {
        tags: ["software", "game", "platformer"],
        imgLink: "pere.jpg",
        theme: "green",
        text: "lorem lipsum doremom"
      },
      {
        tags: ["software"],
        imgLink: "pere.jpg",
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
        <div className={styles.flexBox}>
          <Card
            key="c1"
            keyVal={0}
            setKey={setKey}
            imgLink="pere.jpg"
            text="Lmao"
            themeColor="green"
            vis={vis}
            setVis={setVis}
          />

          <Card
            key="c2"
            keyVal={1}
            setKey={setKey}
            imgLink="pere.jpg"
            text="Lmao"
            themeColor="green"
            vis={vis}
            setVis={setVis}
          />
        </div>
      </>
    );
}

