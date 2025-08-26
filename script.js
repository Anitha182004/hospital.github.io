function filterHospitals() {
  let input = document.getElementById('searchBox').value.toLowerCase();
  let cards = document.getElementsByClassName('hospital-card');

  for (let i = 0; i < cards.length; i++) {
    let dept = cards[i].getAttribute('data-dept').toLowerCase();
    if (dept.includes(input) || input === "") {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}
