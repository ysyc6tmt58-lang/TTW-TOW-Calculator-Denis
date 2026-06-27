function izracunajTOW() {
    const ttw = parseFloat(document.getElementById("ttw").value) || 0;
    const paletNaTTW = parseFloat(document.getElementById("palet").value) || 9;
    const cigelNaPaleti = parseFloat(document.getElementById("cigel").value) || 12;
    const cigelNaTOW = parseFloat(document.getElementById("tow").value) || 360;

    const skupajPalet = ttw * paletNaTTW;
    const skupajCigel = skupajPalet * cigelNaPaleti;
    const skupajTOW = Math.ceil(skupajCigel / cigelNaTOW);

    document.getElementById("rezultat").innerHTML = `
        <h2>Rezultat</h2>
        <p>📦 Skupaj palet: <b>${skupajPalet}</b></p>
        <p>🧱 Skupaj cigel: <b>${skupajCigel}</b></p>
        <p>🚛 Potrebnih TOW: <b>${skupajTOW}</b></p>
    `;
}

document.querySelectorAll("input").forEach(el=>{
    el.addEventListener("input",izracunajTOW);
});

izracunajTOW();
