// Öztürk 3AHIF 
const express = require("express"); 
const { allowedNodeEnvironmentFlags } = require("process");
const app = express(); 
const port = 3000; 

const s = require("./Schulen.json")

app.get("/", function(r, rs){
   res.send("<h1>Hello World!</h1>"); 
}); 

app.get("/a1", function(r, rs){
    let result = s.filter(x => x.plz > 4000).map(x => ({name: x.schulname, adr: x.strasse,plz: x.plz, ort: x.ort  })) 
    res.json(result);
});

app.get("/a2", function(r, rs){
   let result = s.filter(x => x.bundesland == "Wien").map(x => ({name: x.schulname, adr: x.strasse,plz: x.plz, ort: x.ort  })) 
   res.json(result);
});

app.get("/a3", function(r, rs){
   let result = s.filter(x => x.bundesland == "Wien" && x.strasse.indexOf("gasse") >= 0).map(x => ({name: x.schulname, adr: x.strasse,plz: x.plz, ort: x.ort  })) 
   res.json(result);
});

app.get("/a4", function(r, rs){
   let result = s.filter(x => x.bundesland == "Wien" || x.bundesland == "Tirol").map(x => ({name: x.schulname, adr: x.strasse,plz: x.plz, ort: x.ort  })) 
   res.json(result);
});

app.get("/a5", function(r, rs){
   let result = s.filter(x => x.bundesland == "Niederösterreich").map(x => ({name: x.schulname, mail: x.mail })) 
   res.json(result);
});

app.get("/a6", function(r, rs){
   let result = s.filter(x => x.schulid == 374).map(x => ( x.subject_areas.map(y=> ({name:y.name, dauer: y.dauer, conditions: y.conditions, note: y.note})))) 
   res.json(result);
});


