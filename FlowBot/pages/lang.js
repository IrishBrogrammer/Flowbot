
var lang = document.getElementById('languagedrop');
var drop = document.getElementById('languageselect');
 drop.style.display = 'none';
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



