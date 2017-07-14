/**
 * Created by Marcus on 21/06/2017.
 */
var level  = null;
var tela = null;
var contexto = null;
var atual    = new Date();
var anterior = new Date();
var dt       = 0;
var dt_total = 0;

var grid = null;

function init(){
    tela = document.getElementById('tela');
    contexto = tela.getContext('2d');
    grid = new Grid();
    level = new Level();
    level.init(grid);
    requestAnimationFrame(drawFrame);
    initControls();
}

function drawFrame(){
    requestAnimationFrame(drawFrame);
    atual = new Date();
    dt = (atual  - anterior) / 1000 ;
    dt_total += dt;
    contexto.clearRect(0,0, tela.width, tela.height);
    level.desenha(contexto, dt);
    anterior = atual;
    contexto.fillStyle = 'yellow';
    contexto.font="20px Georgia";
    contexto.fillText("Game - Torres",305,25);

    contexto.fillStyle = 'yellow';
    contexto.font="20px Georgia";

    contexto.fillText("Tempo Restante : " + (grid.tempo - (Math.floor(dt_total))),32,25);

}

function initControls() {
    document.addEventListener('keydown', function(e){
        switch(e.keyCode){}
    });

    document.addEventListener('keyup', function(e){
        switch(e.keyCode){}
    });
}
