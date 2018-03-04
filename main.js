document.getElementsByTagName('title')[0].innerHTML = 'bar';
window.history.pushState( {} , 'bar', '/bar' );
