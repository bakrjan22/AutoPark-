/*
checkout data example :
    let checkout_data = {
        voiture:"Dacia Sandero",
        prix_voiture:"Citadine · 250 MAD / jour",
        date:"10 → 12 novembre 2026",
        includes_date:"3 jours · dates incluses",

        produit:[
            ["Véhicule · 3 × 250 MAD","750 MAD"],
            ["Récupération", "Gratuite"],
        ],

        totale:[
            ["Total estimé","Gratuit"],
        ],
    }
*/

let voitures = JSON.parse(localStorage.getItem("voiture"));
let checkout_data = {
    voiture: "",
    prix_voiture: "",
    date: "",
    includes_date: "",

    produit: [
        [],
        [],
    ],

    totale: [
        [],
    ],
};

let config = {
    modesRecuperation: [
        { id: "agence", nom: "A l'agence", fraisFixes: 0 },
        { id: "aeroport", nom: "A l'aeroport", fraisFixes: 150 },
        { id: "adresse", nom: "A une adresse", fraisFixes: 100 },
    ],
    options: [
        { id: "siegeBebe", nom: "Siège bébé", prixParJour: 30 },
        {id: "conducteurSupplementaire", nom: "Conducteur supplémentaire", prixParJour: 200,},
    ],
}

let scope_step = 0;

let btn_next = document.getElementById("btn-next");
let btn_previous = document.getElementById("btn-restart");

function update_steps() {
  for (let i = 0; i < 4; i++) {
    const element = document.getElementById("step" + i);
    const rond_div = document.getElementById("expicon" + i);
    if (i < scope_step) {
      rond_div.innerHTML = '<i class="fa-solid fa-check" style="color:#fff;"></i>';
      rond_div.style.background = "#2855d7";
      element.style.color = "#697C94";
    } else if (i === scope_step) {
      rond_div.textContent = i + 1;
      rond_div.style.background = "#2855d7";
      element.style.color = "#2852E3";
    } else {
      rond_div.textContent = i + 1;
      rond_div.style.background = "#697C94";
      element.style.color = "#697C94";
    }
  }
}
function next_step() {
  if (scope_step < 3) {
    scope_step++;
    update_steps();
  }
}

function composant_checkout(data) {
    let checkout_block = document.querySelector(".checkout-block");
    checkout_block.textContent = "";

    let div_card = document.createElement("div");
    div_card.className = "recut-card";
    checkout_block.appendChild(div_card);

    let p_titre_block = document.createElement("p");
    p_titre_block.className = "block_title";
    p_titre_block.textContent = "VOTRE LOCATION";
    div_card.appendChild(p_titre_block);

    let h2_voiture = document.createElement("h2");
    h2_voiture.className = "cc-title";
    h2_voiture.textContent = data.voiture;
    div_card.appendChild(h2_voiture);

    let p_prix_voiture = document.createElement("p");
    p_prix_voiture.className = "cc-sub";
    p_prix_voiture.textContent = data.prix_voiture;
    div_card.appendChild(p_prix_voiture);

    let hr_1 = document.createElement("hr");
    hr_1.className = "cc-sep";
    div_card.appendChild(hr_1);

    let p_date = document.createElement("p");
    p_date.className = "cc-date";
    p_date.textContent = data.date;
    div_card.appendChild(p_date);

    let p_includes_date = document.createElement("p");
    p_includes_date.className = "cc-sub";
    p_includes_date.textContent = data.includes_date;
    div_card.appendChild(p_includes_date);
    let div_produits = document.createElement("div");
    div_produits.className = "cc-rows";
    div_card.appendChild(div_produits);

    for (let i = 0; i < data.produit.length; i++) {
        let div_row = document.createElement("div");
        div_row.className = "cc-row";
        div_produits.appendChild(div_row);

        let span_label = document.createElement("span");
        span_label.className = "cc-label";
        span_label.textContent = data.produit[i][0];
        div_row.appendChild(span_label);

        let strong_value = document.createElement("strong");
        strong_value.textContent = data.produit[i][1];
        div_row.appendChild(strong_value);
    }

    let hr_2 = document.createElement("hr");
    hr_2.className = "cc-sep";
    div_card.appendChild(hr_2);
    for (let i = 0; i < data.totale.length; i++) {
        let div_total = document.createElement("div");
        div_total.className = "cc-row";
        div_card.appendChild(div_total);

        let strong_total_label = document.createElement("strong");
        strong_total_label.textContent = data.totale[i][0];
        div_total.appendChild(strong_total_label);

        let span_total_value = document.createElement("span");
        span_total_value.className = "cc-total-value";
        span_total_value.textContent = data.totale[i][1];
        div_total.appendChild(span_total_value);
    }
}
composant_checkout(checkout_data);

const info_block = document.getElementById("info-block");

function voiture_card() {
    info_block.textContent = "";
    let p_eyebrow = document.createElement("p");
    p_eyebrow.className = "step-name";
    p_eyebrow.textContent = "01 / VÉHICULE";
    info_block.appendChild(p_eyebrow);

    let h1_titre = document.createElement("h1");
    h1_titre.className = "step-title";
    h1_titre.textContent = "Choisissez votre véhicule";
    info_block.appendChild(h1_titre);

    let p_description = document.createElement("p");
    p_description.className = "step-desc";
    p_description.textContent = "Sélectionnez une voiture disponible et votre période de location.";
    info_block.appendChild(p_description);

}

function recuperation_card() {
    info_block.textContent = "";
    let p_eyebrow = document.createElement("p");
    p_eyebrow.className = "step-name";
    p_eyebrow.textContent = "02 / RÉCUPÉRATION";
    info_block.appendChild(p_eyebrow);

    let h1_titre = document.createElement("h1");
    h1_titre.className = "step-title";
    h1_titre.textContent = "Où récupérer votre voiture ?";
    info_block.appendChild(h1_titre);

    let p_description = document.createElement("p");
    p_description.className = "step-desc";
    p_description.textContent = "Choisissez le lieu qui vous convient.";
    info_block.appendChild(p_description);
}

function options_card() {
    info_block.textContent = "";
    let p_eyebrow = document.createElement("p");
    p_eyebrow.className = "step-name";
    p_eyebrow.textContent = "03 / OPTIONS";
    info_block.appendChild(p_eyebrow);

    let h1_titre = document.createElement("h1");
    h1_titre.className = "step-title";
    h1_titre.textContent = "Les petits plus de votre location";
    info_block.appendChild(h1_titre);

    let p_description = document.createElement("p");
    p_description.className = "step-desc";
    p_description.textContent = "Ces options sont facultatives et facturées par jour.";
    info_block.appendChild(p_description);
}

function recapitulatif_card() {
    info_block.textContent = "";
    let p_eyebrow = document.createElement("p");
    p_eyebrow.className = "step-name";
    p_eyebrow.textContent = "04 / RÉCAPITULATIF";
    info_block.appendChild(p_eyebrow);

    let h1_titre = document.createElement("h1");
    h1_titre.className = "step-title";
    h1_titre.textContent = "Vérifiez votre demande";
    info_block.appendChild(h1_titre);

    let p_description = document.createElement("p");
    p_description.className = "step-desc";
    p_description.textContent = "Tout est prêt ? Vérifiez vos informations avant de confirmer.";
    info_block.appendChild(p_description);
}
function step_display() {
    switch(scope_step) {
        case 0:{
            voiture_card()
            break;
        }
        case 1:{
            console.log("Récupération");
            recuperation_card()
            break;
        }
        case 2:{
            console.log("Options");
            options_card();
            break;
        }
        case 3:{
            console.log("Récapitulatif");
            break;
        }
    }
}

step_display();
btn_next.addEventListener("click", () => {
    next_step();
    step_display();
    composant_checkout(checkout_data);
    console.log(scope_step);
    
    if(scope_step == 3){
        btn_next.textContent = "Confirmer"
    }
})