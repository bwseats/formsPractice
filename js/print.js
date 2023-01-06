function printpage() {
    let printButton = document.getElementById("printButton");
    let navbar = document.getElementById("navbar");
    let footer = document.getElementById("footer");
    printButton.style.visibility = 'hidden';
    navbar.style.visibility = 'hidden';
    footer.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
    navbar.style.visibility = 'visible';
    footer.style.visibility = 'visible';
}