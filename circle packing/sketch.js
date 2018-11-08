var X=[] , Y=[] ,R=[];
var x,y,r,sem,i;

function setup() {
  createCanvas(window.innerWidth,700);
  noStroke();
  x=random(width);
  y=random(height);
  r=random(10);
  X[0]=x;
  Y[0]=y;
  R[0]=r;
}

function draw() {
  sem=0;
  x=random(width);
  y=random(height);
  r=random(50);
  for(i=0;i<X.length;i++)
    if((dist(X[i],Y[i],x,y)<(r+R[i]))||(x-r<0||x+r>width||y-r<0||y+r>height))
     sem=1;
  if(sem==0){
      fill(random(255),random(255),random(255));
      ellipse(x,y,2*r);
      X[i+1]=x;
      Y[i+1]=y;
      R[i+1]=r;}
  }
