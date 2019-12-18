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

    let text1 = document.createTextNode(now.toLocaleTimeString('de-DE'))
    let text2 = document.createTextNode(now.toDateString())
    // let text3  = document.createTextNode('Kommen')  
    let text3 = ""; 
    if(checkbox.checked){
        text3 = document.createTextNode(kommen)
    } else {
        text3 = document.createTextNode(gehen)
    }
    let text4 = document.createTextNode('')

    const entfBtn = document.createElement('input')
    entfBtn.type = 'button'
    entfBtn.value = 'X'
    entfBtn.className = 'entfBtn'
    entfBtn.id = 'entfBtn'
    entfBtn.onclick = deleteCurrentRow
    // let text5 = document.createTextNode(createButton())


    cell1.appendChild(text1);
    cell2.appendChild(text2);
    cell3.appendChild(text3);
    cell4.appendChild(text4);
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
