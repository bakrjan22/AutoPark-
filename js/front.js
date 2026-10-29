//IMPORTS
import { voituresInitiales } from "./data.js"
import {
    supprimer,
    VEHICULE_INPUTS,
    fill_inputs,
    clear_inputs,
    get_inputs,
    checks_inputs_valide,
    ajoute_button_ajouter_voiture,
    INVENTAIRE_INPUTS
} from "./voitures.js";

const filtre_input_recherche_voiture = document.getElementById("recherche");
const filtre_input_status = document.getElementById("filtre-statut");
const filtre_input_category = document.getElementById("filtre-categorie");
const filtre_input_trie = document.getElementById("tri-prix");
const filtre_button_reinitialiser = document.getElementById("reinitialiser-filtres");


const list_voiture = document.getElementById("liste-voitures");
export let button_edite_target = ""; // "" = ajoute; !"" toggle modifier
export let target_object = -1;

let sortedVoitures = [];

export function composant_voiture(marque, model, imm, categorie, prixpj, status, pos) {
    let tr_voiture_container = document.createElement("tr");
    list_voiture.appendChild(tr_voiture_container);
    tr_voiture_container.className = "customjs";

    let td_marque_container = document.createElement("td");
    tr_voiture_container.appendChild(td_marque_container);

    let strong_marque_text = document.createElement("strong");
    strong_marque_text.textContent = marque;
    td_marque_container.appendChild(strong_marque_text);

    let td_model_text = document.createElement("td");
    td_model_text.textContent = model;
    tr_voiture_container.appendChild(td_model_text);

    let td_imm_container = document.createElement("td");
    let span_imm_text = document.createElement("span");
    span_imm_text.textContent = imm;
    span_imm_text.className = "registration";
    td_imm_container.appendChild(span_imm_text);
    tr_voiture_container.appendChild(td_imm_container);

    let td_category_text = document.createElement("td");
    td_category_text.textContent = categorie;
    tr_voiture_container.appendChild(td_category_text);

    let td_price_container = document.createElement("td");
    td_price_container.className = "price";
    tr_voiture_container.appendChild(td_price_container);
    td_price_container.textContent = prixpj + " ";

    let span_dhpjtext = document.createElement("span");
    span_dhpjtext.textContent = "DH / jour";
    td_price_container.appendChild(span_dhpjtext);

    let td_status = document.createElement("td");
    tr_voiture_container.appendChild(td_status);

    let span_status_text = document.createElement("span");
    td_status.appendChild(span_status_text);
    span_status_text.textContent = status;
    switch (status) {
        case "Disponible": {
            span_status_text.className = "badge badge-disponible";
            break;
        };
        case "Louée": {
            span_status_text.className = "badge badge-louee";
            break;
        };
        case "En maintenance": {
            span_status_text.className = "badge badge-maintenance";
            break;
        };
    }

    let td_button_container = document.createElement("td");
    tr_voiture_container.appendChild(td_button_container);

    let div_button_container = document.createElement("div")
    div_button_container.className = "row-actions";
    td_button_container.appendChild(div_button_container);

    let button_edite = document.createElement("button");
    button_edite.className = "button button-edit";
    div_button_container.appendChild(button_edite);
    button_edite.textContent = "Modifier";
    button_edite.id = String("button_edit" + pos);

    let button_delete = document.createElement("button");
    button_delete.className = "button button-delete";
    button_delete.textContent = "Supprimer";
    div_button_container.appendChild(button_delete);

    button_delete.addEventListener("click", (e) => {
        e.preventDefault();
        supprimer(pos),
        afficher(voituresInitiales);
    })

    button_edite.addEventListener("click", () => {
        button_edite.textContent = "Starting";
        button_edite_target = "button_edit" + pos;

        let array_target = [{}];
        array_target = voituresInitiales;

        ajoute_button_ajouter_voiture.textContent = "Modifier";
        for (let i = 0; i < array_target.length; i++) {
            let button_edite_element = document.getElementById("button_edit" + pos);
            if (button_edite_target == button_edite_element.id) {
                button_edite_element.textContent = "Annuler";
            } else {
                button_edite_element.textContent = "Modifier";
            }
        }
        fill_inputs(VEHICULE_INPUTS,
            [
                voituresInitiales[pos].marque,
                voituresInitiales[pos].modele,
                voituresInitiales[pos].immatriculation,
                voituresInitiales[pos].categorie,
                voituresInitiales[pos].prixJour,
                voituresInitiales[pos].statut,
            ]);
        target_object = pos;

    });
}

export function modifier(pos, latest_inputs) {
    console.log(voituresInitiales);
    let target_array = [];

    voituresInitiales[pos].marque = latest_inputs[0];
    voituresInitiales[pos].modele = latest_inputs[1];
    voituresInitiales[pos].immatriculation = latest_inputs[2];
    voituresInitiales[pos].categorie = latest_inputs[3];
    voituresInitiales[pos].prixJour = latest_inputs[4];
    voituresInitiales[pos].statut = latest_inputs[5];
}
//json to string : localStorage.setItem("voiture",String(JSON.stringify(voituresInitiales)));
//string to json : JSON.parse(localStorage.getItem("voiture"));

// if(localStorage.getItem("voiture")){
//     afficher(JSON.parse(localStorage.getItem("voiture")));
// }else{
//     localStorage.setItem("voiture",String(JSON.stringify(voituresInitiales)));
//      afficher(voituresInitiales);
// }

afficher(voituresInitiales);



export function afficher(voiture_array) {
    list_voiture.textContent = "";
    
    for (let i = 0; i < voiture_array.length; i++) {
        composant_voiture(
            voiture_array[i].marque,
            voiture_array[i].modele,
            voiture_array[i].immatriculation,
            voiture_array[i].categorie,
            voiture_array[i].prixJour,
            voiture_array[i].statut,
            i
        )
    }
    console.log(voiture_array);
}

//for sorting
let voiture_sorted = [];
function check_write(HTML_INPUTS) {
    for (let i = 0; i < HTML_INPUTS.length; i++) {
        if (HTML_INPUTS[i].value != "") {
            return true;
        }
    }
    return false
}
filtre_button_reinitialiser.addEventListener('click', () => {
    clear_inputs(INVENTAIRE_INPUTS);
    afficher(voituresInitiales);
})
let filter_values = {
    recherche: "",
    status: "",
    categorie: "",
    prix: "",
};

function get_reel_time_filter_values() {
    filtre_input_recherche_voiture.addEventListener("keyup", () => {
        filter_values.recherche = filtre_input_recherche_voiture.value;
        sorting_process();
    })
    filtre_input_status.addEventListener("change", () => {
        filter_values.status = filtre_input_status.value;
        sorting_process();
    })
    filtre_input_category.addEventListener("change", () => {
        filter_values.categorie = filtre_input_category.value;
        sorting_process();
    })
    filtre_input_trie.addEventListener("change", () => {
        filter_values.prix = filtre_input_trie.value;
        sorting_process();
    })
}
get_reel_time_filter_values();

function sort_by_price(voiture_array,type) {
    let new_array = voiture_array;
    if(type === "dec"){
        return new_array.sort((v1,v2) => (v2.prixJour - v1.prixJour));
    }else {
        return new_array.sort((v1,v2) => (v1.prixJour - v2.prixJour));
    }
}

function start_sort(voiture_array) {
    let res = voiture_array;

    if(filter_values.status !== "") {
        res = res.filter(voiture => {
            return voiture.statut === filter_values.status;
        })
    }
    
    if(filter_values.recherche !== "") {
        res = res.filter(voiture => {
            return voiture.marque.toLowerCase().includes(filter_values.recherche.toLowerCase());
        })
    }

    if(filter_values.categorie !== "") {
        res = res.filter(voiture => {
            return voiture.categorie.toLowerCase().includes(filter_values.categorie.toLowerCase());
        })
    }
     if(filtre_input_trie.value == "croissant"){
        res = sort_by_price(res,"c");
     }else
     {
        res = sort_by_price(res,"dec");
     }
    console.log(filtre_input_trie.value);
    
    return res;
}

export function sorting_process() {
    if (check_write(INVENTAIRE_INPUTS)) {
        voiture_sorted = [];
        voiture_sorted = voituresInitiales;
        voiture_sorted = start_sort(voiture_sorted);
        afficher(voiture_sorted);
        return;
    } else {
        afficher(voituresInitiales);
    }
    voiture_sorted = [];
}
