const text1 = "A picture of me at the Beach. The sun was in my eyes a bit in the photo, which is why I am squinting!";
const defaultT = [["profile2.png", text1]];

class dictComp{
    constructor(theStrArr, imgArr = defaultT){
        this.theStrArr = theStrArr;
        this.imgArr = imgArr;
    }
}

//Creating the dictComp
const comp1 = new dictComp(
    ['Hello there! 👋', 'I am Labib Kowsar, a third year Electrical engineering⚡student at the University of British Columbia (Vancouver) and this is my personal website! Here you’ll find some of the projects, my most recent resumes, and ways to get in touch with me. ^2500', 'If you’re still on this page, you’re probably wondering what’s going on at the bottom of this page! Well, I have noticed that with most portfolio sites, it might get tiring to read blocks of text. So this is my attempt to create a more personalized experience that mimics a text message conversation you would have with me in real life. ^2500', 'While it’s still far from an actual conversation, I hope it lets you get to know me in a more interactive way. Of course, I realize this isn’t everyone’s cup of tea, so I kept the other pages (projects, resume) with a more traditional approach. As they say: don’t fix what ain’t broke! Either way, thanks for clicking on my website, and I hope you enjoy your stay!']
);

const comp2 = new dictComp(
    ["My favourite color is blue", "My favourite color is red"],
)

const comp3 = new dictComp(
    ["I want to make a massive garden"],
    
)


const comp4 = new dictComp(
    ["I have a weak spot for ridiculously fast animals. Which is why the <b>peregrine falcon</b> and <b>cheetah</b> are my absolute favorite animals. It baffles me how evolutionary fine-tuned these two animals are to achieve top speeds of 390 km/hr and 100 km/hr respectively. ^1000", "Octopuses are a close second — I am fascinated by how smart these nine brained (yes you read that right, nine brained!) creatures are. Not to mention how some octopuses can change the color+texture of their skin to almost perfectly mimic its environment. They are just so cool! ^1000"],
    [
        ["pere.jpg", "Fastest animal in the world: the peregrine falcon"],
        ["cheetah.jpg", "Fastest land animals in the world: the cheetah"]
    ]
)


const comp5 = new dictComp(
    ["None lmao"],
)

const comp6 = new dictComp(
    ["Wonder"],
    
)

const comp7 = new dictComp(
    ["No I don't have any pets rn but I did at a time have pet fish. A whole miniature ecosystem in my living when I was 7 years old. But no one gave me the memo that it's possible to over feed them.", "So one fateful morning, I woke to discover that all 12 or so fish in the tank had died. They all recieved proper burials in my backyard."],
    
)

const comp8 = new dictComp(
    ["I study at the University of British Columbia, Vancouver Campus. I am currenty enrolled in my third year as in the Electrical Engineering program as a co-op student.<br><br> I expect my degree to take 5 years to finish with co-op, so I am set to graduate in 2025-26! "],
    
)

const comp9 = new dictComp(
    ["My favourite class? Oh that's a tough one, since UBC engineering has many challenging, but thought-provoking classes that delve deep into the fundamentals of engineering. I have genuienly found every meaningful (abeit quite tough at times!), so it's diffult to name a single favourite.<br><br> Instead, here's my top 3: <ul><li><b>Math 256: Differential Equations</b></li><li><b>Elec 221: Signals and Systems</b></li><li><b>CPSC 259: Computer Science for Electrical Engineering</b></li></ul>"],
    defaultT,
)

const comp10 = new dictComp(
    ["My software skills include. Lmao none, I just use chatGPT. Check out <a href='/projects'>Projects for more details</a>"],
    defaultT
)




// Exporting the actual dict
export const dict = {
    "Who am I?": comp1,
    "Favourite Color": comp2,
    "Future goals": comp3,
    "Favourite animal": comp4,
    "Workplace experience": comp5,
    "Best book I've read": comp6,
    "Any Pets?": comp7,
    "Where do you study?": comp8,
    "Favourite classes": comp9,
    "Software skills": comp10,
    "Hardware skills": comp10,
    "Your proudest achievement?": comp10,
    "Favourite show": comp10,
    "Did you always know you wanted to do engineering?": comp10,
    "Hobbies?": comp10,
    "How can I contact you?": comp10,
    "Favourite thing about UBC?": comp10,
    "Favourite music": comp10,
}