const ratingComponent = document.getElementsByClassName("rating");
let output = document.getElementById("rating-para");
let finalRating = 0;

function select(n) {
    remove();
    finalRating = n;
    for (let i = 0; i < n; i++) {
        ratingComponent[i].className = "rating rating-color";
    }
}

function remove() {
    let i = 0;
    while (i < 5) {
        ratingComponent[i].className = "rating";
        i++;
    }
    finalRating = 0;
}

function submitForm() {
    if (finalRating === 0) {
        alert("Please Select A Rating!");
    }
    else {
        document.getElementById("main-body").style.transform = "rotateY(180deg)";
        document.getElementById("thankyou-state").style.transform = "rotateY(180deg)";
        document.getElementById("rating-state").style.display = "none";
        document.getElementById("thankyou-state").style.display = "block";
        output.innerText = "You selected " + finalRating + " out of 5";
    }
}