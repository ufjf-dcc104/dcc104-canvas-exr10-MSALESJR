/**
 * Created by Marcus on 21/06/2017.
 */
function Level() {
    this.grid = null;
}

Level.prototype.init = function (grid) {
    this.grid = grid;
}

Level.prototype.desenha = function (contexto) {
    this.grid.desenha(contexto);
}
