import { voituresInitiales } from "./data.js";

const total = document.getElementById("total");
const disponible = document.getElementById("disponible");
const louees = document.getElementById("louéees");
const maintenance = document.getElementById("maintenance");

total.textContent = voituresInitiales.length;
disponible.textContent = voituresInitiales.filter((v) => v.statut == "Disponible").length;
louees.textContent = voituresInitiales.filter((v) => v.statut == "Louée").length;
maintenance.textContent = voituresInitiales.filter((v) => v.statut == "En maintenance").length;
