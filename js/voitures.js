//imports
import {voituresInitiales} from "./data.js";
import {composant_voiture,afficher} from "./front.js"

//input saisie
/*VÉHICULE*/
const ajoute_input_marque = document.getElementById("marque");
const ajoute_input_modele = document.getElementById("modele");
const ajoute_input_imm = document.getElementById("immatriculation");
const ajoute_input_category = document.getElementById("categorie");
const ajoute_input_dhparjours = document.getElementById("prix-jour");
const ajoute_input_status = document.getElementById("statut");
const ajoute_button_ajouter_voiture = document.getElementById("bouton-enregistrer");
/*INVENTAIRE*/
const filtre_input_recherche_voiture = document.getElementById("recherche");
const filtre_input_status = document.getElementById("filtre-statut");
const filtre_input_category = document.getElementById("filtre-categorie");
const filtre_input_trie = document.getElementById("tri-prix");
const filtre_button_reinitialiser = document.getElementById("reinitialiser-filtres");

//array of input html elements
export const VEHICULE_INPUTS = [
    ajoute_input_marque,
    ajoute_input_modele,
    ajoute_input_imm,
    ajoute_input_category,
    ajoute_input_dhparjours,
    ajoute_input_status,
];
//array of input html elements
const INVENTAIRE_INPUTS = [
    filtre_input_recherche_voiture,
    filtre_input_status,
    filtre_input_category,
    filtre_input_trie,
];

// show default
afficher();

//clear inputs
export function clear_inputs(HTML_INPUTS) {
    for(let i = 0;i < HTML_INPUTS.length;i++){
        if(HTML_INPUTS[i].id == "statut"){
            continue;
        }
        HTML_INPUTS[i].value = "";
    }
}
//check inputs
export function checks_inputs_valide(HTML_INPUTS) {
    for(let i = 0;i < HTML_INPUTS.length;i++){
        console.log(HTML_INPUTS[i].id);
        if(HTML_INPUTS[i].value == "") {
            alert("un des champs na pas etais saisie");
            return false;
        }
    }
}
//get inputs
export function get_inputs(HTML_INPUTS) {
    let values = [];
    for(let i = 0;i < HTML_INPUTS.length;i++) {
        values.push(HTML_INPUTS[i].value);
    }
    return values;
}
//fill inputs
export function fill_inputs(HTML_INPUTS,elements) {
    for(let i = 0; i< HTML_INPUTS.length;i++){
        HTML_INPUTS[i].value = elements[i];
    }
}

//Add car
function ajouter() {
    let voiture_inputs = get_inputs(VEHICULE_INPUTS);
    voituresInitiales.push({
        id:voituresInitiales.length + 1,
        marque:voiture_inputs[0],
        modele:voiture_inputs[1],
        immatriculation:voiture_inputs[2],
        categorie:voiture_inputs[3],
        prixJour:voiture_inputs[4] - 0,
        statut:voiture_inputs[5],
        
    });
    console.log(voituresInitiales);
}

export function supprimer(pos) {
    voituresInitiales.splice(pos,1);
}

//add cars into voituresInitiales
ajoute_button_ajouter_voiture.addEventListener("click", (e) => {
    e.preventDefault();

   if(checks_inputs_valide(VEHICULE_INPUTS) == false){
        return;
    }

    ajouter();
    afficher();
    clear_inputs(VEHICULE_INPUTS);

})
//composant_voiture("dacio","Sandero","AUTO-001","Citadine","250","Louée",2);
