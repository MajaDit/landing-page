function getInTouch() {
  let name = prompt("What's your name?");
  let fb = prompt("Do you 'like' us on Facebook?");

  if (fb === "yes") {
    alert(`Hi ${name}! Please drop us a message via our Facebook page 😉`);
  } else {
    alert(
      `Hi ${name}! Please drop us a message on Fb and consider liking our page 😉 or email us at usthefworl@gmail.com 😊`
    );
  }
}

let contactButton = document.querySelector("button");
contactButton.addEventListener("click", getInTouch);
