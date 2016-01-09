function showcolumn() {
    document.getElementById("columnID").style.display = "block";
    document.getElementById("coverID").style.display = "block";
}
/*** FUNCTION TO ADD ROW ***/
function addSamplecol() {
    document.getElementById("columnID").style.display = "none";
    document.getElementById("coverID").style.display = "none";
    var table = document.getElementById("mytable");
    var objInputCheckBox = document.createElement("input");
    objInputCheckBox.type = "checkbox";
    var cname = document.getElementById("cname").value;
    var ctype = document.getElementById("ctype").value;
    var cedit = document.getElementById("cedit").value;
    var row = table.insertRow(-1);
    var objCell1 = row.insertCell(0);
    var objCell2 = row.insertCell(1);
    var objCell3 = row.insertCell(2);
    var objCell4 = row.insertCell(3);
    objCell1.appendChild(objInputCheckBox);
    objCell2.innerHTML = cname;
    objCell3.innerHTML = ctype;
    objCell4.innerHTML = cedit;
    var row1 = document.getElementById("myRow");
    var x = row1.insertCell(-1);
    x.innerHTML = cname;
}

/*** FUNCTION TO DELETE ROW ***/
function removeSamplecol() {

    var table = document.getElementById("mytable");

    /*** Get the current row length ***/
    var iRow = table.rows.length;

    /*** Initial row counter ***/
    var counter = 0;

    /*** Performing a loop inside the table ***/
    if (table.rows.length > 1) {
        for (var i = 0; i < table.rows.length; i++) {

            /*** Get checkbox object ***/
            var chk = table.rows[i].cells[0].childNodes[0];
            if (chk.checked) {
                /*** if checked we del ***/
                table.deleteRow(i);
                iRow--;
                i--;
                counter = counter + 1;
            }
        }

        /*** Alert user if there is now row is selected to be deleted ***/
        if (counter == 0) {
            alert("Please select the row that you want to delete.");
        }
    } else {
        /*** Alert user if there are no rows being added ***/
        alert("There are no rows being added");
    }
}
var x = 1000,
    c = 1;

function fnrow() {
    var table2 = document.getElementById("mytable2");
    var objInputCheckBox = document.createElement("input");
    var select = document.createElement("select");
    var option1 = document.createElement("option");
    option1.value = "1";
    option1.selected = "";
    option1.innerHTML = "1";
    var option2 = document.createElement("option");
    option2.value = "2";
    option2.innerHTML = "2";
    select.appendChild(option1);
    select.appendChild(option2);
    objInputCheckBox.type = "checkbox";
    var d = new Date("July 21, 1983 01:15:00");
    var n = d.getDate()

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);

    var row = table2.insertRow(-1);
    var Cell1 = row.insertCell(0);
    var Cell2 = row.insertCell(1);
    var Cell3 = row.insertCell(2);
    var Cell4 = row.insertCell(3);
    var Cell5 = row.insertCell(4);
    Cell1.appendChild(objInputCheckBox);
    Cell2.innerHTML = x;
    Cell3.innerHTML = "string" + c;
    Cell4.innerHTML = today;
    Cell5.innerHTML = select;
    x++;
    c++;
}

function removeSamplerow() {

    var table = document.getElementById("mytable2");
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            if (rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
}
