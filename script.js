function formatTime(seconds){

const min=Math.floor(seconds/60);

const sec=(seconds%60).toFixed(2);

return min+" min "+sec+" s";

}

function izracunajCas(){

const cas=parseFloat(document.getElementById("cas").value);

if(isNaN(cas)){

document.getElementById("casRezultat").innerHTML="";

return;

}

const ttwCas=cas*9;

const paletNaUro=3600/cas;

const ttwNaUro=paletNaUro/9;

document.getElementById("casRezultat").innerHTML=`

<div class="resultCard">

<p>⏱ TTW čas</p>

<div class="big">${formatTime(ttwCas)}</div>

<p>📦 Palet / ura:
<b>${paletNaUro.toFixed(2)}</b></p>

<p>🚛 TTW / ura:
<b>${ttwNaUro.toFixed(2)}</b></p>

</div>

`;

}

function izracunajTow(){

const ttw=parseFloat(document.getElementById("ttw").value)||0;

const palet=parseFloat(document.getElementById("palet").value)||9;

const cigel=parseFloat(document.getElementById("cigel").value)||12;

const tow=parseFloat(document.getElementById("tow").value)||360;

const skupajPalet=ttw*palet;

const skupajCigel=skupajPalet*cigel;

const rezultat = skupajCigel / tow;
const rezultatZaokrozen = Math.ceil(rezultat);
    document.getElementById("rezultat").innerHTML=`

<div class="resultCard">

<p>📦 Skupaj palet</p>

<div class="big">${skupajPalet}</div>

<p>🧱 Skupaj cigel:
<b>${skupajCigel}</b></p>

<p>🚛 Natančno TOW:
<b>${rezultat.toFixed(2)}</b></p>

<p>✅ Potrebno pripraviti:
<b class="success">${rezultatZaokrozen}</b></p>

</div>

`;

}

document.getElementById("cas").addEventListener("input",izracunajCas);

document.getElementById("ttw").addEventListener("input",izracunajTow);

document.getElementById("palet").addEventListener("input",izracunajTow);

document.getElementById("cigel").addEventListener("input",izracunajTow);

document.getElementById("tow").addEventListener("input",izracunajTow);

izracunajCas();

izracunajTow();
