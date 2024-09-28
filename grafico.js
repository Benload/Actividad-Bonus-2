
var albums = ['WPSIATWIN', 'FWN', 'Humbug', 'Suck It and See', 'AM', 'TBHC', 'The Car'];
var sales = [3.5, 2.4, 1.2, 1.5, 5.2, 0.8, 0.9];


var albumInfo = {
    'WPSIATWIN': 'Lanzado en 2006, es el álbum debut de Arctic Monkeys. Vendió 3.5 millones de copias y fue un éxito crítico y comercial.',
    'FWN': 'Este álbum, lanzado en 2007, contiene temas icónicos como "Fluorescent Adolescent".',
    'AM': 'Lanzado en 2013, "AM" es considerado uno de los mejores álbumes de Arctic Monkeys con ventas de 5.2 millones de copias.',
    'Humbug': 'Publicado en 2009, "Humbug" marca un cambio en el sonido de la banda, con un enfoque más oscuro y psicodélico.',
    'TBHC': 'Lanzado en 2018, este álbum es una aventura más experimental con un enfoque en el piano y letras conceptuales.',
    'Suck It and See': 'Lanzado en 2011, "Suck It and See" tiene un sonido más melódico y accesible que su predecesor. Combina indie rock con influencias pop. Vendió aproximadamente 1.5 millones de copias.',
    'The Car': 'Lanzado en 2022, "The Car" es el séptimo álbum de la banda. Combina elementos de música cinematográfica con letras complejas y reflexivas. Ha vendido alrededor de 900,000 copias.'
};

var albumCover = {
    'Whatever People Say I Am That\'s What I\'m Not': 'imagenes/1.jpg',
    'Favourite Worst Nightmare': 'imagenes/2.jpg',
    'Humbug': 'imagenes/3.jpg',
    'Suck It and See': 'imagenes/4.jpg',
    'AM': 'imagenes/5.jpg',
    'Tranquility Base Hotel & Casino': 'imagenes/6.png',
    'The Car': 'imagenes/7.jpg'
};

var trace = {
    x: albums,
    y: sales,
    type: 'bar',
    marker: {
        color: '#1db954'
    }
};

var data = [trace];

var layout = {
    title: 'Ventas de Álbumes de Arctic Monkeys',
    plot_bgcolor: '#1b1b1b',
    paper_bgcolor: '#1b1b1b',
    font: {
        color: '#f5f5f5'
    },
    xaxis: {
        gridcolor: '#444',
    },
    yaxis: {
        title: 'Ventas (millones)',
        gridcolor: '#444',
    }
};
Plotly.newPlot('myPlot', data, layout);


var myPlot = document.getElementById('myPlot');

myPlot.on('plotly_click', function (data) {
    var clickedAlbum = data.points[0].x;
    var info = albumInfo[clickedAlbum];

    if (clickedAlbum == 'WPSIATWIN') {
        clickedAlbum = 'Whatever People Say I Am That\'s What I\'m Not';
    }
    else if (clickedAlbum == 'FWN') {
        clickedAlbum = 'Favourite Worst Nightmare';
    }

    else if (clickedAlbum == 'TBHC') {
        clickedAlbum = 'Tranquility Base Hotel & Casino';
    }

    document.getElementById('albumInfo').innerHTML = `<strong>${clickedAlbum}</strong> ${info}`;

    playSong(clickedAlbum);
    var cover = albumCover[clickedAlbum];
    document.getElementById('albumCover').src = cover;
});

