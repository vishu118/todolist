// const add = document.getElementById('add')
// const tasks = document.getElementById('tasks')
// const input = document.getElementById('inputarea')


// add.addEventListener('click', function(){
//     let paragraph = document.createElement('p')
//     paragraph.classList.add('paragraphAdded')
//     paragraph.innerText=input.value
//     tasks.appendChild(paragraph)
//     input.value = ""
// })





// const someDiv = document.getElementById('some-div');
// console.log(someDiv)

// const customDiv = document.createElement('div');
// console.log(customDiv)

// const notesPara = document.getElementById('notes-para');

const notes = [];

/* Wrong Method
function renderNotestInParagraph() {
  for(let i = 0; i<notes.length; i++) {
    const note = notes[i];

    notesPara.innerHTML += note + "<br/>";
  }
}
*/

// console.log(ul.firstChild);
// console.log(ul.firstElementChild);
// //
// // document.title = ul.firstElementChild.innerText

// console.log(ul.lastChild);
// console.log(ul.lastElementChild); // Value?

// console.log(ul.childElementCount)
// console.log(ul.hasChildNodes())

// console.log(ul.childNodes) // Also concerns child of child
// console.log(ul.children) // Only Immediate Children

// // if(!ul.hasChildNodes()) {
// //   document.getElementById('no-notes-present').innerText = "No Notes Present"
// // }

// console.log(ul)


const btn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const ul = document.getElementById("todo-list");

function updateUnorderedList() {
  const newListItem = document.createElement("li");
  newListItem.innerText = input.value;

  ul.appendChild(newListItem);
  input.value=""
}

btn.addEventListener("click", () => {
  updateUnorderedList();
});

