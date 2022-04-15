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

let finalMlog = document.getElementById('final-mlog');

function generate() {
    document.querySelector(".next-step").style.display = "none";
    document.querySelector(".space").style.display = "none";
    document.getElementById('page-2').style.display = 'none';
    document.getElementById('page-3').style.display = 'block';
    scroll(0, 0);
    for (let g = 1; g < userData.length; g++) {
        if (document.getElementById(userData[g][1]).parentElement.classList.contains("hide")) {
            break;
        } else {
            let para = document.createElement("p")
            para.classList.add("mlog-para");
            para.innerHTML = userData[g][0];

            let images = document.createElement("div");
            images.classList.add('mlog-images');
            for (let p = 0; p < document.getElementById(userData[g][1]).parentElement.children[0].childElementCount; p++) {
                images.appendChild(document.getElementById(userData[g][1]).parentElement.children[0].children[p]);
            }

            finalMlog.appendChild(para);
            finalMlog.appendChild(images);
        }
    }
}

function goBack() {
    document.getElementById('page-3').style.display = 'none';
    document.getElementById('page-2').style.display = 'block';
    scroll(0, 0);
}

let imgUpload = document.getElementById('file-upload'),
    totalFiles;

let photoGroups = document.querySelector('.drop-targets');

function newGroup(d) {
    let photoGroup = document.createElement("div");
    photoGroup.setAttribute('class', 'scroll-container box');
    photoGroup.innerHTML = '<div class="gridscroll"></div>' +
        '<div class="log-button" id="group' + (d + 1) + '" onclick="showDiv(this.id)">' +
        '<svg height="96" width="96" class="write">' +
        '<polygon points="30,0 96,0 96,96 0,96" />' +
        '</svg>' +
        '<p class="write-text">Log</p>' +
        '<img src="media/log.svg" class="write-icon">' +
        '</div>';

    photoGroup.addEventListener('dragenter', dragEnter)
    photoGroup.addEventListener('dragover', dragOver);
    photoGroup.addEventListener('dragleave', dragLeave);
    photoGroup.addEventListener('drop', drop);
    photoGroups.appendChild(photoGroup);
}

// let addButton = document.querySelector(".add");
// addButton.addEventListener('click', newGroup);

imgUpload.addEventListener('change', previewImgs, false);

let p = 0;

function previewImgs(event) {
    totalFiles = imgUpload.files.length;

    for (; p < totalFiles / 3; p++) {
        console.log(p);
        newGroup(p);
    }

    for (let i = 0; i < totalFiles; i++) {
        let tile = document.createElement('div');
        tile.setAttribute('class', 'item');
        tile.setAttribute('draggable', 'true');
        tile.style.width = '72px';
        tile.style.height = '72px';
        // tile.style.backgroundImage = URL.createObjectURL(event.target.files[i]);
        tile.style.backgroundSize = 'cover';

        let reader = new FileReader();
        reader.addEventListener("load", () => {
            tile.style.backgroundImage = `url(${reader.result})`;
        });
        reader.readAsDataURL(this.files[i]);

        tile.setAttribute("id", i);
        tile.addEventListener('dragstart', dragStart);

        let container = document.getElementsByClassName('gridscroll');
        container[parseInt(i / 3)].appendChild(tile);

        // if (file) {
        //     reader.readAsDataURL(file);
        // }

        // var preview = document.querySelector('#preview');
        // var files = document.querySelector('input[type=file]').files;

        // function readAndPreview(file) {
        //     if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        //         var reader = new FileReader();

        //         reader.addEventListener("load", function() {
        //             var image = new Image();
        //             image.height = 100;
        //             image.title = file.name;
        //             image.src = this.result;
        //             container.appendChild(image);
        //         }, false);

        //         reader.readAsDataURL(file);
        //     }

        // }

        // if (files) {
        //     [].forEach.call(files, readAndPreview);
        // }

    }
    document.getElementById('page-1').style.display = 'none';
    document.getElementById('page-2').style.display = 'block';
    scroll(0, 0);

}

// for (let k = 1; k <= 15; k++) {
//     var img = document.createElement('div');
//     img.setAttribute('class', 'item');
//     img.setAttribute('draggable', 'true');
//     img.style.width = '72px';
//     img.style.height = '72px';
//     img.style.backgroundImage = 'url(media/0' + k + '.jpg)';
//     img.style.backgroundSize = 'cover';
//     var container = document.getElementsByClassName('gridscroll');
//     container[parseInt((k - 1) / 3)].appendChild(img);
// }

// select the item element
let items = document.querySelectorAll('.item');

var i = 1;

let create = document.getElementById("new-group");
create.addEventListener('dragenter', dragEnter)
create.addEventListener('dragover', dragOver);
create.addEventListener('dragleave', dragLeave);
create.addEventListener('drop', drop);

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
    create.style.display = "block";
}

// let boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//     box.addEventListener('dragenter', dragEnter)
//     box.addEventListener('dragover', dragOver);
//     box.addEventListener('dragleave', dragLeave);
//     box.addEventListener('drop', drop);
// });

function dragEnter(e) {
    e.preventDefault();
    if (e.target.classList.contains("box")) e.target.classList.add('drag-over');
    if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.add('drag-over');
    if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.add('drag-over');
    if (e.target.classList.contains("create")) e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    if (e.target.classList.contains("box")) e.target.classList.add('drag-over');
    if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.add('drag-over');
    if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.add('drag-over');
    if (e.target.classList.contains("create")) e.target.classList.add('drag-over');
}

function dragLeave(e) {
    if (e.target.classList.contains("box")) e.target.classList.remove('drag-over');
    if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.remove('drag-over');
    if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.remove('drag-over');
    if (e.target.classList.contains("create")) e.target.classList.remove('drag-over');
}

function drop(e) {
    if (e.target.classList.contains("box")) e.target.classList.remove('drag-over');
    if (e.target.classList.contains("gridscroll")) e.target.parentElement.classList.remove('drag-over');
    if (e.target.classList.contains("item")) e.target.parentElement.parentElement.classList.remove('drag-over');
    if (e.target.classList.contains("create")) e.target.classList.remove('drag-over');
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    if (draggable.parentElement.childElementCount <= 1) draggable.parentElement.parentElement.classList.add('hide');
    console.log(e.target);
    // add it to the drop target
    if (e.target.classList.contains("box")) e.target.children[0].appendChild(draggable);
    if (e.target.classList.contains("gridscroll")) e.target.appendChild(draggable);
    if (e.target.classList.contains("item")) e.target.parentElement.appendChild(draggable);
    if (e.target.classList.contains("create")) {
        p++;
        newGroup(p);
        let tempID = "group" + (p + 1);
        document.getElementById(tempID).parentElement.children[0].appendChild(draggable);
    }
    // display the draggable element
    draggable.classList.remove('hide');
    console.log(draggable);
    create.style.display = "none";
}

// var logBtns = document.getElementsByClassName("write");
// var logModal = document.querySelector(".ask-input");
// console.log(logBtns);
// logBtns.forEach(logBtn => {
//     logBtn.onclick = function() {
//         logModal.style.display = "block";
//     }
// })

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
        if (buttons[i].innerHTML == "Log" && !buttons[i].parentElement.parentElement.classList.contains('hide')) {
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

function doCapture() {
    html2canvas(document.getElementById("final-mlog")).then(function(canvas) {
        download(canvas.toDataURL("image/jpeg", .9));
    });
}

function download(source) {
    const fileName = source.split('/').pop();
    var el = document.createElement("a");
    el.setAttribute("href", source);
    el.setAttribute("download", fileName);
    document.body.appendChild(el);
    el.click();
    el.remove();
}

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// // Get the modal
// var writeModal = document.getElementById("writeModal");

// // Get the button that opens the modal
// var writeButton = document.getElementsByClassName("tile")[0];

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// writeButton.onclick = function() {
//     writeModal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     writeModal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         writeModal.style.display = "none";
//     }
// }

// for (var i = 0; i < totalFiles; i++) {
//     img = document.createElement('img');
//     img.src = URL.createObjectURL(event.target.files[i]);
//     img.classList.add('img-preview-thumb');
//     imgPreview.appendChild(img);
// }

// // Get the modal
// var input = document.querySelector(".ask-input");

// // Get the button that opens the modal
// var tile = document.querySelector(".tile");

// // Get the <span> element that closes the modal
// // var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// tile.onclick = function() {
//     input.style.display = "block";
// }

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