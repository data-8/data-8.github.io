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

function toggleTOC() {
    toggleMenu('.toc', '.tool-toc');
    if ($('.toc').hasClass('empty')) {
        generateTOC('.chapter-ctt');
        $('.toc').removeClass('empty');
    }
}

function closeTOC() {
    closeMenu('.toc', '.tool-toc');
}

function toggleMenu(idMenu, idBtn) {
    if ($(idBtn).hasClass('s')) {
        closeMenu(idMenu, idBtn);
    } else {
        openMenu(idMenu, idBtn);
    }
}

function openMenu(idMenu, idBtn) {
    $(idBtn).addClass('s');
    $(idMenu).addClass('s');
    $('body').addClass('s');
}

function closeMenu(idMenu, idBtn) {
    $(idBtn).removeClass('s');
    $(idMenu).removeClass('s');
    $('body').removeClass('s');
}

function generateTOC(id) {
    toc = '';
    levels = {};
    level = 0;
    $(id+' *').each(function() {
        var parts = $(this).prop('tagName').split('');
        if (parts[0] == 'H') {
            var int = +parts[1];
            if (int <= 2) {
                levels[int+1] = 0;
                if (int in levels) {
                    levels[int]++;
                } else {
                    levels[int] = 1;
                }
                num = [];
                for (var i=1;i<=int;i++) {
                    num.push(levels[i]);
                }
                toc += '<li class="t'+int+'"><a onclick="closeTOC();" href="#'+$(this).attr('id')+'">'+num.join('.')+'. '+$(this).html()+'</a></li>';
            }
        }
    });
    $('.toc ul').html(toc);
    // http://stackoverflow.com/a/13601384/4855984
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        scrollToHash(600, this.hash);
    });
}

function scrollToHash(delay, hash) {
    scrollToPosition(delay, ($(hash).offset().top - 100));
}

function scrollToPosition(delay, position) {
    $('html,body').delay(delay).animate({scrollTop: position}, 1000);
}

$(document).ready(function() {
    setTimeout(function() {
        if(window.location.hash != '') {
            scrollToHash(500, window.location.hash);
        }
    }, 1);
});