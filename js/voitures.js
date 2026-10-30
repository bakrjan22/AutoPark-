//imports
import { voituresInitiales, sauvegarder_voitures } from "./data.js";
import { afficher, modifier, reset_edit_mode } from "./front.js"

//input saisie
/*VÉHICULE*/
const ajoute_input_marque = document.getElementById("marque");
const ajoute_input_modele = document.getElementById("modele");
const ajoute_input_imm = document.getElementById("immatriculation");
const ajoute_input_category = document.getElementById("categorie");
const ajoute_input_dhparjours = document.getElementById("prix-jour");
const ajoute_input_status = document.getElementById("statut");
export const ajoute_button_ajouter_voiture = document.getElementById("bouton-enregistrer");
export const voiture_id = document.getElementById("voiture-id");
const message_formulaire = document.getElementById("message-formulaire");
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
export const INVENTAIRE_INPUTS = [
    filtre_input_recherche_voiture,
    filtre_input_status,
    filtre_input_category,
    filtre_input_trie,
];

//message sous le formulaire
export function afficher_message(texte, est_erreur) {
    message_formulaire.textContent = texte;
    message_formulaire.className = est_erreur ? "feedback error" : "feedback success";
}

//clear inputs
export function clear_inputs(HTML_INPUTS) {
    for (let i = 0;i < HTML_INPUTS.length;i++){
        let erreur = document.getElementById("erreur-" + HTML_INPUTS[i].id);
        if (erreur) {
            erreur.textContent = "";
        }
        if(HTML_INPUTS[i].id == "statut"){
            continue;
        }
        HTML_INPUTS[i].value = "";
    }
}
//check inputs
export function checks_inputs_valide(HTML_INPUTS) {
    let valide = true;
    for (let i = 0; i < HTML_INPUTS.length; i++) {
        if (HTML_INPUTS[i].value.trim() === "") {
            let erreur = document.getElementById("erreur-" + HTML_INPUTS[i].id);
            if (erreur) {
                erreur.textContent = "Ce champ est obligatoire.";
            }
            valide = false;
        }
    }
    if (valide == false) {
        afficher_message("Un des champs n'a pas été saisi.", true);
    }
    return valide;
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

function immatriculation_existe(immatriculation, id_ignore) {
    for (let i = 0; i < voituresInitiales.length; i++) {
        if (voituresInitiales[i].id === id_ignore) {
            continue;
        }
        if (voituresInitiales[i].immatriculation.toLowerCase() === immatriculation.toLowerCase()) {
            return true;
        }
    }
    return false;
}

//Add car
function ajouter(voiture_inputs) {
    let nouvel_id = 0;
    for (let i = 0; i < voituresInitiales.length; i++) {
        if (voituresInitiales[i].id > nouvel_id) {
            nouvel_id = voituresInitiales[i].id;
        }
    }
    voituresInitiales.push({
        id:nouvel_id + 1,
        marque:voiture_inputs[0],
        modele:voiture_inputs[1],
        immatriculation:voiture_inputs[2],
        categorie:voiture_inputs[3],
        prixJour:voiture_inputs[4] - 0,
        statut:voiture_inputs[5],
    });
    sauvegarder_voitures();
}

export function supprimer(id) {
    for (let i = 0; i < voituresInitiales.length; i++) {
        if (voituresInitiales[i].id === id) {
            voituresInitiales.splice(i,1);
            break;
        }
    }
    sauvegarder_voitures();
}

//add cars into voituresInitiales
ajoute_button_ajouter_voiture.addEventListener("click", (e) => {
    e.preventDefault();

    if(checks_inputs_valide(VEHICULE_INPUTS) == false){
        return;
    }

    let voiture_inputs = get_inputs(VEHICULE_INPUTS);
    let id_modifie = voiture_id.value === "" ? 0 : voiture_id.value - 0;

    if (immatriculation_existe(voiture_inputs[2], id_modifie)) {
        afficher_message("Cette immatriculation est déjà utilisée.", true);
        return;
    }

    if (voiture_id.value === "") {
        ajouter(voiture_inputs);
        afficher_message("Voiture ajoutée au parc.", false);
    } else {
        modifier(id_modifie, voiture_inputs);
        reset_edit_mode();
        afficher_message("Voiture modifiée.", false);
    }

    afficher(voituresInitiales);
    clear_inputs(VEHICULE_INPUTS);

})

// show default
afficher(voituresInitiales);
