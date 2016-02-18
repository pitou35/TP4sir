
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	
	this.onInteractionStart= function(DnD) {
		console.log("je commence à dessiner");
		var butRect = document.getElementById('butRect');
		var butLine=document.getElementById('butLine');
		var spinnerWidth=document.getElementById('spinnerWidth');
		var colour=document.getElementById('colour');
		
		
		this.currLineWidth= spinnerWidth.value;
		this.currColour=colour.value;
		
		this.currentShape = new Line(DnD.xDebut, DnD.yDebut, DnD.xFin, DnD.yFin, this.currLineWidth, this.currColour);
	}.bind(this);
	
	this.onInteractionUpdate= function(DnD) {
		console.log("je bouge la souris pour dessiner");
		this.currentShape = new Line(DnD.xDebut, DnD.yDebut, DnD.xFin, DnD.yFin, this.currLineWidth, this.currColour);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
	}.bind(this);
	
	this.onInteractionEnd= function(DnD) {
		console.log("j'ai fini de dessiner");
		this.currentShape = new Line(DnD.xDebut, DnD.yDebut, DnD.xFin, DnD.yFin, this.currLineWidth, this.currColour);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.addForm(this.currentShape);
		//On recree la liste de dessins du canvas
		drawing.paint(ctx, canvas);
	}.bind(this);
	
	
};


