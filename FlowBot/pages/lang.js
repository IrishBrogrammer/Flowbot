
var lang = document.getElementById('languagedrop');

lang.style.cursor = 'pointer';
lang.onclick = function() {

    var drop = document.getElementById('languageselect');

    if ( drop.style.display != 'none' )
    {
        drop.style.display = 'none';
    }
    else
    {
        drop.style.display = 'block';   
    }
};



