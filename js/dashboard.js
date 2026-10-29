const total = document.getElementById("total");
const disponible = document.getElementById("disponible");
const louees = document.getElementById("louéees");
const maintenance = document.getElementById("maintenance");

let voitures = []
voitures = JSON.parse(localStorage.getItem("voiture"));

total.textContent = voitures.length;
disponible.textContent = voitures.filter((v) => v.statut == "Disponible").length;
louees.textContent = voitures.filter((v) => v.statut == "Louée").length;
maintenance.textContent =  voitures.filter((v) => v.statut == "En maintenance").length;




