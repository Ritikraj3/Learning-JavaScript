const h1 = document.querySelector("h1");
const paragraph = document.querySelector("p");

h1.style.color = "blue";

h1.style.backgroundColor = "skyblue";

const allAnc = document.querySelectorAll("a");

// for (let i = 0; i < allAnc.length; i++) {
//        allAnc[i].style.color = 'teal'
//  }

for (const Anc of allAnc) {
  // Anc.style.color = 'green'
  // Anc.style.textDecoration = 'none'
  // Anc.style.fontWeight = '700'
  // Anc.style.fontFamily = 'cursive'

  // Anc.style.cssText =
  // `color: red;
  // font-size: 18px;
  // font-family: cursive;
  // font-weight: 700;
  // text-decoration-line: none;`
  // Anc.className = 'my-link Anc-link'
  // Anc.setAttribute('class', 'Anc-link')
  Anc.classList.add("Anc-link");
  Anc.classList.remove("my-link");
  Anc.classList.toggle("wavy-link");
}

const firstLink = document.querySelector(
  "body > p:nth-child(5) > a:nth-child(2)"
);

