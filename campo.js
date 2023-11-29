
// implementiamo nella pagina la griglia

// menzioniamo il contenitore
const gridCampo = document.getElementById("grid");

// definiamo il ciclo della tabella
for (let i = 1; i <= 100; i++) {

    const newEl = createAnElement("div", "square");

    newEl.append(i);

    gridCampo.append(newEl);

}





// definiamo le funzioni
function createAnElement(tag, attribute) {

    const createEl = document.createElement(tag);
    createEl.classList.add(attribute);

    return createEl;

}