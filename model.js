
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
	this.forms = new Array();
	
	this.addForm = function(form) {
		this.forms.push(form);
	};
	
	this.removeForm = function(index) {
		this.forms.splice(index,1);
	};
}

function Form(epaisseur, couleur){
	this.couleur=couleur;
	this.epaisseur=epaisseur;
}

function Rectangle(X, Y, largeur, hauteur, epaisseur, couleur){
	console.log("nouveau rectangle")
	Form.call(this, couleur, epaisseur);
	this.X=X;
	this.Y=Y;
	this.largeur=largeur;
	this.hauteur=hauteur;
}




function Line(xA, yA, xB, yB, epaisseur, couleur){
	Form.call(this, couleur, epaisseur);
	this.xA=xA;
	this.xB=xB;
	this.yA=yA;
	this.yB=yB;
}


