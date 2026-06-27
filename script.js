const cas = document.getElementById("cas");
const ttw = document.getElementById("ttw");
const palete = document.getElementById("palete");
const cigel = document.getElementById("cigel");
const tow = document.getElementById("tow");
const results = document.getElementById("results");

function izracunaj() {

let html = "";

// ČAS

if(cas.value !== ""){

let sek = parseFloat(cas.value);

let ttwCas = sek * 9;

let paletNaUro = 3600 / sek;

let ttwNaUro = paletNaUro / 9;

html += `
<div class="card">
<h2>ČAS</h2>

<p><b>TTW:</b> ${ttwCas.toFixed(2)} s</p>

<p><b>Palet / ura:</b> ${paletNaUro.toFixed(2)}</p>

<p><b>TTW / ura:</b> ${ttwNaUro.toFixed(2)}</p>

</div>
`;

}

// TOW

if(ttw.value !== ""){

let skupajPalet =
parseFloat(ttw.value) *
parseFloat(palete.value);

let skupajCigel =
skupajPalet *
parseFloat(cigel.value);

let rezultat =
skupajCigel /
parseFloat(tow.value);

html += `
<div class="card">

<h2>TOW</h2>

<p><b>Palet:</b> ${skupajPalet}</p>

<p><b>Cigel:</b> ${skupajCigel}</p>

<p><b>TOW:</b> ${rezultat.toFixed(0)}</p>

</div>
`;

}

results.innerHTML = html;

}

cas.addEventListener("input",izracunaj);
ttw.addEventListener("input",izracunaj);
palete.addEventListener("input",izracunaj);
cigel.addEventListener("input",izracunaj);
tow.addEventListener("input",izracunaj);
