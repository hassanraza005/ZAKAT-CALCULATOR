function calculateZakat() {
    var gold = parseFloat(document.getElementById('gold').value) || 0;
    var silver = parseFloat(document.getElementById('silver').value) || 0;
    var other = parseFloat(document.getElementById('other').value) || 0;

    var totalWealth = gold + (silver * 0.025) + other;
    var zakatAmount = 0;

    if (totalWealth >= 85 * 3.75) {
        zakatAmount = totalWealth * 0.025;
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "<h3>Zakat Amount: " + zakatAmount.toFixed(2) + " PKR</h3>";
}

