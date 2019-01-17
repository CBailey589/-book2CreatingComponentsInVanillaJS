// // **************************************************************FIRST PRACTICE EXERCISE:
// const h1 = (title, style) => {
//     return `<h1 class="${style}">${title}</h1>`
// }

// const section = (title, style) => {
//     return `<section class="bordered dashed ${style}">${title}</section>`
// }

// const aside = (title, style) => {
//     return `<aside class="${style}">${title}</aside>`
// }

// **************************************FIRST SOLUTION************
// students.forEach(studObject => {
//     let studName = studObject.name;
//     let studClass = studObject.class;
//     let studInfo = studObject.info;
//     let studScore = studObject.score;
//     const studentInnerHTMLMaker = (name, clazz, info, score) => {
//         if (score >= 60) {
//             return(`<div id="student">
//              ${h1(name, "xx-large passing")}
//              ${section(clazz, "section--padded")}
//                 ${aside(info, "pushRight")}
//               </div>`)}
//         else {
//             return(`<div id="student">
//             ${h1(name, "xx-large failing")}
//             ${section(clazz, "section--padded")}
//              ${aside(info, "pushRight")}
//         </div>`)
//         }
//     }
//     const newStudentDiv = studentInnerHTMLMaker(studName, studClass, studInfo,studScore);
//     const container = document.querySelector("#container")
//     container.innerHTML += newStudentDiv
// });


// ***************************************SECOND SOLUTION******************************
// const makeStudentDiv = () => {
//     students.forEach(studObject => {
//         let studScore = () => {
//             if(studObject.score >= 60) {
//                 return("passing");
//             } else {
//                 return("failing");
//             }
//         }
//         let thisScore = studScore();
//         const studentDivMaker = (name, clazz, info, score) => {
//             return(`<div id="student">
//             ${h1(name, score)} ${section(clazz,)} ${aside(info, )}
//             </div>`);
//         }
//         const newStudentDiv = studentDivMaker(studObject.name, studObject.class, studObject.info, thisScore)
//         const container = document.querySelector("#container")
//         container.innerHTML += newStudentDiv;
//     });
// }
// makeStudentDiv();



// // ************************************THIRD SOLUTION************************************
// const makeStudentDiv = () => {
//     students.forEach(studObject => {
//         const studScore = studObject.score >= 60 ? "passing" : "failing";
//         const studentDivMaker = (name, clazz, info, score) => {
//             return(`<div id="student">
//             ${h1(name, score)} ${section(clazz,)} ${aside(info, )}
//             </div>`);
//         }
//         const newStudentDiv = studentDivMaker(studObject.name, studObject.class, studObject.info, studScore)
//         const container = document.querySelector("#container")
//         container.innerHTML += newStudentDiv;
//     });
// }
// makeStudentDiv();


// // ****************************************************SECOND PRACTICE EXERCISE: USE REST OPERATOR

// const h1 = (...tacos) => {
//     return(`<h1 class="${tacos[1]}">${tacos[0]}</h1>`);
// }

// const section = (...tacos) => {
//     return(`<section class="bordered dashed">${tacos[0]}</section`);
// }

// const aside = (...tacos) => {
//     return(`<aside>${tacos[0]}`);
// }

// const makeStudentDiv = () => {
//     students.forEach(studObject => {
//         let studScore = studObject.score >= 60 ? "passing" : "failing";
//         let studInfo = [studObject.name, studObject.class, studObject.info, studScore];
//         const combineStrings = (studInfo) => {
//             return(`<div id="student">${h1(studInfo[0], studInfo[3])} ${section(studInfo[1])} ${aside(studInfo[2])}</div>`);
//         }
//         let newStudent = combineStrings(studInfo);
//         document.querySelector("#container").innerHTML += newStudent;
//     });
// }
// makeStudentDiv();



// //************************************************* */ THIRD PRACTICE EXERCISE: SINGLE ELEMENT FUNCTION TO GENERATE ALL HTML ELEMENTS
// const element = (...cats) => {
//     return `<${cats[0]} class="${cats[1]}">${cats[2]}</${cats[0]}>`
// };
// const makeHTML = () => {
//     students.forEach(studentObject => {
//         let passFail = studentObject.score >= 60 ? "passing" : "failing";
//         let header = element("h1", passFail, studentObject.name);
//         let section = element("section", "bordered dashed", studentObject.class);
//         let aside = element("aside", "pushRight", studentObject.info);
//         document.querySelector("#container").innerHTML += `<div id="student">${header} ${section} ${aside}</div>`
//     });
// }
// makeHTML();



// *************************************************************ADVANCED CHALLENGE: Using createElement for Components
// The learning objective of this challenge is to move away from using string templates completely, and use the methods of createElement() and appendChild() to create DOM components.

// createElement()
// JavaScript provides the document.createElement() method which creates a virtual DOM element that doesn't exist in the DOM until you add it.

// appendChild()
// The document.appendChild() method will take a virtual DOM element you created and attach it as a child element of another one.

// // EXAMPLE:
// const list = document.createElement('ul');
// const listItem = document.createElement('li');
// listItem.className = "president";
// listItem.textContent = "George Bush";
// list.appendChild(listItem);
// console.log(list);


// // ****************************************************************************FIRST SOLUTION:
// const article = document.createElement('article');
// article.id = "messages";
// const messagesArray = [
//     `Are we doing fireworks this year?`,
//     `After last year's "tree incident", should we?`,
//     `The fire fighters put it out in like a minute. Wasn't even a real fire.`,
//     `We can set them off in the street.`,
//     `Our neighbors' houses are flammable, too..`
// ];
// addElements = () => {
//     messagesArray.forEach(message => {
//         const section = document.createElement('section');
//         section.className = "message";
//         section.textContent = message;
//         article.appendChild(section);
//     });
//     console.log(article);
// }
// addElements();




// ****************************************************************************ADVANCED CHALLENGE: DOM Fragments
// createDocumentFragment()
// What you did in the previous challenge was actually an expensive way of adding those elements to the DOM. Now, it didn't cost you any extra money, but it was expensive in terms of memory and processing power. When the DOM is written to, layout is 'invalidated', and at some point needs to be reflowed.

// We can use a document fragment to reduce the processing and layout cost of constant, rapid-fire DOM updates. You can add as many components to it as you like, and then add the fragment to the DOM as a one-time operation.


// EXAMPLE:
// const fragment = document.createDocumentFragment();

// const julius = document.createElement('div');
// julius.textContent = "Julius Caesar";
// fragment.appendChild(julius);

// const augustus = document.createElement('div');
// augustus.textContent = "Augustus Caesar";
// fragment.appendChild(augustus);

// const aurelius = document.createElement('div')
// aurelius.textContent = "Marcus Aurelius"
// fragment.appendChild(aurelius)

// document.querySelector("#emperorList").appendChild(fragment)


// ************************************************************FIRST SOLUTION ******************************************
const article = document.createElement('article');
article.id = "messages";

const fragment = document.createDocumentFragment();

const messagesArray = [
    `Are we doing fireworks this year?`,
    `After last year's "tree incident", should we?`,
    `The fire fighters put it out in like a minute. Wasn't even a real fire.`,
    `We can set them off in the street.`,
    `Our neighbors' houses are flammable, too..`
];
addElements = () => {
    messagesArray.forEach(message => {
        const section = document.createElement('section');
        section.className = "message";
        section.textContent = message;
        fragment.appendChild(section);
    });
    article.appendChild(fragment);
    console.log(article);
}
addElements();





