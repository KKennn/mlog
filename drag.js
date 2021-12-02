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
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // add it to the drop target
    if (e.target.classList.contains("box")) {
        e.target.appendChild(draggable);
    }

    // display the draggable element
    draggable.classList.remove('hide');

}