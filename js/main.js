function copiarTelefone(btn) {
    navigator.clipboard.writeText('(31) 8765-4321');
    var p = btn.querySelector('p');
    var textoOriginal = p.textContent;
    p.textContent = 'Número copiado!';
    setTimeout(function() {
        p.textContent = textoOriginal;
    }, 2000);
}