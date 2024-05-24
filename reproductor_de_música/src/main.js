
class songs {
  constructor(id, name, artista, album, genero, duracion, urlportada, urlcancion, isFavorite = false, onPlaylist = false, ) {
      
    this.id = id;
    this.name = name;
    this.artista = artista;
    this.duracion = duracion;
    this.album = album;
    this.genero = genero;
    this.urlportada = urlportada;
    this.urlcancion = urlcancion;
    this.isFavorite = isFavorite;
    this.onPlaylist = onPlaylist;
  }

  getId () {
    return (this.id);
  }
  getName () {
    return (this.nombre); 
  }
  getArtista(){
    return (this.artista);
  }
  getDuracion(){
    return (this.duracion);
  }
  getAlbum () {
    return (this.album);
  }
  getGenero () {
    return (this.genero);
  }
  getUrlportada (){
    return (this.urlportada);
  }
  getUrlcancion () {
    return (this.urlcancion);
  }
}

/*New Songs (id = 1 Prueba)*/ 

class allsongs {
  bibliotecasongs; mainSong; mainPlaylist; audio; onPlaylist; isFavorite; stopSong; songsFilter; 
  constructor () {
    this.bibliotecasongs [
      new songs (1,  
        "Out of time",
        "The Weeknd",
        "Dawn FM",
        "R&B",
        "03:24",
        "./reproductor_de_música/portadas_tracks/out_of_time_portada.jpg",
        "./reproductor_de_música/tracks_canciones/out_of_time.mp3"
      ),
      new songs (2,
        "Adventure of Lifetime",
        "Coldplay",
        "A Head Full of Dreams",
        "Pop Rock",
        "04:23",
        "./reproductor_de_música/portadas_tracks/adventure_of_lifetime_portada.jpg",
        "./reproductor_de_música/tracks_canciones/adventure_of_lifetime.mp3" 
      ),
      new songs (3,
        "Can't Hold Us",
        "Macklemore",
        "The Heist",
        "Hip Hop", 
        "04:28",
        "./reproductor_de_música/portadas_tracks/cant_hold_us_portada.jpg",
        "./reproductor_de_música/tracks_canciones/cant_hold_us.mp3"
      ),
      new songs (4,
        "Como yo le Doy",
        "Pitbull ft. Don Miguelo",
        "Dale",
        "Dembow",
        "03:42",
        "./reproductor_de_música/portadas_tracks/como_yo_le_doy_portada.jpg",
        "./reproductor_de_música/tracks_canciones/como_yo_le_doy.mp3"
      ),
      new songs (5,
        "Englishman in New York",
        "Sting",
        "...Nothing Like the Sun",
        "Pop",
        "04:27",
        "./reproductor_de_música/portadas_tracks/englishman_in_new_york_portada.jpg",
        "./reproductor_de_música/tracks_canciones/english_man_in_new_york.mp3"
      ), 
      new songs (6,
        "Flowers",
        "Miley Cyrus",
        "Endless Summer Vacation",
        "Pop Alternativo",
        "03:20",
        "./reproductor_de_música/portadas_tracks/flowers_portada.jpg",
        "./reproductor_de_música/tracks_canciones/flowers.mp3"
      ), 
      new songs (7,
        "Gasolina",
        "Daddy Yankee",
        "Barrio Fino",
        "Reggaeton",
        "03:12",
        "./reproductor_de_música/portadas_tracks/gasolina_portada.jpg",
        "./reproductor_de_música/tracks_canciones/gasolina.mp3" 
      ), 
      new songs (8,
        "Genie in a Bottle",
        "Christina Aguilera",
        "Debut",
        "Pop",
        "03:36",
        "./reproductor_de_música/portadas_tracks/genie_in_a_bottle_portada.jpg",
        "./reproductor_de_música/tracks_canciones/genie_in_a_bottle.mp3"
      ), 
      new songs (9,
        "Havana",
        "Camila Cabello",
        "Havana",
        "Pop Latino, R&B",
        "03:36",
        "./reproductor_de_música/portadas_tracks/havana_portada.jpg",
        "./reproductor_de_música/tracks_canciones/havana.mp3"
      ), 
      new songs (10,
        "Hips Don't Lie",
        "Shakira",
        "Oral Fixation Vol.2",
        "Pop Latino",
        "04:00",
        "./reproductor_de_música/portadas_tracks/hips_dont_lie_portada.jpg",
        "./reproductor_de_música/tracks_canciones/hips_dont_lie.mp3"
      ), 
      new songs (11,
        "Labios Compartidos",
        "Maná",
        "Amar es combatir",
        "Pop Alternativo", 
        "05:37", 
        "./reproductor_de_música/portadas_tracks/labios_compartidos_portada.jpg",
        "./reproductor_de_música/tracks_canciones/labios_compartidos.mp3"
      ),
      new songs (12,
        "Leave The Door Open",
        "Bruno Mars",
        "An Everything with Silk Sonic",
        "R&B, Sould",
        "03:00",
        "./reproductor_de_música/portadas_tracks/leave_the_door_open_portada.jpg",
        "./reproductor_de_música/tracks_canciones/leave_the_door_open.mp3"
      ), 
      new songs (13,
        "Lessons in Love",
        "Level 42",
        "Running in the Family",
        "New Wave, Synth-Pop",
        "04:06",
        "./reproductor_de_música/portadas_tracks/lessons_in_love_portada.jpg",
        "./reproductor_de_música/tracks_canciones/lessons_in_love.mp3"
      ), 
      new songs (15,
        "Let's Get It Started",
        "The Black Eyes Peas",
        "Elephunk",
        "Hip Hop, R&B",
        "03:39",
        "./reproductor_de_música/portadas_tracks/lets_get_started_portada.jpg",
        "./reproductor_de_música/tracks_canciones/lets_get_started.mp3"
      ), 
      new songs (16,
        "Me Voy", "Julieta Venegas",
        "Limón y Sal",
        "Pop Alternativo",
        "03:07",
        "./reproductor_de_música/portadias_tracks/me_voy_portada.jpg",
        "./reproductor_de_música/tracks_canciones/me_voy.mp3"
      ), 
      new songs (17,
        "Me Estas Tentando",
        "Wisin y Yandel",
        "Me Estás Tentando",
        "Dembow, Reggaeton",
        "03:53",
        "./reproductor_de_música/portadas_tracks/me_estas_tentando_portada.jpg",
        "./reproductor_de_música/tracks_canciones/me_estas_tentando.mp3"
      ), 
      new songs (18, 
        "More Than A Woman",
        "Bee Gees",
        "Saturday Night Fever",
        "Disco",
        "05:00",
        "./reproductor_de_música/portadas_tracks/more_than_a_woman_portada.jpg",
        "./reproductor_de_música/tracks_canciones/more_than_a_woman.mp3"
      ), 
      new songs (19,
        "Muchacha Triste",
        "Los Fantasmas del Caribe",
        "Caramelo",
        "Música Tropical",
        "03:00",
        "./reproductor_de_música/portadas_tracks/muchacha_triste_portada.jpg",
        "./reproductor_de_música/tracks_canciones/muchacha_triste.mp3"
      ),
      new songs (20,
        "Need to Know",
        "Doja Cat",
        "Planet Her",
        "Rap, R&B",
        "03:30",
        "./reproductor_de_música/portadas_tracks/need_to_know_portada.jpg",
        "./reproductor_de_música/tracks_canciones/need_to_know.mp3"
      ), 
      new songs (21,
        "November Rain",
        "Guns N' Roses",
        "Use Your Illusion I",
        "Rock",
        "09:00",
        "./reproductor_de_música/portadas_tracks/november_rain_portada.jpg",
        "./reproductor_de_música/tracks_canciones/november_rain.mp3"), 
      new songs (22,
        "Ojos Marrones",
        "Lasso",
        "Eva",
        "Balada romántica, Pop",
        "03:18",
        "./reproductor_de_música/portadas_tracks/ojos_marrones_portada.jpg",
        "./reproductor_de_música/tracks_canciones/ojos_marrones.mp3"
      ), 
      new songs (23,
        "Rock Your Body",
        "Justin Timberlake",
        "Justified",
        "Hip Hop",
        "04:27",
        "./reproductor_de_música/portadas_tracks/rock_your_body_portada.jpg",
        "./reproductor_de_música/tracks_canciones/rock_your_body.mp3"
      ), 
      new songs (24,
        "Somebody That I Used to Know",
        "Gotye",
        "Making Mirrors",
        "Rock Alternativo, Art Pop",
        "04:35",
        "./reproductor_de_música/portadas_tracks/somebody_that_i_used_to_know_portada.jpg",
        "./reproductor_de_música/tracks_canciones/somebody_that_i_used_know.mp3"
      ), 
      new songs (25,
        "Seven Nation Army",
        "The White Stripes",
        "Elephant",
        "Rock",
        "03:52",
        "./reproductor_de_música/portadas_tracks/seven_nation_army_portada.jpg", 
        "./reproductor_de_música/tracks_canciones/seven_nation_army.mp3"
      ), 
      new songs (26,
        "The Real Slim Shady",
        "Eminem",
        "The Marshall Mathers LP",
        "Rap, Hip Hop",
        "04:47",
        "./reproductor_de_música/portadas_tracks/the_real_slim_shady_portada.jpg",
        "./reproductor_de_música/tracks_canciones/the_real_slim_shady.mp3"
      ), 
      new songs (27,
        "Titi Me Pregunto",
        "Bad Bunny",
        "Verano Sin Ti",
        "Reggaeton",
        "05:00",
        "./reproductor_de_música/portadas_tracks/titi_me_pregunto_portada.jpg",
        "./reproductor_de_música/tracks_canciones/titi_me_pregunto.mp3"
      ), 
      new songs (28,
        "Training Season",
        "Dua Lipa",
        "Illusion",
        "Pop",
        "03:29",
        "/reproductor_de_música/portadas_tracks/training_season_portada.jpg",
        "./reproductor_de_música/tracks_canciones/training_season.mp3"
      ), 
      new songs (29,
        "Vale la Pena",
        "Juan Luis Guerra 4.40",
        "Ni es lo mismo ni es igual",
        "Música Tropical",
        "04:06",
        "./reproductor_de_música/portadas_tracks/vale_la_pena_portada.jpg",
        "./reproductor_de_música/tracks_canciones/vale_la_pena.mp3"
      ), 
      new songs (30,
        "What Was I Made For?",
        "Billie Ellish",
        "Barbie: The Album",
        "Pop Alternativo",
        "04:00",
        "./reproductor_de_música/portadas_tracks/what_i_was_made_for_portada.jpeg",
        "./reproductor_de_música/tracks_canciones/what_i_was_made_for.mp3"
      ), 
      new songs (31,
        "You Belong With Me",
        "Taylor Swift",
        "Fearless",
        "Pop",
        "03:52",
        "./reproductor_de_música/portadas_tracks/you_belong_with_me_portada.jpg",
        "./reproductor_de_música/tracks_canciones/you_belong_with_me.mp3"
      ), 
      new songs (32,
        "You Don't Own Me",
        "Saygrace ft. G-Eazy",
        "Suicide Squad: The Album",
        "R&B",
        "./reproductor_de_música/portadas_tracks/you_dont_own_me_portada.jpg",
        "./reproductor_de_música/tracks_canciones/you_dont_own_me.mp3"
      )
    ];
    this.mainSong = this.bibliotecasongs [0];
    this.onPlaylist = new Playlist ('onPlaylist', []);
    this.isFavorite = new Playlist ('isFavorite', []);
    this.mainPlaylist = 'Biblotecasongs';
    this.audio = new Audio ();

    this.stopSong = true
    this.songsFilter = [];
    this.showsongs();
  } 

  changeaudio (mainSongP, mainPlaylistP) {
    console.log('Event Ended');
    console.log("Main Song"+ mainSongP);
    console.log("Main Playlist"+ mainPlaylistP)
    let nextsong = this.nextMusic(nextsongsP.id, mainPlaylistP);
    this.showdetails = (nextsong.id, this.mainSong);
  }
}


\




class musicPlayist {

  songsList = [];
  constructor (namePlaylist, songsList){
    this.namePlaylist = namePlaylist;
    this.songsList = songsList;
  }
  getNamePlaylist () {
    return (this.namePlaylist);
  }
  getSongsList () {
    return (this.songsList);
  }
  addSong (songs) {
    this.songsList.push(songs);
  }
  deleteSong(idsong){
    this.songsList = this.songsList.filter(cancion => cancion.id != idsong)
  }
}

