
const songUrls = {
    'Whatever People Say I Am That\'s What I\'m Not': 'canciones/A Certain Romance.mp3',
    'Favourite Worst Nightmare': 'canciones/Fluorescent Adolescent.mp3',
    'Humbug': 'canciones/Crying Lightning.mp3',
    'Suck It and See': 'canciones/Suck It And See.mp3',
    'AM': 'canciones/R U Mine.mp3',
    'Tranquility Base Hotel & Casino': 'canciones/Tranquility Base Hotel & Casino.mp3',
    'The Car': 'canciones/Big Ideas.mp3'
};


const player = new Tone.Player().toDestination();


function playSong(albumName) {
    const songUrl = songUrls[albumName];

    if (songUrl) {

        player.stop();


        player.load(songUrl).then(() => {
            player.start();
        });
    }
}
