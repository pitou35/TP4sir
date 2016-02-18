

Drawing.prototype.paint = function(ctx) {
	//console.log("test");
	//console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Rectangle.prototype.paint = function(ctx) {
   /*console.log("dessin rectangle");
	console.log(this.epaisseur);
	console.log(this.couleur);*/
	
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
	
    ctx.rect(this.X, this.Y, this.largeur, this.hauteur);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
	
	
    ctx.moveTo(this.xA, this.yA);
    ctx.lineTo(this.xB, this.yB);
    ctx.stroke();
};

Drawing.prototype.updateShapeList = function(form){
	
	var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
	var colour=document.getElementById('colour');
	var spinnerWidth=document.getElementById('spinnerWidth');
	var x = tableRef.childNodes.length;
	var newRow   = tableRef.insertRow(tableRef.rows.length);
	var newCell1  = newRow.insertCell(0);
	var newCell2  = newRow.insertCell(1);
	var newCell3  = newRow.insertCell(2);
	var newCell4  = newRow.insertCell(3);

	if(form instanceof Rectangle){
        
		var newText1  = document.createTextNode('Rectangle');
    }else if (form instanceof Line){
        
		var newText1  = document.createTextNode('Ligne');
		
	}
	var newText3  = document.createTextNode(spinnerWidth.value);
	var newText2  = document.createTextNode(colour.value);
	

    var newButton = document.createElement('button');
    newButton.id = x;
    newButton.setAttribute('class','btn btn-default');
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('onClick', 'drawing.removeShapeFromList(id)');
    
	newCell1.appendChild(newText1);
	newCell2.appendChild(newText2);
	newCell3.appendChild(newText3);
	newCell4.appendChild(newButton);
};

Drawing.prototype.removeShapeFromList = function(index) {
    
    this.removeForm(index);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawing.paint(ctx, canvas);
    var shapeList = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    while( shapeList.firstChild) {  
        shapeList.removeChild( shapeList.firstChild);
    }
    for(var x= 0, nb=drawing.forms.length;x<nb;x++){  
        drawing.updateShapeList(drawing.forms[x]);
    }
}



