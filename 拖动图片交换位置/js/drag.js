function down(e){
	this.x=this.offsetLeft;
	this.y=this.offsetTop;
	this.mx=e.pageX;
	this.my=e.pageY;
	if(this.setCapture){
		this.setCapture();
		on(this,"mousemove",move);
		on(this,"mouseup",up);
	}else{
		this._move=move.bind(this);
		this._up=up.bind(this);
		processThis(this,up);
		on(document,"mousemove",this._move);
		on(document,"mouseup",this._up);	
	}
	
}
	
	function move(e){
		this.style.left=this.x+(e.pageX-this.mx)+"px";
		this.style.top=this.y+(e.pageY-this.my)+"px";
		
}
	function up(){
		if(this.releaseCapture){
		this.releaseCapture();
		off(this,"mousemove",move);
		off(this,"mouseup",up);
		}else{
			off(document,"mousemove",this._move);
			off(document,"mouseup",this._up);
		}
}
