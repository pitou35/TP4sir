
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
	this.forms=new Array();
}

function Rectangle(X, Y, largeur, hauteur, epaisseur, couleur){
	Form.call(this, couleur, epaisseur);
	this.X=X;
	this.Y=Y;
	this.largeur=largeur;
	this.hauteur=hauteur;
}
Rectangle.prototype=new Form();

function Form(epaisseur, couleur){
	this.couleur=couleur;
	this.epaisseur=epaisseur;
}

function Line(xA, yA, xB, yB, epaisseur, couleur){
	Form.call(this, couleur, epaisseur);
	this.xA=xA;
	this.xB=xB;
	this.yA=yA;
	this.yB=yB;
}
Rectangle.prototype=new Form();