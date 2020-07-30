const clubForm = document.querySelector('form');
const teamInfo = document.querySelector('.team-info');


const updateUI = data => {
    const clubDets = data;

    teamInfo.innerHTML = `
        <img class="club-logo" src="${clubDets.logo}" alt="Team">
        <p class="team-name">${clubDets.name}</p>
        <p class="year"><strong>FOUNDED:</strong> ${clubDets.founded}</p>
        <p class="stadium"><strong>STADIUM:</strong> ${clubDets.venue_name}</p>
        <p class="address">
            <strong>STADIUM ADDRESS:</strong> ${clubDets.venue_address}, ${clubDets.venue_city}
            <br>
            <strong>STADIUM CAPACITY:</strong> ${clubDets.venue_capacity}
        </p>
    `

    if (teamInfo.classList.contains('d-none')) {
        teamInfo.classList.remove('d-none');
    }
};

const updateClub = async teamNumber => {
    const teamDets = await getLeague(teamNumber);

    return teamDets;
};

clubForm.addEventListener('submit', e => {

    e.preventDefault();

    const teamNumber = clubForm.select.value;

    updateClub(teamNumber)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    clubForm.reset();

    localStorage.setItem('teamNo', teamNumber);
});

if (localStorage.getItem('teamNo')) {
    updateClub(localStorage.getItem('teamNo'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
    }

