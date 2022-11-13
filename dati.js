let db = [
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

function filtra(elm) {
    db.filter(function (blocchi) {
        //console.log(blocchi.project.name == elm)
    })
}

const optionsSelect = ["project", "employee", "date"];
const projectselect1 = document.getElementById("select_1");
const projectselect2 = document.getElementById("select_2");
const projectselect3 = document.getElementById("select_3");
selects = [projectselect1, projectselect2, projectselect3];

//Funzione che crea le opzioni in una specifica select

function optionDelete(select){
    let optionDelete=["project", "employee", "date","none"];
    optionDelete.forEach(option => {
        select.remove(option);
    })

}
function createOption(options, select) {
    optionDelete(select);
    let field = new Option ("Scegli un criterio di filtraggio", "none");
    select.append(field);
    options.forEach(option => {
        select.add(new Option(option));
    })

}
createOption(optionsSelect, projectselect1);

let newOption = [];
projectselect1.addEventListener("change", (event) => {
    if(event.target.value=="none"){
        optionDelete(projectselect2);
        projectselect2.classList.add("d-none");
        projectselect3.classList.add("d-none");

    }else{
        projectselect2.classList.remove("d-none");
        newOption = optionsSelect;
        newOption = newOption.filter(value => {    
            if (value != event.target.value) {
                return value
            }
        });
        createOption(newOption, projectselect2);
    }
});
projectselect2.addEventListener("change", (event) => {
    let newOption1 = newOption;
    if(event.target.value=="none"){
        optionDelete(projectselect3);
        projectselect3.classList.add("d-none");
    }else{
        projectselect3.classList.remove("d-none");
        newOption1 = newOption.filter(value => {    
            if (value != event.target.value) {
                return value
            }
        });
        //console.log(newOption);
        createOption(newOption1, projectselect3);
    }
        
});

function formatDate(date) {
    let convertDate = new Date(date);
    let year = convertDate.getFullYear();
    let month = convertDate.getMonth();
    let day = convertDate.getDate();
    return `${day} ${MONTHS[month]} ${year}`;
}
function createTable(format) {
    let table = document.createElement("TABLE");
    table.classList.add("table");
    table.setAttribute("id", "table_full");
    document.body.appendChild(table);

    let thead = document.createElement("THEAD");
    table.appendChild(thead);

    let tr = document.createElement("Tr");
    tr.setAttribute("id", "table_head");
    thead.appendChild(tr);
    let firstRow = format;
    let keys = Object.keys(firstRow);
    //console.log(keys);
    keys.forEach(key => {
        let keyColumn = document.createElement("th");
        keyColumn.setAttribute("scope", "col");
        keyColumn.innerHTML = key.toUpperCase();
        tr.appendChild(keyColumn)
    })
    let bodyTable = document.createElement("TBODY");
    table.appendChild(bodyTable);
    db.forEach(record => {
        let trBody = document.createElement("Tr");
        bodyTable.appendChild(trBody);
        Object.entries(record).forEach(([key, value]) => {
            let td = document.createElement("Td");
            if (key == "date") {
                //console.log(`${value}`);
                td.innerHTML = formatDate(value);
            } else if (key != "project" && key != "employee") {
                td.innerHTML = value;
            } else {
                //console.log(`${value["name"]}`);
                td.innerHTML = value["name"];
            }
            trBody.appendChild(td);
        });
    });
    
}

createTable(db[0]);