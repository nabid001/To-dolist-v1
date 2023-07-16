const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function (req, res) {
    
    let day = date();

    res.render("list", {kindOfDay: day, newListItems: items});
});

/* Form post request accepting */
app.post("/", function(req, res) {
   let item = req.body.newItem
   
   items.push(item);

   res.redirect("/");
});



/* Port listening */

app.listen(3000, function () {
    console.log("Server running in port 3000.");
});




// switch (currentDay) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday"
//         break;
//     case 3:
//         day = "Wednesday"
//         break;
//     case 4:
//         day = "Thursday"
//         break;
//     case 5:
//         day = "Friday"
//         break;
//     case 6:
//         day = "Saturday"
//         break;
//     default:
//         console.log("Error: Current day is " + currentDay);
// }