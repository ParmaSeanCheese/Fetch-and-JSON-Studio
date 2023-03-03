// TODO: add code here
window.addEventListener("load", async function astrofetch(){
    const response = await fetch ("https://lc-json-data.s3.us-east-2.amazonaws.com/astronauts.json");
    let astronauts = await response.json();        

    for (i = 0; i < astronauts.length; i++){
        const container = document.querySelector("#container");
        container.innerHTML += `
        <div class="astronaut">
            <div class="bio">
            <h3>${astronauts[i]["firstName"]} ${astronauts[i]["lastName"]}</h3>
            <ul>
                <li>Hours in space: ${astronauts[i]["hoursInSpace"]}</li>
                <li>Active: ${astronauts[i]["active"]}</li>
                <li>Skills: ${astronauts[i]["skills"].join(", ")}</li>
            </ul>
            </div>
        <img class="avatar" src="${astronauts[i]["picture"]}"/>
        </div>
        `;
    };
});