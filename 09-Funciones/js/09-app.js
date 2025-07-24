const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
    console.log(`Borrando canción con el id ${id}`)
    },
    playlist: function(nombrePlaylist){
        console.log(`Se ha creado la playlist con el nombre ${nombrePlaylist}`)
    },
    reproducirPlaylist: function(nombrePlaylist){
        console.log(`Se comenzará a reproducir la playlist ${nombrePlaylist}`)
    }
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(12);
reproductor.playlist('Rancheras');
reproductor.reproducirPlaylist('Vallenatos');

//playlist
//reproducir playlist

// El otro metodo para declarar borrar por fuera de la función.
reproductor.borrar = function(id){
    console.log(`Borrando canción con el id ${id}`)
};

reproductor.borrar(15);