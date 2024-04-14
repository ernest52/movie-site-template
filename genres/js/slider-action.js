const imageAction = document.querySelector("img#action");
const actionLink = document.querySelector("#action-link");
const description = document.querySelector("#action-description");
const left = document.querySelector("[data-key='left']");
const right = document.querySelector("[data-key='right']");
let counter = 0;
const action = [
  {
    img: "../images/equalizer--small.jpg",
    href: "../../top_movies/equalizer.html",
    description:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends protector by taking on the mafia.",
  },
  {
    img: "../images/gran_turismo--small.jpg",
    href: "../top_movies/gran__turismo.html",
    description:
      "The ultimate wish fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
  },
  {
    img: "../images/indiana___jones--small.jpg",
    href: "../top_movies/indiana_jones.html",
    description:
      "Finding himself in a new era, approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn’t fall into the wrong hands.",
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
