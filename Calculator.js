function oblicz() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var działanie = parseInt(document.getElementById("działanie").value);
    
    switch (działanie) {
        case 1:
            var dodawanie = a + b;
            alert("Wynik dodawania: " + dodawanie);
            break;
        case 2:
            var odejmowanie = a - b;
            alert("Wynik odejmowania: " + odejmowanie);
            break;
        case 3:
            var mnożenie = a * b;
            alert("Wynik mnożenia: " + mnożenie);
            break;
        case 4:
            if (b == 0) {
                alert("Nie można dzielić przez zero!");
                return;
            }
            var dzielenie = a / b;
            alert("Wynik dzielenia: " + dzielenie);
            break;
        default: 
            alert("Nieprawidłowe działanie!");
            break;
    }
    if (document.getElementById("a").required ) {
        alert("Podaj liczby!");
        return;
    }
    if (document.getElementById("b").required ) {
        alert("Podaj liczby!");
        return;
    }
}