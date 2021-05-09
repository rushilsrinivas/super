var canvas = new fabric.Canvas('myCanvas'); 
player_x = 200;

 player_y = 100;
  block_image_width = 30;
   block_image_height = 30;
    var player_object= "player.jpeg";
     var block_image_object= "";


      function player_update()
       { fabric.Image.fromURL("player.jpeg", function(Img) { 
           player_object = Img;
         player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
           player_object.set({ top:player_y, left:player_x });
            canvas.add(player_object);
         });

         } 
         
         function new_image(get_image)
          { fabric.Image.fromURL(get_image, function(Img) {
               block_image_object = Img;
             block_image_object.scaleToWidth(block_image_width);
              block_image_object.scaleToHeight(block_image_height);
               block_image_object.set({ top:player_y, left:player_x });
                canvas.add(block_image_object);
             });
             }
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);

    if(e.shiftKey==true&&keypress=="80"){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&&keypress=="77"){
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }


    if(keypress=="38"){
        up();
    }

    if(keypress=="40"){
        down();
    }
    if(keypress=="37"){
        left();
    }
    if(keypress=="39"){
        right();
    }

if(keypress=="67"){
    new_image("cap.png");
    console.log("cap");
}
if(keypress=="72"){
    new_image("hul.png");
    console.log("hul");
}
if(keypress=="73"){
    new_image("iro.png");
    console.log("iro");
}
if(keypress=="83"){
    new_image("spi.png");
    console.log("spi");
}
if(keypress=="84"){
    new_image("tho.png");
    console.log("tho");
}


}
function up(){
  if(player_y>=0){
      player_y=player_y-block_image_height;
      canvas.remove(player_object);
      player_update();
  }  
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        canvas.remove(player_object);
        player_update();
    }  
  }
  function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }  
  }
  function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }  
  }
function clear_area(){
    canvas.clearRect(0,0,canvas.width,canvas.height);
}