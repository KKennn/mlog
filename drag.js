for (let k = 1; k <= 15; k++) {
    var img = document.createElement('div');
    img.setAttribute('class', 'item');
    img.setAttribute('draggable', 'true');
    img.style.width = '72px';
    img.style.height = '72px';
    img.style.backgroundImage = 'url(media/0' + k + '.jpg)';
    img.style.backgroundSize = 'cover';
    var container = document.getElementsByClassName('gridscroll');
    container[parseInt((k - 1) / 3)].appendChild(img);
}

// select the item element
const items = document.querySelectorAll('.item');

var i = 1;

// attach the dragstart event handler
items.forEach(item => {
    item.setAttribute("id", i);
    item.addEventListener('dragstart', dragStart);
    i++;
})

// handle the dragstart

function dragStart(e) {
    console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log(e.target.id);
    setTimeout(() => {
        e.target.classList.add("hide");
        if (e.target.classList.contains("box")) e.target.classList.add('drag-over');
        if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.add('drag-over');
        if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.add('drag-over');
    }, 0);
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    if (e.target.classList.contains("box")) e.target.classList.add('drag-over');
    if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.add('drag-over');
    if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    if (e.target.classList.contains("box")) e.target.classList.add('drag-over');
    if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.add('drag-over');
    if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.add('drag-over');
}

function dragLeave(e) {
    if (e.target.classList.contains("box")) e.target.classList.remove('drag-over');
    if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.remove('drag-over');
    if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.remove('drag-over');
}

function drop(e) {
    if (e.target.classList.contains("box")) e.target.classList.remove('drag-over');
    if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.remove('drag-over');
    if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.remove('drag-over');
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    if (draggable.parentElement.childElementCount <= 1)
        draggable.parentElement.parentElement.classList.add('hide');
    console.log(e.target);
    // add it to the drop target
    if (e.target.classList.contains("box")) e.target.children[0].appendChild(draggable);
    if (e.target.classList.contains("gridscroll")) e.target.appendChild(draggable);
    if (e.target.classList.contains("item")) e.target.parentElement.appendChild(draggable);
    // display the draggable element
    draggable.classList.remove('hide');
    console.log(draggable);

}

// var logBtns = document.getElementsByClassName("write");
// var logModal = document.querySelector(".ask-input");
// console.log(logBtns);
// logBtns.forEach(logBtn => {
//     logBtn.onclick = function() {
//         logModal.style.display = "block";
//     }
// })