function printpage() {
    var printButton = document.getElementById("printbutton");
    printButton.style.visibility = 'hidden';
    window.print()
    printButton.style.visibility = 'visible';
}