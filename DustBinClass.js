class Dust  {

constructor(x,y,width,height) {

  var prop1 = {
  
    isStatic : true 
  }

  this.body = Bodies.rectangle(x,y,width,height,prop1) ; 
  this.width = width ; 
  this.height = height  ; 
  World.add(world,this.body) ;  
}

display () {

  //imageMode(CENTER) ; 
  //image(this.image,this.body.position.x, this.body.position.y,this.width,this.height) ; 


    rectMode(CENTER) ; 

    rect(this.body.position.x, this.body.position.y, this.width, this.height) ; 
}







}