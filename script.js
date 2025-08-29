//Variables & Conditionals
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("conditional-output").textContent = "You are an adult!";
  } else {
    document.getElementById("conditional-output").textContent = "You are under 18.";
  }
});

//Functions

// Function to calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Function to format result
function displayResult(result) {
  document.getElementById("sumResult").textContent = "Result: " + result;
}

// Attach event to button
document.getElementById("sumBtn").addEventListener("click", () => {
  const result = calculateSum(5, 7);
  displayResult(result);
});

//Loops
document.getElementById("loopBtn").addEventListener("click", () => {
  const list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear list first

  // Countdown using a for loop
  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  // Add "Go!" at the end
  const li = document.createElement("li");
  li.textContent = "Go!";
  list.appendChild(li);
});



// Part 4: DOM Manipulation


// Toggle highlight
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Add dynamic list items
document.getElementById("addItemBtn").addEventListener("click", () => {
  const ul = document.getElementById("dynamicList");
  const li = document.createElement("li");
  li.textContent = "New item " + (ul.children.length + 1);
  ul.appendChild(li);
});
