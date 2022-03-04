var questions = [
    "How would you describe the living creatures in these photos?",
    "How was the smell when you were there?",
    "Were there any interesting visual patterns?",
    "What was in the air?",
    "How are the people outside of these photos?",
    "What did it remind you?",
    "Did it trigger some emotions?",
    "What acoustic details will you use to describe this memory?"
]


var userData = [];
userData.push(["test", "test"]);
var saveData = document.getElementById("input");
var thisId;
var complete = false;

function showDiv(groupId) {
    document.querySelector('.ask-input').style.display = "block";
    saveData.placeholder = "Log some memories …" + "\n" + "Inspiration: " + questions[parseInt(Math.random() * questions.length)];
    thisId = groupId;
    for (var i = 0; i < userData.length; i++) {
        if (userData[i][1] == thisId) {
            saveData.value = userData[i][0];
            break;
        }
    }
}

var imgUpload = document.getElementById('file-upload'),
    imgPreview = document.getElementById('img_preview'),
    totalFiles, previewTitle, previewTitleText, img;

imgUpload.addEventListener('change', previewImgs, false);

function previewImgs(event) {
    totalFiles = imgUpload.files.length;

    console.log(imgUpload.files[0]);

    if (!!totalFiles) {
        imgPreview.classList.remove('quote-imgs-thumbs--hidden');
        previewTitle = document.createElement('p');
        previewTitle.style.fontWeight = 'bold';
        previewTitleText = document.createTextNode(totalFiles + ' Total Images Selected');
        previewTitle.appendChild(previewTitleText);
        imgPreview.appendChild(previewTitle);
    }

    for (var i = 0; i < totalFiles; i++) {
        img = document.createElement('img');
        img.src = URL.createObjectURL(event.target.files[i]);
        img.classList.add('img-preview-thumb');
        imgPreview.appendChild(img);
        // imgPreview.appendChild(imgUpload.files[0]);
    }
    document.getElementById('page-1').style.display = 'none';
    document.getElementById('page-2').style.display = 'block';
}

for (let k = 0; k <= repo.length; k++) {
    var img = document.createElement('div');
    img.setAttribute('class', 'item');
    img.setAttribute('draggable', 'true');
    img.style.width = '72px';
    img.style.height = '72px';
    img.style.backgroundImage = 'url(media/0' + k + '.jpg)';
    img.style.backgroundSize = 'cover';
    var container = document.getElementsByClassName('gridscroll');
    container[parseInt((k) / 3)].appendChild(img);
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


function hideDiv() {
    document.querySelector('.ask-input').style.display = "none";
    for (var i = 0; i < userData.length; i++) {
        if (userData[i][1] == thisId) {
            if (saveData.value != '') {
                userData[i] = [saveData.value, thisId];
                document.getElementById(thisId).children[0].children[0].style.fill = "#32302E";
                document.getElementById(thisId).children[1].innerHTML = "Edit";
            }
            break;
        } else {

            if (i == userData.length - 1) {
                userData.push([saveData.value, thisId]);
            }
        }
    }
    console.log(userData);
    // var input = document.getElementById("input").value;
    saveData.value = "";

    var buttons = document.getElementsByClassName("write-text");
    for (var i = 0; i < buttons.length; i++) {
        complete = true;
        if (buttons[i].innerHTML == "Log") {
            complete = false;
            break;
        }
    }
    if (complete) {
        document.querySelector(".next-step").style.display = "block";
        document.querySelector(".space").style.display = "block";
    } else {
        document.querySelector(".next-step").style.display = "none";
        document.querySelector(".space").style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var writeModal = document.getElementById("writeModal");

// Get the button that opens the modal
var writeButton = document.getElementsByClassName("tile")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
writeButton.onclick = function() {
    writeModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    writeModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        writeModal.style.display = "none";
    }
}

for (var i = 0; i < totalFiles; i++) {
    img = document.createElement('img');
    img.src = URL.createObjectURL(event.target.files[i]);
    img.classList.add('img-preview-thumb');
    imgPreview.appendChild(img);
}

// Get the modal
var input = document.querySelector(".ask-input");

// Get the button that opens the modal
var tile = document.querySelector(".tile");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
tile.onclick = function() {
    input.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }