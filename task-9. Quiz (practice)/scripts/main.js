import quizData from "./quiz-data.js";

const form = document.querySelector(".js-quiz-form");

// <section>
//   <h3>1. Текст вопроса</h3>

//   <ol>
//     <li>
//       <label>
//         <input type="radio" name="" value="" />
//         Ответ 1
//       </label>
//     </li>
//     <li>
//       <label>
//         <input type="radio" name="" value="" />
//         Ответ 2
//       </label>
//     </li>
//   </ol>
// </section>;
const section = createQuestion(quizData);

form.prepend(section);

function createQuestion({ title, questions }) {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  h3.textContent = title;
  const ol = document.createElement("ol");
  // const li = createQuestionItem(questions[0].question, questions[0].choices[0]);
  let lis = [];

  questions.map(function (question) {
    lis.push(createQuestionItem(question.question, question.choices));
  });

  //Submit
  form.addEventListener("submit", handleSubmitWithFormData);

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const elements = event.currentTarget;
  //   console.log(form.elements.quiz.value);
  // }

  function handleSubmitWithFormData(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    // for (const entry of formData.entries()) {
    //   console.log(entry);
    // }
    formData.forEach((value, name) => {
      console.log(value);

      //comparing
      questions.map(function (question) {
        for (let i = 0; i < lis.length; i++) {
          for (let child of lis[i].children) {
            if (value == question.answer) {
              console.log("hooray!!!");
            }
          }
        }
      });
    });
  }
  //Submit

  ol.append(...lis);

  section.append(h3, ol);
  return section;
}

function createQuestionItem(question, choices) {
  const li = document.createElement("li");
  const questionTitle = document.createTextNode(question);
  li.appendChild(questionTitle);

  //end li
  choices.map(function (choice) {
    const choiceLabel = createAnswer(choice);
    li.append(choiceLabel);
  });

  for (let key in choices) {
    li.children[key].firstChild.value = Number(key) + 1;
    // console.log(li.children[key].firstChild.value);
  }

  for (let child of li.children) {
    for (let i = 0; i < li.children.length; i++) {
      // console.log(i);
      child.firstChild.name = i;
      continue;
    }
    // console.log(child.firstChild);
  }

  return li;
}

function createAnswer(answer) {
  const label = document.createElement("label");

  const input = document.createElement("input");
  input.setAttribute("type", "radio");
  input.setAttribute("class", "radio");
  input.setAttribute("name", "quiz");
  // input.setAttribute("value", 8);

  const answerSubTitle = document.createTextNode(answer);
  label.appendChild(input);
  label.appendChild(answerSubTitle);

  return label;
}

//Submit
// form.addEventListener("submit", handleSubmitWithFormData);

// // function handleSubmit(event) {
// //   event.preventDefault();

// //   const elements = event.currentTarget;
// //   console.log(form.elements.quiz.value);
// // }

// function handleSubmitWithFormData(event) {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);
//   // for (const entry of formData.entries()) {
//   //   console.log(entry);
//   // }
//   formData.forEach((value, name) => {
//     console.log(value);
//     return value;
//   });
// }
