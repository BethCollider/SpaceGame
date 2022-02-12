
//Hola Mario te comparto mis comentario a tu proyecto SpaceGame

//Los primeros renglones siempre estaran definidos por las variables gglobales que podemos
//utilizar en nuestro programa

//La declaracion de los estados de juegos necesita ser un datos numerico
// por lo que se declaran como 0 y 1
var PLAY = 1;
var END = 0;
var gameState = PLAY;
//Sedeclara que todos los obstaculos esten en grupo
var ObsGrup;


//Declarar variables con objetos
var cohete, coheteImg;
var obs1, obsImg;
//Carga la imagen del espacio que quieras
//var space, spaceImg;

//Funcion para cargar imagenes y efectos de Sonido
function preload(){
  coheteImg = loadImage("cohete.png");
   obsImg = loadImage("obs1.png");
  //  spaceImg = loadImage(".png");
   }

//Funcion de configuracion
function setup() {
  //Diseño de area de juego
  createCanvas(600,600);
  //Diseñoi de objeto 
  cohete = createSprite(300,500,50,50);
  //Se cargan las imagenes
  cohete.addImage(coheteImg);
  //Cambio de escala
  cohete.scale = 0.5;

  //Activa el objeto space 
  //Crear el objeto space
  // space = createSpace(0,0,600,600)
  //Carga la imagen
  // space.addImage (spaceImg);

  //Es necesario activar el sensor de colicion para que exista fisica entre los objetos
  cohete.setCollider("circle",0,0,40);
  //SE carga el grupo de objetos 
  ObsGrup = new Group ();
  
}

//Funcion de dibujo
function draw() 
{
  //Establecer color de fondo
  background(51);
//Se establece los estados de juego
//El estado PLAY establece jugabilidad 
  if(gameState === PLAY){
//Se carga la funcion que genera los meteoritos
    Obstaculos();

    //Activa velocidad del space
    //space.velocityY = 3;

    //Activa ciclo de repeticion de la imagen de fondo
    //if(space.y < 600){
      //space.y = space.width/4; 
   // }

//Control del cohete con las teclas
    if(keyDown("a")){
     cohete.position.x = cohete.position.x-4;
    }

    if(keyDown("d")){
     cohete.position.x = cohete.position.x+4;
    }

    //Se declara el evento que cambia de un estado de juego a otro
    if(ObsGrup.isTouching(cohete)){
      gameState = END;
     cohete.destroy();
    }
//Se define como es el esatdo de juego END
   } else if (gameState === END){
     ObsGrup.setVelocityEach(-1);
     background(0);
     fill("yellow");
     text("GAMEOVER",300,300);
    }
   
 
//Codigo para proyectar objetos
drawSprites();
}

//Se construyo una funcio para idicarle a los obstaculos como deben de proyectarse
function Obstaculos(){
  //Para activar los fotogramas incluimos programacion condicinal
  //Hasta que pasen 80 fotogramas, genera obstaculo
  if (frameCount % 80 === 0 ){
    obs1 = createSprite (200,10,50,50);
    obs1.addImage(obsImg);
    obs1.scale = 0.2;
    obs1.velocityY = 7;
    //Se utiliza para proyectar los obstaculos en posiciones aleatoreas
    obs1.x = Math.round(random(100,500));
    obs1.lifetime = 220;
    ObsGrup.add(obs1);
  }
}