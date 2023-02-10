const API_KEY = process.env.REACT_APP_STEAM_API_KEY;
const BASE_URL =  `https://api.steampowered.com/IStoreService/GetAppList/v1/?key=${API_KEY}`;

fetch(BASE_URL, { method: "GET" } )
    .then(response => response.text())
    .then(data => console.log(data));