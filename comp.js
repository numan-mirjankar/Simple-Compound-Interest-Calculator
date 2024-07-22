let bt = document.getElementById("btn-compound");
let display = document.getElementById("disp-compound");

bt.addEventListener("click", (event) => {
    event.preventDefault();
    let p = parseFloat(document.getElementById("principal-compound").value);
    let r = parseFloat(document.getElementById("Intrest-compound").value) / 100; // Convert percentage to decimal
    let t = parseFloat(document.getElementById("time-compound").value);
    let n = parseFloat(document.getElementById("frequency-compound").value);

    let amount = p * Math.pow(1 + (r / n), n * t);
    let ci = amount - p;

    display.innerHTML = "<h3>Compound Interest:</h3><p>" + ci.toFixed(2) + "</p>";
});