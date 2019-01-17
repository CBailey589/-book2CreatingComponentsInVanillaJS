// // FIRST PRACTICE EXERCISE:
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


// // SECOND PRACTICE EXERCISE: USE REST OPERATOR

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



// THIRD PRACTICE EXERCISE: SINGLE ELEMENT FUNCTION TO GENERATE ALL HTML ELEMENTS
const element = (...cats) => {
    return `<${cats[0]} class="${cats[1]}">${cats[2]}</${cats[0]}>`
};
const makeHTML = () => {
    students.forEach(studentObject => {
        let passFail = studentObject.score >= 60 ? "passing" : "failing";
        let header = element("h1", passFail, studentObject.name);
        let section = element("section", "bordered dashed", studentObject.class);
        let aside = element("aside", "pushRight", studentObject.info);
        document.querySelector("#container").innerHTML += `<div id="student">${header} ${section} ${aside}</div>`
    });
}
makeHTML();





