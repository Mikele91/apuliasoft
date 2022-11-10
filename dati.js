let db=[
        {
            "project": { "id": 1, "name": "Mars Rover" },
            "employee": { "id": 1, "name": "Mario" },
            "date": "2021-08-26T22:00:00.000Z",
            "hours": 5
        },
        {
            "project": { "id": 2, "name": "Manhattan" },
            "employee": { "id": 2, "name": "Giovanni" },
            "date": "2021-08-30T22:00:00.000Z",
            "hours": 3
        },
        {
            "project": { "id": 1, "name": "Mars Rover" },
            "employee": { "id": 1, "name": "Mario" },
            "date": "2021-08-31T22:00:00.000Z",
            "hours": 3
        },
        {
            "project": { "id": 1, "name": "Mars Rover" },
            "employee": { "id": 3, "name": "Lucia" },
            "date": "2021-08-31T22:00:00.000Z",
            "hours": 3
        },
        {
            "project": { "id": 2, "name": "Manhattan" },
            "employee": { "id": 1, "name": "Mario" },
            "date": "2021-08-26T22:00:00.000Z",
            "hours": 2
        },
        {
            "project": { "id": 2, "name": "Manhattan" },
            "employee": { "id": 2, "name": "Giovanni" },
            "date": "2021-08-31T22:00:00.000Z",
            "hours": 4
        }
    ]
    
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    function filtra(elm){
        db.filter(function(blocchi){
            //console.log(blocchi.project.name == elm)
        })
    }

    const progectselect1 = document.getElementById("selct_project");
    const progectselect2 = document.getElementById("selct_employee");
    const progectselect3 = document.getElementById("selct_date");
    progectselect1.addEventListener("change",(event)=>{
        //console.log(event.target.value);
        //filtra(event);

    });
    
    
function createOption(select, parameter){
    let destination = select;
    let duplicate=[];
    if(parameter == "date"){
        db.forEach(elm=>{
            //console.log(elm[parameter])
            if(!duplicate.includes(elm[parameter])){
                duplicate.push(elm[parameter]);
                let convertData = new Date(elm[parameter]);
                destination.add(new Option(formatDate(convertData)));
                //console.log(duplicate);
            }
        });

    }else{

        db.forEach(elm=>{
            //console.log(elm[parameter]) ;
            if(!duplicate.includes(elm[parameter]["name"])){
                duplicate.push(elm[parameter]["name"]);
                destination.add(new Option(elm[parameter]["name"]));
            }
        });
    }
    
}
function formatDate(date){
    let year= date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return`${day} ${MONTHS[month]} ${year}`;
}
createOption(progectselect1, "project");
createOption(progectselect2, "employee");
createOption(progectselect3, "date");
//console.log(new Date("2021-08-31T22:00:00.000Z"));

function createTable() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "table_full");
    document.body.appendChild(x);
  
    var y = document.createElement("THEAD");
    y.setAttribute("id", "myTh");
    x.appendChild(y);
  
    // var z = document.createElement("TD");
    // var t = document.createTextNode("cell");
    // z.appendChild(t);
    // document.getElementById("myTr").appendChild(z);
  }
  createTable();