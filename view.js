
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint=function(ctx){
	ctx.rect(this.X, this.Y, this.X+this.largeur, this.Y+this.hauteur);
	ctx.stroke();
}

Line.prototype.paint = function(ctx) {
	ctx.beginPath();
    ctx.moveTo(this.xA, this.yA);
    ctx.lineTo(this.xB, this.yB);
    ctx.stroke();
	
}

Drawing.prototype.paint = function(ctx) {
     console.log(this.getForms());
     ctx.fillStyle = '#F0F0F0'; // set canvas' background color
     ctx.fillRect(0, 0, canvas.width, canvas.height);
     this.getForms().forEach(function(eltDuTableau) {
         // now fill the canvas
         eltDuTableau.paint(ctx);
     });
 };