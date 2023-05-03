class dictComp{
    constructor(theStrArr, imgArr){
        this.theStrArr = theStrArr;
        this.imgArr = imgArr;
    }
}

//Creating the dictComp
const comp1 = new dictComp(
    ['Hello, world!', 'Welcome to my website 🐪 !', 
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eveniet eligendi sapiente ipsa dolorum sequi, doloremque alias ipsam tempore? Consectetur aliquid, dolores eius repudiandae quasi possimus amet velit a neque!"],
    []
);

const comp2 = new dictComp(
    ["My favourite color is blue", "My favourite color is red"],
    []
)

const comp3 = new dictComp(
    ["I want to make a massive garden"],
    []
)


const comp4 = new dictComp(
    ["My favourite animal is the pericon falcon"],
    []
)


const comp5 = new dictComp(
    ["None lmao"],
    []
)



// Exporting the actual dict
export const dict = {
    "Who am I?": comp1,
    "Favourite Color": comp2,
    "Future goals": comp3,
    "Favourite animal": comp4,
    "Workplace experience": comp5,
}