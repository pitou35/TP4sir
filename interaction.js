
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	
	this.xDebut=0;
	this.xFin=0;
	this.yDebut=0;
	this.yFin=0;
	this.mouseDown=false;

	// Developper les 3 fonctions gérant les événements
	
	this.Pression=function(evt){
		if (this.mouseDown==false){
			this.mouseDown=true;
			this.xDebut=getMousePosition(canvas, evt).x;
			this.yDebut=getMousePosition(canvas, evt).y;
			pencil.onInteractionStart(this);
			/*console.log("xDebut"+this.xDebut);
			console.log("yDebut"+this.yDebut);*/
		}
	}.bind(this);
	
	this.Deplacement=function(evt){
		if (this.mouseDown==true){
			//this.mouseDown=true;
			this.xFin=getMousePosition(canvas, evt).x;
			this.yFin=getMousePosition(canvas, evt).y;
			pencil.onInteractionUpdate(this);
			/*console.log("xFin"+this.xFin);
			console.log("yFin"+this.yFin);*/
		}
		
	}.bind(this);
	
	this.Relachement=function(evt){
		if (this.mouseDown==true){
			this.mouseDown=false;
			pencil.onInteractionEnd(this);
			this.xFin=0;
			this.yFin=0;
			this.yDebut=0;
			this.xDebut=0;
			/*console.log("xFin"+this.xFin);
			console.log("yFin"+this.yFin);*/
		}
	}.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
	
	var Canvas = document.getElementById("myCanvas");
	canvas.addEventListener('mousedown', this.Pression, false);
	canvas.addEventListener('mousemove', this.Deplacement, false);
	canvas.addEventListener('mouseup', this.Relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



