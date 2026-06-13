function search_tutorial() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('tutorials');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
            
$(document).ready(function() {
    var csvdata = [    
        ["Why is this important?","why.html"],

        ];
        let x = document.getElementsByClassName('tutorials');
        for (i = 0; i < x.length; i++) { 
            if (x[i].innerText == csvdata[i][0]) {
                x[i].href = csvdata[i][1];
            }          
        }
    });
