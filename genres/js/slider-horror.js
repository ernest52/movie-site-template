const imageAction = document.querySelector("img#action");
const actionLink = document.querySelector("#action-link");
const description = document.querySelector("#action-description");
const left = document.querySelector("[data-key='left']");
const right = document.querySelector("[data-key='right']");
let counter = 0;
const action = [
  {
    img: "../../images/demeter--small.jpg",
    href: "../../top_movies/demeter.html",
    description:
      "The crew of the merchant ship Demeter attempts to survive the ocean voyage from Carpathia to London as they are stalked each night by a merciless presence onboard the ship.",
  },
  {
    img: "../../images/insidious--small.jpg",
    href: "../../top_movies/insidious.html",
    description:
      "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family’s dark past and a host of new and more horrifying terrors that lurk behind the red door.",
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
