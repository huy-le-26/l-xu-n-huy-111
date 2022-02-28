function myFuntion(){
    table =document.getElementById('thetable');
    row = document.getElementById('row').value;
    column = document.getElementById('column').value;
    for(let indexRow=0;indexRow<row;indexRow++){
        let x=table.insertRow(indexRow);
        for(let indexCol=0;indexCol<column;indexCol++){
            let y=  x.insertCell(indexCol);
            y.innerHTML=" "; 
        }
    }
}
