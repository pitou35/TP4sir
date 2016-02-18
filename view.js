

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
    console.log("dessin rectangle");
	console.log(this.epaisseur);
	console.log(this.couleur);
	
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



