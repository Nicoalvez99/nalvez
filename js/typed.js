var typed = new Typed('.typed', {
	strings: [
		'<p class="text-white element-typed">Analista de Redes SSR</p>',
		'<p class="text-white element-typed">Cisco Switches</p>',
		'<p class="text-white element-typed">Cisco Access Points</p>',
		'<p class="text-white element-typed">Cisco Wireless Controller</p>',
		'<p class="text-white element-typed">Fortinet Firewall</p>',
		'<p class="text-white element-typed">VPN IPsec</p>',
        '<p class="text-white element-typed">SD-WAN Configuration</p>'
	],
	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 30, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
