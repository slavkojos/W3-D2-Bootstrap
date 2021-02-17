function countAllTravels() {
  const destinations = document.querySelectorAll("#destinations-row h5");
  const lastminuteDeals = document.querySelectorAll(
    "#last-minute-row .card .card-body h4"
  );
  const welcomeSummerDeals = document.querySelectorAll(
    "#welcome-summer-row h5"
  );
  const count =
    destinations.length + lastminuteDeals.length + welcomeSummerDeals.length;
  const travelsCount = document.createElement("div");
  const mainContainer = document.getElementById("count-container");
  mainContainer.appendChild(travelsCount);
  travelsCount.classList.add("alert", "alert-primary");
  travelsCount.setAttribute("role", "alert");
  travelsCount.innerText = `We currently have ${count} destinations in our offer`;
}

window.onload = countAllTravels();

function addBadge() {
  const summerRow = document.querySelectorAll("#welcome-summer-row div h5");
  for (let i = 0; i < summerRow.length; i++) {
    const hotBadge = document.createElement("span");
    summerRow[i].appendChild(hotBadge);
    hotBadge.classList.add("badge", "badge-danger", "mx-2");
    hotBadge.innerText = "HOT";
  }
}
addBadge();

function deleteAllCards() {
  const lastminuteCards = document.querySelectorAll("#last-minute-row .card");
  for (let i = 0; i < lastminuteCards.length; i++) {
    console.log(lastminuteCards[i]);
    lastminuteCards[i].classList.add("d-none");
  }
}
//deleteAllCards();
