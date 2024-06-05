const superheroNames = ["Batman!", "Superman!", "Wonder Woman!", "Spider-Man!", "Iron Man!"];
let index = 0;

function typeWriter() {
  const name = superheroNames[index];
  const nameLength = name.length;
  let i = 0;
  const speed = 100; // Adjust typing speed as needed

  function type() {
    if (i < nameLength) {
      document.getElementById("superhero-name").textContent += name.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 1000); // Wait for 1 second after typing is complete
    }
  }

  function erase() {
    if (i >= 0) {
      const text = name.substring(0, i);
      document.getElementById("superhero-name").textContent = text;
      i--;
      setTimeout(erase, speed);
    } else {
      index = (index + 1) % superheroNames.length; // Move to the next superhero name
      setTimeout(typeWriter, 500); // Wait for 0.5 second before typing the next name
    }
  }

  type();
}

typeWriter();

// for type of classes
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const container1 = document.getElementById("type-container-1");
const container2 = document.getElementById("type-container-2");

btn1.addEventListener("click", () => {
  container2.classList.add("d-none");
  btn1.classList.add("active-btn");
  btn2.classList.remove("active-btn");
  container1.classList.remove("d-none");
});

btn2.addEventListener("click", () => {
  container1.classList.add("d-none");
  btn2.classList.add("active-btn");
  btn1.classList.remove("active-btn");
  container2.classList.remove("d-none");
});