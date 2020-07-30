const getLeague = async (number) => {
    const response = await fetch("https://api-football-v1.p.rapidapi.com/v2/teams/league/2", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "2aab9d324dmsh12dc9b1ed080296p1d4f65jsnea3f0ed3e0d8"
        }
    });

    const data = await response.json();

    return data.api.teams[number];
};