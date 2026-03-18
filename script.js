// Redirect to main page after 7 seconds
setTimeout(function(){
    window.location.href = "index.html"; // replace with your main page
}, 7000);

// Select all Add to Cart buttons
const buttons = document.querySelectorAll("button");

// Add click event to each button
buttons.forEach(function(btn){

    btn.addEventListener("click", function(){

        // Get product name
        const productName = btn.parentElement.querySelector("h2").innerText;

        // Show alert
        alert(productName + " added to cart!");

    });

});