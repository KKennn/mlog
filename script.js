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

var userData = [];
var saveData = document.getElementById("input");

function showDiv() {
    document.querySelector('.ask-input').style.display = "block";
}

function hideDiv() {
    document.querySelector('.ask-input').style.display = "none";
    userData.push(saveData.value);
    console.log(userData);
    // var input = document.getElementById("input").value;
}