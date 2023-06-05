import Card from "@/components/card";
import styles from "styles/project.module.css";
import { useState } from "react";
import DefCard from "@/components/detailCard";

const contentArr = [
  {
    tags: ["platformer game", "python", "pygame"],
    imgLink: "pentoSmall.png",
    theme: "#27ae60",
    text: "Pento’s Pledge is a short platformer game I made in highschool using Pygame as my final project for my Programming 12 class. This was my first introduction to Object Oriented Programming, and boy was it a game-changer (pun intended)! While the game itself isn’t technically very impressive, it taught me a lot in terms of how game mechanics are designed, how animations are made through sprite sheets, and how we can create a world of our own and code our set of laws of Physics. <br /><br />Initially, I wanted to make a 10 level game, but time constraints only allowed me to make it to only 2 levels! I had spent more than 60+ hours making this game, and I learned the hard way that most of the time isn’t spent coding/debugging, but in designing the game and creating digital assets for. Nevertheless, I am still very proud of what I made. <br /><br />One thing I would change is to make a better .exe file. While it’s not included in my github repo, I did make one (which is what you’ll see in my game demo video under more details!)It's extremely buggy and doesn’t have a great user experience.",
    hover: "#2ecc71",
    title: "Pento's Pledge",
    btnLink: "https://github.com/camelNotationsdjkh/Pento-s-Pledge",
  },
  {
    tags: ["discord Bot", "discord.js", "javascript", "google sheets"],
    imgLink: "nikaSmall.jpg",
    theme: "#2980b9",
    text: "UBC confession's Facebook page, a historic place where students went to anonymously send in their secrets/crushes/rants, was closing down after years of operation. I couldn't let the legacy of such an integral part of UBC history die so I suggested that we create a similar confessions channel on our year's engineering channel. While the moderators and admin were receptive, they were rightfully worried about the implications of letting users send in whatever they want. The bots that were available didn't have (good) moderation features and so the idea would likely go no where — useless I made it myself. <br /> <br />So, with nothing significant to do during summer, I got to work knowing full well that I hadn't touched either Javascript or Python in over a year and had lots to learn if I wanted to make this project happen. Luckily I had so so so much help from @Elio who had experience with making Discord bots and mentored me along the way. This is definitely one of my proudest personal projects because this is the first time I ever published something that people use and actually enjoy using. It's a feeling of satisfaction that's hard to describe, and it's something that will likely stick with me as I continue on with my career!",
    hover: "#3498db",
    title: "Nika | Confession bot",
    btnLink: "https://github.com/camelNotationsdjkh/Nika-confessions",
  },
  {
    tags: ["history", "website", "javascript"],
    imgLink: "worldSmall.jpg",
    theme: "#c0392b",
    text: "This was the product of one of my assignments from History 12, where Mr. Mergens (one of my all time favourite teachers from highschool), told us to make a timeline with annotations of the 40 most important dates/events of WW2. I really wanted to impress, and rather than doing a Powerpoint presentation like most, I opted to utlize my experience in web development and make a website! With an extra X factor of it being horizontally scrolling. <br /><br />The problem was that it was much more technically challenging than I had expected, as I learned the hard way that HTML and CSS was built around vertically scrolling and as a result getting things to align perfectly was nothing short of a nightmare. And perhaps my biggest regret is that making it horizontally scrolling also makes it almost impossible to make responsive and fit onto a phone screen. Yet despite all the adversity, when I look at how beautiful the final product is I can condifidently say the 70+ hours I put into it was worth it.",
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

