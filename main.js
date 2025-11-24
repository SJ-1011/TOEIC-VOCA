function setGoal() {
  const p = document.getElementById("goal");
  const goal = JSON.parse(localStorage.getItem("goal") || "[]");

  if (goal.length === 0) {
    goal.push(800);
  }

  p.textContent = `목표: ${goal}점`;
}

document.addEventListener("DOMContentLoaded", () => {
  setGoal();
});

function addWord(event) {
  event.preventDefault();
  const english = event.target.english.value.trim();
  const korean = event.target.korean.value.trim();

  const words = JSON.parse(localStorage.getItem("words") || "[]");
  words.push({ en: english, kr: korean });
  localStorage.setItem("words", JSON.stringify(words));

  event.target.reset();
}
function setQuiz() {
  const tbody = document.getElementById("quizTbody");

  const words = JSON.parse(localStorage.getItem("words") || "[]");
  if (words.length === 0) {
    alert("단어를 추가해주세요.");
    return;
  }

  tbody.innerHTML = "";
  for (i = 0; i < words.length; i++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = words[i].en;

    const tdInput = document.createElement("td");
    const input = document.createElement("input");
    input.type = "text";
    input.name = words[i].en;
    input.placeholder = "단어 뜻";

    tdInput.appendChild(input);

    const tdAndwer = document.createElement("td");
    tdAndwer.textContent = words[i].kr;
    tr.appendChild(td);
    tr.appendChild(tdInput);
    tr.appendChild(tdAndwer);

    tbody.appendChild(tr);
    // tr.innerHTML += `<td>${words[i].en}</td>`;
  }
}
function getAnswer(event) {
  event.preventDefault();

  const words = JSON.parse(localStorage.getItem("words") || "[]");

  let alertText = "";

  for (let i = 0; i < words.length; i++) {
    const en = words[i].en;
    const kr = words[i].kr;

    const userInput = event.target[en].value.trim();

    if (userInput === kr) {
      alertText += `${en} 정답, `;
    }
  }

  alert(alertText);
}
