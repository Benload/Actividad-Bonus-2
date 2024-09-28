
var albums = ['Whatever People Say I Am', 'Favourite Worst Nightmare', 'Humbug', 'Suck It and See', 'AM', 'Tranquility Base Hotel & Casino', 'The Car'];
var sales = [3.5, 2.4, 1.2, 1.5, 5.2, 0.8, 0.9];


var albumInfo = {
    'Whatever People Say I Am': 'Lanzado en 2006, es el álbum debut de Arctic Monkeys. Vendió 3.5 millones de copias y fue un éxito crítico y comercial.',
    'Favourite Worst Nightmare': 'Este álbum, lanzado en 2007, contiene temas icónicos como "Fluorescent Adolescent".',
    'AM': 'Lanzado en 2013, "AM" es considerado uno de los mejores álbumes de Arctic Monkeys con ventas de 5.2 millones de copias.',
    'Humbug': 'Publicado en 2009, "Humbug" marca un cambio en el sonido de la banda, con un enfoque más oscuro y psicodélico.',
    'Tranquility Base Hotel & Casino': 'Lanzado en 2018, este álbum es una aventura más experimental con un enfoque en el piano y letras conceptuales.',
    'Suck It and See': 'Lanzado en 2011, "Suck It and See" tiene un sonido más melódico y accesible que su predecesor. Combina indie rock con influencias pop. Vendió aproximadamente 1.5 millones de copias.',
    'The Car': 'Lanzado en 2022, "The Car" es el séptimo álbum de la banda. Combina elementos de música cinematográfica con letras complejas y reflexivas. Ha vendido alrededor de 900,000 copias.'
};

var trace = {
    x: albums,
    y: sales,
    type: 'bar',
    marker: {
        color: 'rgba(54,162,235,0.8)'
    }
};

var data = [trace];

// Opciones del gráfico
var layout = {
    title: 'Álbumes más vendidos de Arctic Monkeys',
    xaxis: {
        title: 'Álbumes'
    },
    yaxis: {
        title: 'Ventas (millones)'
    }
};


Plotly.newPlot('myPlot', data, layout);


var myPlot = document.getElementById('myPlot');

myPlot.on('plotly_click', function (data) {
    var clickedAlbum = data.points[0].x;
    var info = albumInfo[clickedAlbum];
    document.getElementById('albumInfo').innerHTML = `<strong>${clickedAlbum}</strong>: ${info}`;
    playSong(clickedAlbum);
});

