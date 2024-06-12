const container = document.getElementById('drag-and-drop-app');


let state = {
    elemek: {
        "elso": {
            id: "elso",
            x: container.offsetLeft,
            y: container.offsetTop,
        },
        "masodik": {
            id: "masodik",
            x: container.offsetLeft + 20,
            y: container.offsetTop + 150,
        },
        "harmadik": {
            id: "harmadik",
            x: container.offsetLeft + 40,
            y: container.offsetTop + 300,
        }
    },
    draggedID: "",



}


window.onload = render();

function render() {
    let dobozHTML = '';
    for (const elem of Object.values(state.elemek)) {
        dobozHTML += `
        <div class="box ${state.draggedID === elem.id ? "grabbed" : "not-grabbed"}"
        style="position:absolute;  left:${elem.x}px; top:${elem.y}px;" 
        onmousedown="dobozDragStart(wondow.event) onmosueup="dobozDragEnd(wondow.event)"onmosusemove="dobozMouseMove(window.
            event)" data-egyedi-azonosito=
            ${elem.id}>
            <div class="card-body">
                <h5 class="card.tittle display-4">${elem.id}</h5>
            </div>

        </div>
`;
    }



}


function dobozDragStart(event) {
    const box = event.target.closest('.box');
    state.draggedID = box.dataset.egyediAzonosito;
    render();
}




function dobozDragEnd() {
    state.draggedID = null;
    render();
}


function dobozMouseMove(event) {
    if (!state.draggedID) {
        return;
    }
    const box = event.target.closest('.box');
    if (!box) {
        return;
    }

    state.elemek[state.draggedID].x = document.documentElement.scrollLeft + event.clientX - box.offsetWidth / 2;
    state.elemek[state.draggedID].y = document.documentElement.scrollLTop + event.clientY - box.offsetHeight / 2;


    console.table(state.elemek);

    render();
}