const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var Reservations = [
    {
        routeName: "MrPotato",
        customerName: "Potato",
        phoneNumber: "Potato",
        customerEmail:"Mr.Potato@UT.edu",
        customerID: "Potato"
    },
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname,"tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname,"reserve.html"));
});

app.get("/api/Reservations", function(req, res) {
    return res.json(Reservations);
});

app.get("/api/Reservations/:Reservations", function(req, res) {
    const reservedTable = req.params.Reservations;
    
    console.log(reservedTable);
    
    for(let i = 0; i <= Reservations.length; i++) {
        if (reservedTable === Reservations[i].routeName){
            return res.json(Reservations[i]);
        }
    }
    return res.json(false);
});

app.listen(port, function(){
    console.log("HEY I'm A POTATO!");
});
