var defaultSettings = {
    'fontSize': 1,
    'unit': 'em'
};

var fonts = {}

var stepSize = 0.15;

function biggerFont(id) {
    checkFontSettings(id);
    changeFontSize(id, stepSize);
}

function smallerFont(id) {
    checkFontSettings(id);
    changeFontSize(id, -stepSize);
}

function checkFontSettings(id) {
    if (!(id in fonts)) {
        console.log('new font settings for '+id);
        fonts[id] = {
            'fontSize': defaultSettings['fontSize'],
            'unit': defaultSettings['unit']
        }
    }
}

function changeFontSize(id, df) {
    settings = fonts[id];
    fontSize = settings['fontSize'] += df;
    unit = settings['unit'];
    var prop = 'font-size:'+fontSize+unit;
    $(id).setAttribute('style', prop);
}

function $(id) {
    return document.querySelector(id);
}

function $all(id) {
    return document.querySelectorAll(id);
}

function $addClass(id, cls) {
    $(id).classList.add(cls);
}

function $removeClass(id, cls) {
    $(id).classList.remove(cls);
}

function $hasClass(id, cls) {
    return $(id).classList.contains(cls);
}

function toggleTOC() {
    toggleMenu('.toc', '.tool-toc');
    if ($hasClass('.toc', 'empty')) {
        generateTOC('.text-ctt');
        $removeClass('.toc', 'empty');
    }
}

function closeTOC() {
    closeMenu('.toc', '.tool-toc');
}

function toggleMenu(idMenu, idBtn) {
    if ($hasClass(idBtn, 's')) {
        closeMenu(idMenu, idBtn);
    } else {
        openMenu(idMenu, idBtn);
    }
}

function openMenu(idMenu, idBtn) {
    $addClass(idBtn, 's');
    $addClass(idMenu, 's');
    $addClass('body', 's');
}

function closeMenu(idMenu, idBtn) {
    $removeClass(idBtn, 's');
    $removeClass(idMenu, 's');
    $removeClass('body', 's');
}

function generateTOC(id) {
    headings = $all(id+' *');
    toc = '';
    for (var i=0;i<headings.length;i++) {
        var heading = headings[i];
        var parts = heading.tagName.split('');
        if (parts[0] == 'H') {
            var int = parts[1];
            toc += '<li class="t'+int+'"><a onclick="closeTOC();" href="#'+heading.getAttribute('id')+'">'+heading.innerHTML+'</a></li>';
        }
    }
    $('.toc ul').innerHTML = toc;
}

