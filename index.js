const span_year = document.getElementById("year");
const num=document.getElementsByClassName("num");

function calcola_tempo(){
    const now = new Date();
    const current_year = now.getFullYear();

    //1 gennaio dell'anno prossimo //!GENNAIO=0 E NON 1
    const next_year = new Date(current_year + 1, 0, 1);
    span_year.innerHTML = next_year.getFullYear();
    
    const secondi_restanti_totali = Math.floor((next_year - now) / 1000);

    let time = [];
    const secondi = secondi_restanti_totali % 60;
    const minuti = Math.floor(secondi_restanti_totali % (60 * 60) / 60);
    const ore = Math.floor(secondi_restanti_totali % (60 * 60 * 24) / (60 * 60));
    const giorni = Math.floor(secondi_restanti_totali / (60 * 60 * 24));
    time.push(giorni);
    time.push(ore);
    time.push(minuti);
    time.push(secondi);

    for (let i = 0; i < num.length; i++) {
        num[i].innerHTML = time[i];
    }
}

setInterval(calcola_tempo,1000);



