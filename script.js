function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = (seconds % 60).toFixed(2);
    return min + " min " + sec + " s";
}

function izracunajCas() {

    const cas = parseFloat(document.getElementById("cas").value);

    if (isNaN(cas)) {
        document.getElementById("casRezultat").innerHTML = "";
        return;
    }

    const ttwCas = cas * 9;
    const paletNaUro = 3600 / cas;
    const ttwNaUro = paletNaUro / 9;

    document.getElementById("casRezultat").innerHTML = `
    <div class="resultCard">

        <p>⏱ TTW čas</p>

        <div class="big">${formatTime(ttwCas)}</div>

        <p>📦 Palet / ura:
        <b>${paletNaUro.toFixed(2)}</b></p>

        <p>🚛 TTW / ura:
        <b>${ttwNaUro.toFixed(2)}</b></p>

    </div>`;
}

function izracunajTow() {

    const poljeTTW = document.getElementById("ttw");
    const poljePalet = document.getElementById("skupajPalet");

    const paletNaTTW = parseFloat(document.getElementById("palet").value) || 9;
    const cigelNaPaleti = parseFloat(document.getElementById("cigel").value) || 12;
    const cigelNaTow = parseFloat(document.getElementById("tow").value) || 360;

    let ttw;
    let skupajPalet;

    if (document.activeElement === poljePalet) {

        skupajPalet = parseFloat(poljePalet.value) || 0;
        ttw = skupajPalet / paletNaTTW;
        poljeTTW.value = ttw.toFixed(2);

    } else {

        ttw = parseFloat(poljeTTW.value) || 0;
        skupajPalet = ttw * paletNaTTW;
        poljePalet.value = skupajPalet.toFixed(2);

    }

    const skupajCigel = skupajPalet * cigelNaPaleti;
    const natancno = skupajCigel / cigelNaTow;
    const potrebno = Math.ceil(natancno);
    document.getElementById("rezultat").innerHTML = `
    <div class="resultCard">

        <p>📦 Skupaj palet</p>

        <div class="big">${skupajPalet.toFixed(2)}</div>

        <p>🧱 Skupaj cigel:
        <b>${skupajCigel.toFixed(0)}</b></p>

        <hr style="margin:15px 0;">

        <p>🚛 Natančno TOW:
        <b style="color:#0066cc;font-size:28px;">
        ${natancno.toFixed(2)}
        </b></p>

        <p>✅ Potrebno pripraviti:
        <b style="color:green;font-size:30px;">
        ${potrebno}
        </b></p>

    </div>`;
}

document.getElementById("cas").addEventListener("input", izracunajCas);

document.getElementById("ttw").addEventListener("input", izracunajTow);

document.getElementById("palet").addEventListener("input", izracunajTow);

document.getElementById("cigel").addEventListener("input", izracunajTow);

document.getElementById("tow").addEventListener("input", izracunajTow);

document.getElementById("skupajPalet").addEventListener("input", izracunajTow);

izracunajCas();
izracunajTow();
