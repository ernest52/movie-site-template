const imageAction = document.querySelector("img#action");
const actionLink = document.querySelector("#action-link");
const description = document.querySelector("#action-description");
const left = document.querySelector("[data-key='left']");
const right = document.querySelector("[data-key='right']");
let counter = 0;
const action = [
  {
    img: "../../images/insidious--small.jpg",
    href: "../../top_movies/insidious.html",
    description:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family’s dark past and a host of new and more horrifying terrors that lurk behind the red door.",
  },
  {
    img: "../../images/heart_stone--small.jpg",
    href: "../../top_movies/heart_of_stone.html",
    description:
      "Rachel Stone is an intelligence operative, the only woman who stands between her powerful, global, peacekeeping organization and the loss of its most valuable — and dangerous — asset.",
  },
  {
    img: "../../images/equalizer--small.jpg",
    href: "../../top_movies/equalizer.html",
    description:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends’ protector by taking on the mafia..",
  },
  {
    img: "../../images/mision__impossible--small.jpg",
    href: "../../top_movies/mission__impossible.html",
    description:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world’s fate at stake and dark forces from Ethan’s past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission – not even the lives of those he cares about most.",
  },
];
let stopInterval = setInterval(changeImage, 3000);
function changeByHand() {
  clearInterval(stopInterval);
  if (this.dataset.key == "left") {
    console.log(counter);
    counter = counter == 0 ? action.length - 1 : --counter;
    console.log(counter);
    stopInterval = setInterval(changeImage, 3000);
  } else if (this.dataset.key == "right") {
    console.log(counter);
    counter = counter == action.length ? 0 : ++counter;
    console.log(counter);
    stopInterval = setInterval(changeImage, 3000);
  }
}

function changeImage() {
  counter = counter == action.length ? 0 : counter;
  imageAction.src = action[counter].img;
  actionLink.href = action[counter].href;
  description.textContent = action[counter].description;
  counter++;
}

left.addEventListener("click", changeByHand);
right.addEventListener("click", changeByHand);
