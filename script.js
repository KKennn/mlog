var questions = [
    "How would you describe the living creatures in these photos?",
    "How was the smell when you were there?",
    "Were there any interesting visual patterns?",
    "What was in the air?",
    "How are the people outside of these photos?"
]

var userData = [];
userData.push(["test", "test"]);
var saveData = document.getElementById("input");
var thisId;
var complete = false;

function showDiv(groupId) {
    document.querySelector('.ask-input').style.display = "block";
    saveData.placeholder = "Log some memories …" + "\n" + "Inspo: " + questions[parseInt(Math.random() * questions.length)];
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
                document.getElementById(thisId).children[0].children[0].style.fill = "rgba(38,35,33,.6)";
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