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
let voiture_choisie_id = 0;
let recuperation_choisie_id = "";
let nb_jours = 1;
let btn_next = document.getElementById("btn-next");
let btn_previous = document.getElementById("btn-restart");

function fill_checkout_with_care(voiture) {
    voiture_choisie_id = voiture.id;
    let total = voiture.prixJour * nb_jours;

    checkout_data.voiture = voiture.marque + " " + voiture.modele;
    checkout_data.prix_voiture = voiture.categorie + " · " + voiture.prixJour + " MAD / jour";
    checkout_data.includes_date = nb_jours + " jour(s) · dates incluses";

    checkout_data.produit = [
        ["Véhicule · " + nb_jours + " × " + voiture.prixJour + " MAD", total + " MAD"],
        ["Récupération", "Gratuite"],
    ];

    checkout_data.totale = [
        ["Total estimé", total + " MAD"],
    ];

    composant_checkout(checkout_data);
}


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
    let liste_voitures = JSON.parse(localStorage.getItem("voiture"));
    if (liste_voitures == null) {
        liste_voitures = [];
    }

    let div_liste = document.createElement("div");
    div_liste.className = "options-list";
    info_block.appendChild(div_liste);

    let nb_disponibles = 0;

    for (let i = 0; i < liste_voitures.length; i++) {
        let voiture = liste_voitures[i];
        if (voiture.statut == "Disponible") {
            nb_disponibles++;
            if (voiture_choisie_id == 0) {
                fill_checkout_with_care(voiture);
            }

            let div_card = document.createElement("div");
            if (voiture.id == voiture_choisie_id) {
                div_card.className = "option-card selected";
            } else {
                div_card.className = "option-card";
            }
            div_liste.appendChild(div_card);

            let div_header = document.createElement("div");
            div_header.className = "option-header";
            div_card.appendChild(div_header);

            let span_categorie = document.createElement("span");
            span_categorie.className = "option-tag";
            span_categorie.textContent = voiture.categorie;
            div_header.appendChild(span_categorie);

            let div_radio = document.createElement("div");
            div_radio.className = "option-radio";
            div_header.appendChild(div_radio);

            let p_nom = document.createElement("p");
            p_nom.className = "option-name";
            p_nom.textContent = voiture.marque + " " + voiture.modele;
            div_card.appendChild(p_nom);

            let p_statut = document.createElement("p");
            p_statut.className = "option-status";
            p_statut.textContent = voiture.statut;
            div_card.appendChild(p_statut);

            let p_prix = document.createElement("p");
            p_prix.className = "option-price";
            p_prix.textContent = voiture.prixJour + " MAD / jour";
            div_card.appendChild(p_prix);
            div_card.addEventListener("click", () => {
                fill_checkout_with_care(voiture);
                voiture_card();
            });
        }
    }

    if (nb_disponibles == 0) {
        let p_vide = document.createElement("p");
        p_vide.className = "step-desc";
        p_vide.textContent = "Aucune voiture disponible pour le moment";
        div_liste.appendChild(p_vide);
    }

    let div_dates = document.createElement("div");
    div_dates.className = "datesBlock";
    info_block.appendChild(div_dates);


    let input_debut = document.createElement("input");
    input_debut.type = "date";
    input_debut.className = "dateInp";
    input_debut.id = "date-debut";
    div_dates.appendChild(input_debut);


    let input_fin = document.createElement("input");
    input_fin.type = "date";
    input_fin.className = "dateInp";
    input_fin.id = "date-fin";
    div_dates.appendChild(input_fin);

    input_debut.addEventListener("change", maj_dates);
    input_fin.addEventListener("change", maj_dates);
}

function format_date(valeur) {
    let mois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
    let d = new Date(valeur);
    return d.getDate() + " " + mois[d.getMonth()] + " " + d.getFullYear();
}

function generer_date(debut, fin) {
    let d1 = new Date(debut);
    let d2 = new Date(fin);
    let mois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
    if (d1.getMonth() == d2.getMonth() && d1.getFullYear() == d2.getFullYear()) {
        return d1.getDate() + " → " + d2.getDate() + " " + mois[d2.getMonth()] + " " + d2.getFullYear();
    }
    return format_date(debut) + " → " + format_date(fin);
}

function maj_dates() {
    let debut = document.getElementById("date-debut").value;
    let fin = document.getElementById("date-fin").value;
    if (debut != "" && fin != "") {
        let d1 = new Date(debut);
        let d2 = new Date(fin);
        let diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
        if (diff < 1) {
            diff = 1;
        }
        nb_jours = diff;
        checkout_data.date = generer_date(debut, fin);

        let liste_voitures = JSON.parse(localStorage.getItem("voiture"));
        if (liste_voitures == null) {
            liste_voitures = [];
        }
        for (let i = 0; i < liste_voitures.length; i++) {
            if (liste_voitures[i].id == voiture_choisie_id) {
                fill_checkout_with_care(liste_voitures[i]);
            }
        }
    }
}


function choisir_recuperation(mode) {
    recuperation_choisie_id = mode.id;
    let prix_txt = "Gratuite";
    if (mode.fraisFixes > 0) {
        prix_txt = mode.fraisFixes + " MAD";
    }
    checkout_data.produit[1] = ["Récupération · " + prix_txt];

    let total_voiture = 0;
    let liste_voitures = JSON.parse(localStorage.getItem("voiture"));
    if (liste_voitures == null) {
        liste_voitures = [];
    }
    for (let i = 0; i < liste_voitures.length; i++) {
        if (liste_voitures[i].id == voiture_choisie_id) {
            total_voiture = liste_voitures[i].prixJour * nb_jours;
        }
    }
    let total = total_voiture + mode.fraisFixes;
    checkout_data.totale = [["Total estimé", total + " MAD"]];

    composant_checkout(checkout_data);
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

    let div_liste = document.createElement("div");
    div_liste.className = "options-list";
    info_block.appendChild(div_liste);

    for (let i = 0; i < config.modesRecuperation.length; i++) {
        let mode = config.modesRecuperation[i];
        if (recuperation_choisie_id == "") {
            choisir_recuperation(mode);
        }

        let div_card = document.createElement("div");
        if (mode.id == recuperation_choisie_id) {
            div_card.className = "option-card selected";
        } else {
            div_card.className = "option-card";
        }
        div_liste.appendChild(div_card);

        let div_header = document.createElement("div");
        div_header.className = "option-header";
        div_card.appendChild(div_header);

        let span_tag = document.createElement("span");
        span_tag.className = "option-tag";
        span_tag.textContent = "Récupération";
        div_header.appendChild(span_tag);

        let div_radio = document.createElement("div");
        div_radio.className = "option-radio";
        div_header.appendChild(div_radio);

        let p_nom = document.createElement("p");
        p_nom.className = "option-name";
        p_nom.textContent = mode.nom;
        div_card.appendChild(p_nom);

        let p_prix = document.createElement("p");
        p_prix.className = "option-price";
        if (mode.fraisFixes == 0) {
            p_prix.textContent = "Gratuit";
        } else {
            p_prix.textContent = mode.fraisFixes + " MAD";
        }
        div_card.appendChild(p_prix);

        div_card.addEventListener("click", () => {
            choisir_recuperation(mode);
            recuperation_card();
        });
    }

    recuperation_details(recuperation_choisie_id);
}

function recuperation_details(id) {
    let div_bloc = document.createElement("div");
    div_bloc.className = "pickup-infos";
    info_block.appendChild(div_bloc);

    let h_titre = document.createElement("h2");
    h_titre.className = "pickup-title";
    h_titre.textContent = "Informations de récupération";
    div_bloc.appendChild(h_titre);

    switch (id) {
        case "agence": {
            ajouter_champ(div_bloc, "Date", "date");
            ajouter_champ(div_bloc, "Heure", "time");
            break;
        }
        case "aeroport": {
            ajouter_champ(div_bloc, "Aéroport", "text");
            ajouter_champ(div_bloc, "Numéro de vol", "text");
            ajouter_champ(div_bloc, "Date", "date");
            ajouter_champ(div_bloc, "Heure d'arrivée", "time");
            break;
        }
        case "adresse": {
            ajouter_champ(div_bloc, "Ville", "text");
            ajouter_champ(div_bloc, "Adresse", "text");
            ajouter_champ(div_bloc, "Heure de livraison", "time");
            break;
        }
    }
}

function ajouter_champ(parent, label, type) {
    let div_field = document.createElement("div");
    div_field.className = "pickup-field";
    parent.appendChild(div_field);

    let lab = document.createElement("label");
    lab.className = "pickup-label";
    lab.textContent = label;
    div_field.appendChild(lab);

    let inp = document.createElement("input");
    inp.type = type;
    inp.className = "pickup-input";
    div_field.appendChild(inp);
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
    if(checkout_data.date == ""){
        alert("saisir une date");
        return 0;
    }
    if(scope_step == 3){
        btn_next.textContent = "Confirmer"
    }

    next_step();
    step_display();
    composant_checkout(checkout_data);
    console.log(scope_step);
})
