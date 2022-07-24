document.addEventListener('click',function(e){
    if(typeof String().startsWith != 'function'){
        return;
    }

    if(e.target.id.startsWith("sas_defaultCloseButton_")){
        window.adsArea26328.isVisible = false;
        window.adsArea26328.isClosed = true;
        window.adsArea26328.refreshRate = 99**9;
    }
});