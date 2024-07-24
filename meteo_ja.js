//API prévision météo
document.addEventListener("DOMContentLoaded", previsions);
async function previsions (evt) {
    try {
        const answer = await fetch ("https://www.prevision-meteo.ch/services/json/toulouse");
        if (answer.ok) {   
            const data = await answer.json(); 
            //récupérer date du jour
            document.querySelector("#date").textContent = data.current_condition.date;
            //récupérer l'heure de levé du soleil
            document.querySelector("#sunrise").textContent = data.city_info.sunrise;
            //récupérer l'heure de levé du soleil
            document.querySelector("#sunset").textContent = data.city_info.sunset;

            //récupérer le jour de la semaine du jour
            document.querySelector("#jourSemaine").textContent = data.fcst_day_0.day_long;
            document.querySelector("#jour0Semaine").textContent = data.fcst_day_0.day_long;
            //récupérer l'icone du jour
            document.querySelector("#j>img").src = data.current_condition.icon_big;
            //récupérer la température du jour
            document.querySelector("#tempJour").textContent = data.current_condition.tmp;
            //récupérer le texte des conditions du jour
            document.querySelector("#conditionsJour").textContent = data.current_condition.condition;
            //récupérer température minima du jour
            document.querySelector("#TminJour").textContent = data.fcst_day_0.tmin;
            //récupérer température minima du jour
            document.querySelector("#TmaxJour").textContent = data.fcst_day_0.tmax;

            //récupérer le jour de la semaine du jour+1
            document.querySelector("#jour1Semaine").textContent = data.fcst_day_1.day_long;
            //récupérer l'icone du jour+1
            document.querySelector("#j1>img").src = data.fcst_day_1.icon_big;
            //récupérer le texte des conditions du jour+1
            document.querySelector("#conditionsJour1").textContent = data.fcst_day_1.condition;
            //récupérer température minima du jour+1
            const TminJour1 = document.querySelector("#TminJour1").textContent = data.fcst_day_1.tmin;
            //récupérer température minima du jour+1
            const TmaxJour1 = document.querySelector("#TmaxJour1").textContent = data.fcst_day_1.tmax;
            //calculer et récupérer la température du jour+1
            let TmoyJour1 = (TminJour1 + TmaxJour1) / 2;
            document.querySelector("#TmoyJour1").textContent = TmoyJour1;

            //récupérer le jour de la semaine du jour+2
            document.querySelector("#jour2Semaine").textContent = data.fcst_day_2.day_long;            
            //récupérer l'icone du jour+2
            document.querySelector("#j2>img").src = data.fcst_day_2.icon_big;
            //récupérer le texte des conditions du jour+2
            document.querySelector("#conditionsJour2").textContent = data.fcst_day_2.condition;
            //récupérer température minima du jour+2
            const TminJour2 = document.querySelector("#TminJour2").textContent = data.fcst_day_2.tmin;
            //récupérer température minima du jour+2
            const TmaxJour2 = document.querySelector("#TmaxJour2").textContent = data.fcst_day_2.tmax;
            //calculer et récupérer la température du jour+2
            let TmoyJour2 = (TminJour2 + TmaxJour2) / 2;
            document.querySelector("#TmoyJour2").textContent = TmoyJour2;

            //reprendre cela en le faisant avec une boucle

        } else {
            console.error("Données non collectées");
        }
    } catch (error) {
            console.error("Serveur injoignable");
        }
    }

//API nominis pour les Saints
document.addEventListener("DOMContentLoaded", nominis);
async function nominis (evt) {
    try {
        const answer = await fetch ("https://nominis.cef.fr/json/nominis.php");
        if (answer.ok) {   
            const data = await answer.json(); 
            //récupérer le saint principal du jour
            const saintJour = document.querySelector("#saintMaj").textContent = Object.keys(data.response.saints.majeurs);
            //récupérer le résumé du saint du jour
            document.querySelector("#resumeSaint").textContent = data.response.saints.majeurs[saintJour].resume;
        } else {
            console.error("Données non collectées");
        }
    } catch (error) {
            console.error("Serveur injoignable");
        }
}

//récupération de l'heure et actualisation toutes les secondes
document.addEventListener("DOMContentLoaded", timer);
let idDelay;
function timer (evt) {
    idDelay = setTimeout(horloge, 1000);
}

function horloge() {
    var time = new Date().toLocaleString('fr-FR',{
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'});
    
document.getElementById("heure").innerHTML = time;
setTimeout(horloge, 1000); //mise à jour du contenu "heure" toutes les secondes
}