window.tmzInimageSetup = function(adId){
    var siteId = window.inImageSiteId;
    window.inImageTmzr = {};
    window.inImageTmzr.lastBid = {};
    console.log(adId);
    var imgElements = document.getElementsByTagName("img");
    var cImgEl = [];
    var adsSize = "728x90";
    var rendered = false;
    if(adId=="undefined"){
        //console.log("Set to 0 height inimage");
        document.getElementById(siteId+"-30").style.height = "0px !important";
        return;
    } else {
        //console.log("Unset height for inimage");
        document.getElementById(siteId+"-30").style.height = "unset";
    }

    var bliinkDetected = false;
    var foundBid = false;
    tmzr.getBidResponsesForAdUnitCode("35757").bids.forEach(element => {
        //console.log("Check bid => " +element.adId);
        if(!foundBid){
            if(element.adId == adId){
                if(element.bidder == "bliink"){
                    /*bliinkDetected = true
                    if(window.top.document.getElementById("sas_35757_iframe")==null){
                        console.log("No sas 35757 iframe - B")
                        return;
                    }
                    var iframeDoc = window.top.document.getElementById("sas_35757_iframe").contentWindow.document;
                    setTimeout(function(){ tmzr.renderAd(iframeDoc, adId);}, 500);
                    return;*/
                }
                var adsSize = element.size;
                window.inImageAdsSize = adsSize;
            }
        }
    });

    if(!foundBid){
        window.inImageAdsSize = "728x90";
    }



    renderInImage = function(target, creaSrc){
        if(window.top.document.getElementById("sas_35757_iframe")==null){
            console.log("No sas 35757 iframe - A");
            return;
        }
        console.group("Inimage");
        var c = document.createElement('div');
        c.id = "tmzr-inimage";
        target.node.parentNode.insertBefore(c, target.node);
        c.append(target.node);
        c.style.position = "relative";

        var middleLayer = document.createElement('div');
        middleLayer.id = "tmzr-middle-layer";
        middleLayer.style.position = "absolute";
        middleLayer.style.bottom = "0px";
        middleLayer.style.left = "0px";
        middleLayer.style.width = "100%";
        middleLayer.style.display = "flex";
        middleLayer.style.justifyContent = "center";
        c.append(middleLayer);

        iframe = document.getElementById("sas_35757");
        iframe.style.position = 'relative';
        iframe.style.width = "auto";
        iframe.style.textAlign = "center";
        middleLayer.append(iframe);

        iframeDoc = window.top.document.getElementById("sas_35757_iframe").contentWindow.document;

        setTimeout(function(){
            var closeInImage = document.createElement('div');
            closeInImage.id = 'tmzr-in-image-close';
            closeInImage.style.backgroundColor = 'rgba(0,0,0,0.6)';
            closeInImage.style.width = '30px';
            closeInImage.style.height = '30px';
            closeInImage.style.borderRadius = '100%';
            closeInImage.style.display = 'flex';
            closeInImage.style.justifyContent = 'center';
            closeInImage.style.alignItems = 'center';
            closeInImage.style.position = 'absolute';
            closeInImage.style.top = '-15px';
            closeInImage.style.right = '-15px';
            closeInImage.style.cursor = 'pointer';
            closeInImage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'
            iframe.append(closeInImage);

            document.getElementById('tmzr-in-image-close').addEventListener("click", function(){
                document.getElementById("tmzr-middle-layer").style.display = "none";
            });
        }, 1500);



        window.inImageTmzr.lastBid.height = window.inImageAdsSize.split("x")[1];
        window.inImageTmzr.lastBid.width = window.inImageAdsSize.split("x")[0];
        setTimeout(function(){ tmzr.renderAd(iframeDoc, creaSrc);}, 500);


    }

    for(var i =0; i<imgElements.length; i++){
        var cImgObject = {}
        cImgObject.width = imgElements[i].offsetWidth
        cImgObject.height = imgElements[i].offsetHeight
        cImgObject.node = imgElements[i]
        cImgObject.match = 0
        console.log("Reading element");
        if(cImgObject.width>=adsSize.split("x")[0]&&cImgObject.height>=adsSize.split("x")[1]){
            cImgObject.match = 1
            if(!rendered){
                console.log('One container avaible');
                renderInImage(cImgObject, adId);
                rendered = true;
            }
        }
        cImgEl.push(cImgObject);

    }

    if(!rendered){
        document.getElementById("sas_35757").style.height = "0px";
    }
}