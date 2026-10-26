//IMPORTS
import {voituresInitiales} from "./data.js"
import { supprimer,
    VEHICULE_INPUTS,
    fill_inputs,
    clear_inputs,
    get_inputs,
    checks_inputs_valide
} from "./voitures.js";

const list_voiture = document.getElementById("liste-voitures");

export function composant_voiture(marque,model,imm,categorie,prixpj,status,pos) {
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

    let button_delete = document.createElement("button");
    button_delete.className = "button button-delete";
    button_delete.textContent = "Supprimer";
    div_button_container.appendChild(button_delete);

    button_delete.addEventListener("click", (e) => {
        e.preventDefault();
        supprimer(pos),
        afficher();
    })
    button_edite.addEventListener("click", () => {
        fill_inputs(VEHICULE_INPUTS,
            [
                voituresInitiales[pos].marque,
                voituresInitiales[pos].modele,
                voituresInitiales[pos].immatriculation,
                voituresInitiales[pos].categorie,
                voituresInitiales[pos].prixJour,
                voituresInitiales[pos].statut,
            ]);
        
        let latest_inputs = get_inputs(VEHICULE_INPUTS);
        
        
        modifier(pos,latest_inputs);
        afficher();
        clear_inputs();
    });
}

function modifier(pos,latest_inputs) {
    voituresInitiales[pos].marque = latest_inputs[0];
    voituresInitiales[pos].modele = latest_inputs[1];
    voituresInitiales[pos].immatriculation = latest_inputs[2];
    voituresInitiales[pos].categorie = latest_inputs[3];
    voituresInitiales[pos].prixJour = latest_inputs[4];
    voituresInitiales[pos].statut = latest_inputs[5];
}
//tp fix edite
export function afficher() {
    list_voiture.textContent = "";
    for(let i = 0;i < voituresInitiales.length;i++){
        composant_voiture(
            voituresInitiales[i].marque,
            voituresInitiales[i].modele,
            voituresInitiales[i].immatriculation,
            voituresInitiales[i].categorie,
            voituresInitiales[i].prixJour,
            voituresInitiales[i].statut,
            i
        )
    }
}