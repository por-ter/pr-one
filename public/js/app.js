function newRow() {
    const checkbox = document.getElementById('myonoffswitch');
    const kommen = 'Kommen'
    const gehen = 'Gehen'
    const now = new Date();
    const tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    // Insert a row in the table
    const newRow   = tableRef.insertRow(tableRef.rows.length);

    // Insert a cell
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);    

    // Zeit - Cell1
    let stempelnZeit = document.createTextNode(now.toLocaleTimeString('de-DE'))

    // Datum - Cell2
    let stempelnDatum = document.createTextNode(now.toDateString())

    // Bezeichnung - Cell3
    let bez = ""; 
    if(checkbox.checked){
        bez = document.createTextNode(kommen)
    } else {
        bez = document.createTextNode(gehen)
    }

    // Comment box - Cell4
    let kommBox = document.createElement('input')
    kommBox.type = 'text'
    kommBox.name = 'kommBox'
    kommBox.id = 'kommBox'

    // Delete button - Cell5
    const entfBtn = document.createElement('input')
    entfBtn.type = 'button'
    entfBtn.value = 'X'
    entfBtn.className = 'entfBtn'
    entfBtn.id = 'entfBtn'
    entfBtn.onclick = deleteCurrentRow


    cell1.appendChild(stempelnZeit);
    cell2.appendChild(stempelnDatum);
    cell3.appendChild(bez);
    cell4.appendChild(kommBox);
    cell5.appendChild(entfBtn);	
};

function testFunc () {
    // alert('test')
}

function deleteCurrentRow () {
    const td = event.target.parentNode;
    let tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

////////////////////////////////////////////////////////////////////////////////////////
// ts-stopwatch

const Stopwatch = require('ts-stopwatch').Stopwatch

const stopwatch = new Stopwatch();

console.log(stopwatch.start())

console.log(stopwatch.getTime())

console.log(stopwatch)


