var http = new XMLHttpRequest();
var url = 'https://c.tmyzer.com/c/?s=90615&f=1&fi=99';
http.open("GET", url, true);
http.send();
if (typeof(Array.prototype.multisplice) !== 'undefined') {
delete Array.prototype.multisplice;
}
if (typeof(Array.prototype.addWithoutDupliacte) !== 'undefined') {
delete Array.prototype.addWithoutDupliacte;
}
if (typeof(Array.prototype.removeElement) !== 'undefined') {
delete Array.prototype.removeElement;
}


            
            if (window.nugg != 1) {
            var random_cent = Math.floor(Math.random() * 100);
            var enable_sco = 0;
            window.pubstack_ab = "population:0";
            if(random_cent <= 10){enable_sco=1;window.pubstack_ab = "population:1";}
            function isEmpty(obj) {
            for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
            return false;
            }

            return true;
            }
                        var criteoCallback = function (data) {
            if (data && data.status === "OK") {
            sas.cmd.push(function () { sas.setPartnerId("79", data.userid); });
            }
            sas.cmd.push(function(){
            sas.render();
            });
            }

                        // GEN

            var generic = document.createElement("script");
            generic.setAttribute("type", "text/javascript");
            generic.setAttribute("src", "https://ced.sascdn.com/tag/1097/smart.js");
            document.head.appendChild(generic);

            var criteo_gum = document.createElement("script");
            criteo_gum.setAttribute("type", "text/javascript");
            criteo_gum.setAttribute("src", "https://gum.criteo.com/sync?c=147&r=2&j=criteoCallback");
            criteo_gum.setAttribute("async", "true");
            document.head.appendChild(criteo_gum);

            var smart_csync = document.createElement("script");
            smart_csync.setAttribute("type", "text/javascript");
            smart_csync.setAttribute("src", "https://csync-global.smartadserver.com/1097/CookieSync.html");
            smart_csync.setAttribute("async", "true");
            document.head.appendChild(smart_csync);

            var zeotap = document.createElement("script");
            zeotap.setAttribute("type", "text/javascript");
            zeotap.setAttribute("src", "https://spl.zeotap.com/mapper.js?env=mWeb&eventType=pageview&zdid=1258");
            zeotap.setAttribute("async", "true");
            zeotap.setAttribute("id", "zeo_mapping");
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.appendChild(zeotap);


            var pwidget_config = {
            publisherKey:"1sbtjc2sqopftf032cn",
            shareQuote:false
            };
            function loadScriptTemelio(url, callback) { var script = document.createElement("script");
            script.type = "text/javascript"; script.async = true;
            if (script.readyState) { script.onreadystatechange = function () {
            if (script.readyState == "loaded" || script.readyState == "complete") {
            script.onreadystatechange = null;
            if (callback && typeof callback === "function") { callback(); }

            } }; } else { script.onload = function () { if (callback && typeof callback === "function") { callback(); } }; }
            script.src = url;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            }
            loadScriptTemelio('https://tag.leadplace.fr/libJsLP.js', function () { libJsLeadPlace.SendtoLPbyIframe("id=MTIZ"); });

            var iframe = document.createElement("iframe");
            iframe.src = "https://onetag-sys.com/usync/?pubId=2a897e3f18e6769&cb=" + new Date().getTime();
            iframe.style.display = "none";
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.appendChild(iframe);

            (function(win, doc) {
            var id5 = {
            /*********** SETUP YOUR CONFIG BELOW ***********/
            partnerId : 12,     // provided by ID5
            cascades  : 9,      // max number of cascades to support
            hasTcfCmp : true,   // set to true to call an IAB TCF-compliant CMP
            debug     : false,  // set to true to output debug message (set to false for production)

            /*********** IMPLEMENTATION - DO NOT EDIT ***********/
            makeUrl: function() {
            var isSync = (typeof this.callType != 'undefined' && this.callType.toLowerCase() === 'sync' && this.myUid && this.myUid.length > 0);
            return 'https://id5-sync.com/'+(isSync?'s':'i')+'/'+this.partnerId+'/'+this.cascades+'.gif?'+(isSync?'puid='+encodeURIComponent(this.myUid)+'&':'')+'gdpr='+encodeURIComponent(this.gdprApplies||'')+'&gdpr_consent='+encodeURIComponent(this.consentData||'');
            },
            prepareId5Pixel: function() {
            this.log('Preparing pixel with doc.readyState:', doc.readyState);
            if(doc.readyState !== 'loading') {
            this.fireId5Pixel();
            } else {
            doc.addEventListener('DOMContentLoaded', function () {
            id5.fireId5Pixel();
            });
            }
            },
            fireId5Pixel: function() {
            var url = this.makeUrl();
            this.log('Firing ID5 pixel at url:', url);
            (new Image()).src = url;
            },
            processTcfResults: function(result) {
            this.log('Received TCF result', result);
            this.gdprApplies = result.gdprApplies;
            this.consentData = result.tcString;
            },
            init: function() {
            if(this.hasTcfCmp){
            try {
            win.__tcfapi('addEventListener', 2, function(data, success) {
            id5.processTcfResults(data);
            id5.prepareId5Pixel();
            });
            } catch (e) {
            id5.log('Exception received while calling TCF CMP', e);
            id5.prepareId5Pixel();
            }
            } else {
            id5.prepareId5Pixel();
            }
            },
            log: function(msg, data) {
            this.debug && console.log('[ID5] '+msg, data);
            }
            };
            id5.init();
            })(window, document);
                        // FIN GEN
            
            
            
            var tagsObject = {"26323":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"3","ad_triplelift_id":"MoneyTizer_GrandAngle_HDX","ad_triplelift_id_doublon":"MoneyTizer_GrandAngle_HDX_2","ad_sharethrough_desktop":"w9TUEcNWuk2nYjrWKB1cBGni","ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":"3or3RiVFf1190PNIjordqK45","ad_sharethrough_mobile_doublon":null,"ad_adyoulike":"ec743e31657602e9d220a087d699d91f","ad_adyoulike_doublon":"7532b000ce1e033058203df89ceaa631","ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":"d5jv24zaar7ikjrkHcnnVW","ad_33across_doublon":"ciMnVWzcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329029","form_ad_id":"3","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399771","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673454","tag_improve2":null,"tag_improve3":"22677433","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26323","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630051","form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"26322":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"1","ad_triplelift_id":"MoneyTizer_MegaBannerHaute_HDX","ad_triplelift_id_doublon":"MoneyTizer_MegaBannerHaute_HDX_2","ad_sharethrough_desktop":"uevsIvm575ehAVvY5YMJQNYl","ad_sharethrough_mobile":"TWpVZHErn9OwATL0UnP4Elck","ad_sharethrough_desktop_doublon":"Sm9PhrfMQ9n5GzJdG9tXN42c","ad_sharethrough_mobile_doublon":"BC22SESAy3okMvCtB7UKh8Sc","ad_adyoulike":"8b0ab0c233182188355bf921aec06adb","ad_adyoulike_doublon":"0807cbb40fccf70a3567d3d1bc5ecf62","ad_adyoulike_mobile":"9805d9a515b3bfe5f618cd0cea9d6615","ad_adyoulike_doublon_mobile":"84c82d568c9fd69e123be04807f52ea7","ad_33across":"byadUMza8r7ikjrkHcnnVW","ad_33across_doublon":"b-Z57yzcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":"cOVwNszcqr7ikjrkHcnnVW","ad_33across_mobile":"bL63hmza8r7ikjrkHcnnVW","form_improve_floor":null,"form_id":"329027","form_ad_id":"1","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399770","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673487","tag_improve2":null,"tag_improve3":"22677432","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26322","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630052","form_criteo_mobile":"1630061","part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"26706":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"20","ad_triplelift_id":"MoneyTizer_MegaSky_HDX","ad_triplelift_id_doublon":"MoneyTizer_MegaSky_HDX_2","ad_sharethrough_desktop":"So5rt5q54oVVMHufuidy346Z","ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":"Xou3MB55D8yocroYFwCRnEkh","ad_sharethrough_mobile_doublon":null,"ad_adyoulike":"6a64947068f3fe365ac1a55cd96a3493","ad_adyoulike_doublon":"bca7338d088aae0423a54d3494040ca7","ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":"aiQovMzaer7ikjrkHcnnVW","ad_33across_doublon":"cCVt0Azcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329034","form_ad_id":"20","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399768","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673485","tag_improve2":null,"tag_improve3":"22677430","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26706","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630132","form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"30012":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"28","ad_triplelift_id":"MoneyTizer_MegaBannerBasse_HDX","ad_triplelift_id_doublon":"MoneyTizer_MegaBannerBasse_HDX_2","ad_sharethrough_desktop":"12SkPAyrRNYtFBkq79NvqxJf","ad_sharethrough_mobile":"CgGjvtj4BZl6IqtZOKvFOenO","ad_sharethrough_desktop_doublon":"1GRXLSxrbcGX8fCGCxZZCtHv","ad_sharethrough_mobile_doublon":"91tWqHRJJX15HqRVdg335WNw","ad_adyoulike":"88a44940affe2c7d8d1da252693d12c2","ad_adyoulike_doublon":"64384cb36c5ab7eddf76feb019a254ec","ad_adyoulike_mobile":"6690b94d6b273a94d471e01caeae9c8c","ad_adyoulike_doublon_mobile":"93131074529919ce73ad1c93acfce9d5","ad_33across":"bCzQXWza8r7ikjrkHcnnVW","ad_33across_doublon":"cq1Z88zcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":"cSPxjGzcqr7ikjrkHcnnVW","ad_33across_mobile":"bQmeKgza8r7ikjrkHcnnVW","form_improve_floor":null,"form_id":"329036","form_ad_id":"28","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399767","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673484","tag_improve2":null,"tag_improve3":"22677429","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"30012","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630053","form_criteo_mobile":"1630060","part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"26325":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"5","ad_triplelift_id":"MoneyTizer_Skin_HDX_1","ad_triplelift_id_doublon":"MoneyTizer_Skin_HDX_2","ad_sharethrough_desktop":null,"ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":null,"ad_sharethrough_mobile_doublon":null,"ad_adyoulike":null,"ad_adyoulike_doublon":null,"ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":null,"ad_33across_doublon":null,"ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329885","form_ad_id":"5","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":"compatible=true","form_custom_display":"0","tag_appnexus":"24734067","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":null,"tag_improve2":null,"tag_improve3":null,"tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26325","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":null,"form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"45111":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"11","ad_triplelift_id":"MoneyTizer_InText_HDX_1","ad_triplelift_id_doublon":"MoneyTizer_InText_HDX_2","ad_sharethrough_desktop":null,"ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":null,"ad_sharethrough_mobile_doublon":null,"ad_adyoulike":"0fbbb0ae876b363546f57ab00e82fcd3","ad_adyoulike_doublon":"915e1c757352e36158d4b445cb3fd9a4","ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":"andN_Kzaer7ikjrkHcnnVW","ad_33across_doublon":"cG2HfWzcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329032","form_ad_id":"11","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399765","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673482","tag_improve2":null,"tag_improve3":"22677427","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"45111","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630089","form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"35757":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"30","ad_triplelift_id":null,"ad_triplelift_id_doublon":null,"ad_sharethrough_desktop":null,"ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":null,"ad_sharethrough_mobile_doublon":null,"ad_adyoulike":null,"ad_adyoulike_doublon":null,"ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":null,"ad_33across_doublon":null,"ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329037","form_ad_id":"30","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399764","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673481","tag_improve2":null,"tag_improve3":"22677426","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"35757","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":null,"form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"26711":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"19","ad_triplelift_id":"MoneyTizer_PaveBas_HDX","ad_triplelift_id_doublon":"MoneyTizer_PaveBas_HDX_2","ad_sharethrough_desktop":"aU6pJqBAcDswmhObxXhebkjE","ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":"TpZB451C6R8Puyb8lnDrpTTQ","ad_sharethrough_mobile_doublon":null,"ad_adyoulike":"705c30163223e640b1c45a21c455796f","ad_adyoulike_doublon":"5c1d6a8a7d8da72e8769f3041e603e38","ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":"btze1Sza8r7ikjrkHcnnVW","ad_33across_doublon":"ceb7Y0zcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329033","form_ad_id":"19","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399763","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673480","tag_improve2":null,"tag_improve3":"22677425","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26711","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630050","form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"79570":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"39","ad_triplelift_id":null,"ad_triplelift_id_doublon":null,"ad_sharethrough_desktop":null,"ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":null,"ad_sharethrough_mobile_doublon":null,"ad_adyoulike":null,"ad_adyoulike_doublon":null,"ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":null,"ad_33across_doublon":null,"ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329039","form_ad_id":"39","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":null,"tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":null,"tag_improve2":null,"tag_improve3":null,"tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"79570","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":null,"form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"26328":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"6","ad_triplelift_id":"MoneyTizer_Footer_HDX","ad_triplelift_id_doublon":"MoneyTizer_Footer_HDX_2","ad_sharethrough_desktop":"uvUcrgH1iI5FR6NxYAaO8zZX","ad_sharethrough_mobile":"Uh8Ls2TPFlPGbiy8tcW7hifd","ad_sharethrough_desktop_doublon":"k9kw1piB36xB6kGl2hAxV6NZ","ad_sharethrough_mobile_doublon":"YElGBy4wZ3aBCXAJT7k6Mmfb","ad_adyoulike":"8b2bd071f3581407a9d2ee02ab81501e","ad_adyoulike_doublon":"04d0d26ef25d77b4805986c42656ccbb","ad_adyoulike_mobile":"d5b0e319ed5c88cb47b8abdb035846b8","ad_adyoulike_doublon_mobile":"fc053f47a335f393cff149a396efd3e8","ad_33across":"bHj7xyza8r7ikjrkHcnnVW","ad_33across_doublon":"cKWxSQzcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":"cWWUx4zcqr7ikjrkHcnnVW","ad_33across_mobile":"bUpsAUza8r7ikjrkHcnnVW","form_improve_floor":null,"form_id":"329031","form_ad_id":"6","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399761","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673477","tag_improve2":null,"tag_improve3":"22677423","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26328","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630054","form_criteo_mobile":"1630059","part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"26324":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"4","ad_triplelift_id":"MoneyTizer_Sky_HDX","ad_triplelift_id_doublon":"MoneyTizer_Sky_HDX_2","ad_sharethrough_desktop":null,"ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":null,"ad_sharethrough_mobile_doublon":null,"ad_adyoulike":"124a49fd02dac9ddfb93ac78ebd1213b","ad_adyoulike_doublon":"4a244ab987f7eae13aed3e8fcc0ce828","ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":"d9-XQOzaar7ikjrkHcnnVW","ad_33across_doublon":"cu3J54zcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329030","form_ad_id":"4","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399760","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673476","tag_improve2":null,"tag_improve3":"22677422","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26324","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630055","form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"39287":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"31","ad_triplelift_id":"MoneyTizer_Billboard_HDX","ad_triplelift_id_doublon":"MoneyTizer_Billboard_HDX_2","ad_sharethrough_desktop":"cnZp3jM8RsxpDogLmgFSeDfO","ad_sharethrough_mobile":"J5WKjPqSC4jv2Fqt8HgkyMv0","ad_sharethrough_desktop_doublon":"q3WTelACOw37qQXcPBnvkNRe","ad_sharethrough_mobile_doublon":"Co6PRfTRvHN5vqBQXIrrQhlp","ad_adyoulike":"71baf2ac13d535c7f2a239e601a406f6","ad_adyoulike_doublon":"8b0cf2e6ca8f7919724a9beb1678dc6a","ad_adyoulike_mobile":"672010fb29ea34cf8263150111839fb8","ad_adyoulike_doublon_mobile":"0ac0d393251ba8f445ed362b5b774ea6","ad_33across":"adtYE6zaer7ikjrkHcnnVW","ad_33across_doublon":"cza4tczcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":"c0Guxwzcqr7ikjrkHcnnVW","ad_33across_mobile":"bYzPj0za8r7ikjrkHcnnVW","form_improve_floor":null,"form_id":"329038","form_ad_id":"31","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399759","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673475","tag_improve2":null,"tag_improve3":"22677421","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"39287","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630056","form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null},"26300":{"site_cmp":"2","site_ssp_pass":"0","site_cnil":"0","user_id":"86335","user_plateform":"ww","ad_id":"2","ad_triplelift_id":"MoneyTizer_PaveHaut_HDX","ad_triplelift_id_doublon":"MoneyTizer_PaveHaut_HDX_2","ad_sharethrough_desktop":"aa6jPKCn03DW8oVaGuoKahUA","ad_sharethrough_mobile":null,"ad_sharethrough_desktop_doublon":"jp3rORZQBAc2RXi0fhwXiNOY","ad_sharethrough_mobile_doublon":null,"ad_adyoulike":"d0ee9bca93ec443763d034457d4b33f4","ad_adyoulike_doublon":"6cabd0d20f9fb3cceab8056fe3f102a1","ad_adyoulike_mobile":null,"ad_adyoulike_doublon_mobile":null,"ad_33across":"bpjP6uza8r7ikjrkHcnnVW","ad_33across_doublon":"b-Z57yzcqr7ikjrkHcnnVW","ad_33across_doublon_mobile":null,"ad_33across_mobile":null,"form_improve_floor":null,"form_id":"329028","form_ad_id":"2","form_richaudience":null,"form_richaudience_mobile":null,"form_custom_code":null,"form_custom_var":null,"form_custom_display":"0","tag_appnexus":"24399749","tag_appnexus2":null,"form_id_rubicon":null,"form_between":null,"form_adpone":null,"form_adpone_mobile":null,"form_custom_placement":null,"tag_sovrn":null,"tag_sovrn_mobile":null,"tag_adyoulike":null,"tag_adyoulike_mobile":null,"tag_adyoulike_RON":null,"tag_adyoulike_mobile_RON":null,"tag_improve":"22673466","tag_improve2":null,"tag_improve3":"22677412","tag_lockerdome":null,"tag_spotx":null,"tag_justpremium":null,"ad_smart_id":"26300","site_novideo":"0","site_id":"90615","site_id_smart":"493709\/1541741","part_teads":"0","part_adyoulike":"1","part_criteo":"0","form_criteo":"1630087","form_criteo_mobile":null,"part_adform":"1","part_eplanning":"1","part_rtb_house":"0","part_adriver":"0","part_smilewanted":"0","site_imonomy":null,"site_forced_cmp":"0","site_districtm":null,"site_otm_ATF":null,"site_otm_BTF":null,"site_nano_ATF":null,"site_nano_BTF":null,"site_invibes_placement":null,"site_pubstack":"6efb04f6-089a-49f1-bb1c-948ef5b8cbd8","site_responsive":"1","site_blocklist":"0","site_seedtag":null,"form_seedtag_IT":null,"form_seedtag_FS":null,"site_id_rubicon_ATF":"1078232","site_id_rubicon_MTF":null,"site_id_rubicon_BTF":"1078316","site_doublon":"https:\/\/megazap-90615.fr","site_ads_txt":"19","site_ads_txt_auto":"0","site_showheroes":null,"site_id_rubicon_MOBILE":null,"site_date_validation":"2022-02-21","site_id_rubicon_FS":"1124634","site_nobid":null,"site_nobid_ATF":null,"site_nobid_BTF":null,"site_nobid_FS":null,"site_nobid_inimage":null,"part_nobid":"0","site_emx_ATF":null,"site_emx_BTF":null,"site_emx_FS":null,"site_adform":"0","site_openx_ATF":null,"site_openx_BTF":null,"site_openx_FS":null,"site_oftmedia_ATF":null,"site_oftmedia_BTF":null,"site_oftmedia_FS":null,"site_oftmedia_IT":null,"site_blueroostermedia_ATF":"24468063","site_blueroostermedia_BTF":"24468064","site_blueroostermedia_FS":"24468067","site_blueroostermedia_IT":"24468068","site_bluerooster_inimage":"24468065","site_admixer_ATF":null,"site_admixer_BTF":null,"site_admixer_FS":null,"site_admixer_inimage":null,"site_admixer_parallax":null,"form_admixer":null,"form_admixer_mobile":null,"part_admixer":"0","site_index_inimage":null,"site_adtelligent_ATF":null,"site_adtelligent_BTF":null,"site_adtelligent_FS":null,"site_adtelligent_IT":null,"part_blueroostermedia":"1","part_zemanta":"0","part_adtelligent":"0","site_roix_ATF":null,"site_roix_BTF":null,"site_roix_FS":null,"site_roix_IT":null,"site_index_ATF":null,"site_index_BTF":null,"site_index_FS":null,"site_connectad_ATF":null,"site_connectad_BTF":null,"site_connectad_FS":null,"site_index_IT":null,"site_yahoo":null,"site_yahoo_ATF":null,"site_yahoo_BTF":null,"site_yahoo_FS":null,"site_yahoo_IT":null,"site_yahoo_inimage":null,"site_yahoo_parallax":null,"site_teads_HB":null,"site_teads_HB_display":null,"site_aol_server":"FR","site_onetag":"1","site_adagio":"90615-megazap-fr","site_triplelift":"0","site_theme":"12","site_true_url":"https:\/\/www.megazap.fr","site_refresh":"1.00","site_capping":"50","site_vidazoo":null,"theme_teads_inbanner_pageid":"140858","theme_teads_intext_pageid":"140857","theme_teads_intext":"154591","theme_teads_inbanner":"154592","theme_name_english":"news","theme_showheroes":null,"subtheme_name_english":"Other","part_google":"0","part_triplelift":"0","part_sharethrough":"2","site_confiant":"0","part_connectad":"0","part_improve":"1","part_index":"-1","part_feedad":"0","part_impactify":"0","part_oftmedia_skin":"0","part_adpone":"0","site_bliink":null,"part_bliink":"0","site_adtelligent_inimage":null,"part_33across":"0","part_vidoomy":"0","form_vidoomy":null,"form_vidoomy_mobile":null}};
            window._qevents = window._qevents || [];
            window.moneycaching=false;
            (function() {
            var elem = document.createElement('script');
            elem.src = "https://secure.quantserve.com/quant.js";
            elem.async = true;
            elem.type = "text/javascript";
            var scpt = document.getElementsByTagName('script')[0];
            scpt.parentNode.insertBefore(elem, scpt);
            })();

            window._qevents.push({
            qacct:"p-6Fv0cGNfc_bw8",
            labels:"Categories.news"
            });
            var website = (window.location != window.parent.location) ? document.referrer: document.location.href;
            params = {
            "cat":"news",
            "sscat":"Other"
            };
                                            (function(c,a,p,t,i,f,y){i=c.createElement(a);t=c.getElementsByTagName(a)[0];i.type='text/javascript';i.async=true;i.src=p;t.parentNode.insertBefore(i,t);})(document,'script','https://p.cpx.to/p/12761/px.js');
                                            var random = Math.floor(Math.random() * 10);
                if(random == 1){
                var pubstack = document.createElement("script");
                pubstack.setAttribute("type", "text/javascript");
                pubstack.setAttribute("src","https://boot.pbstck.com/v1/tag/6efb04f6-089a-49f1-bb1c-948ef5b8cbd8");
                pubstack.setAttribute("async", "true");
                var headelement = document.getElementsByTagName('head')[0];
                headelement.appendChild(pubstack);
                }
            

                            var notifyme = document.createElement("script");
                notifyme.setAttribute("type", "text/javascript");
                notifyme.setAttribute("src", "https://d2zur9cc2gf1tx.cloudfront.net/a96081b6-db78-48c4-9f82-b93e316fb1f7/notifyme.js");
                var headelement = document.getElementsByTagName('head')[0];
                headelement.appendChild(notifyme);

                        
            var ix_lib = document.createElement("script");
            ix_lib.setAttribute("type", "text/javascript");
            ix_lib.setAttribute("src","https://js-sec.indexww.com/ht/p/186329-261067657875242.js");
            ix_lib.setAttribute("async", "true");
            document.getElementsByTagName('head')[0].appendChild(ix_lib);
                        window.nugg = 1;
            var tmzr = (typeof tmzr != "undefined")? tmzr : {} ;
            tmzr.que = tmzr.que || [];

            var d = document, pbs = d.createElement('script');
            pbs.setAttribute("type","text/javascript");

            var random_sw = Math.floor(Math.random() * 2);
                                                    pbs.setAttribute("src","https://ads.themoneytizer.com/moneybid6_13/build/dist/prebid.js");
                        pbs.setAttribute("async", "true");
            var headelement = document.getElementsByTagName('head')[0];
            headelement.insertBefore(pbs, headelement.firstChild);

                        var format_size = {"30":[[728,90],[320,100],[300,100]],"1":[[728,90]],"2":[[300,250],[300,168]],"3":[[300,600],[300,250]],"4":[[120,600]],"19":[[300,250],[300,168]],"20":[[160,600]],"26":[[300,250]],"28":[[728,90]],"15":[[250,300],[336,280],[320,50],[300,100],[320,480],[300,50],[320,100]],"31":[[970,250],[800,250],[950,250],[900,250],[970,90]],"35":[[160,600]],"11":[[640,320]]};
            var format_size_ix = {"30":[[728,90],[320,100]],"1":[728,90],"2":[300,250],"3":[300,600],"4":[120,600],"19":[300,250],"20":[160,600],"26":[300,250],"28":[728,90],"15":[300,100],"31":[970,250],"36":[728,90],"35":[160,600],"11":[640,480],"6":[728,90],"5":[1800,1000]};
            var format_w_adform = {"1":728,"2":300,"3":300,"4":120,"19":300,"20":160,"26":300,"28":728,"15":300,"31":970,"36":728,"35":160,"11":640,"6":728,"5":1800};
            var format_h_adform = {"1":90,"2":250,"3":600,"4":600,"19":250,"20":600,"26":250,"28":90,"15":100,"31":250,"36":90,"35":600,"11":480,"6":90,"5":1000};
            var format_size_rubicon = {"26322":"2","26300":"15","26323":"10,15","26324":"8","26711":"15","26706":"9","28108":"15","30012":"2","26755":"2,43,67,44,59,117,16","39287":"57","50677":"9","26325":"68"};
            var format_criteo = {"1":"1085567","2":"1085565","3":"1095714","31":"1085641","4":"1085632","19":"1085566","20":"1085636","28":"1085567","15":"1085643"};
            var format_pulsepoint = {"1":"728x90","2":"300x250","3":"300x600","4":"120x600","19":"300x250","20":"160x600","26":"300x250","28":"728x90","15":"320x50","31":"970x250","35":"160x600"};
            var between_w = {"1":"728","2":"300","3":"300","4":"120","31":"970","20":"160","19":"300","28":"728"};
            var between_h = {"1":"90","2":"300","3":"600","4":"90","31":"250","20":"600","19":"250","28":"90"};
            function GetRichAudienceZone(format,desktop,mobile){
            if(format == 1 || format == 28 || format == 6 || format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var ra_zone = mobile;
            }else{
            var ra_zone = desktop;
            }
            }else{
            var ra_zone = desktop;
            }
            return ra_zone;
            }
            function GetAdmixerZone(format,desktop,mobile){
            if(format == 1 || format == 28 || format == 6 || format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var ra_zone = mobile;
            }else{
            var ra_zone = desktop;
            }
            }else{
            var ra_zone = desktop;
            }
            return ra_zone;
            }
            function GetGothamadsZone(format,desktop,mobile){
            if(format == 1 || format == 28 || format == 6 || format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var go_zone = mobile;
            }else{
            var go_zone = desktop;
            }
            }else{
            var go_zone = desktop;
            }
            return go_zone;
            }
            function GetmnameAdform(format,mname){
            if((format == 1 || format == 28 || format == 31 || format == 6) && ((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i))){
            var name = "f"+mname+"m";
            }else{
            var name = "f"+mname;
            }
            return name
            }
            function GetwAdform(format){
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 320;
            }else{
            var my_sizes = 728;
            }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 300;
            }else{
            var my_sizes = 970;
            }
            }else if(format == 6){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 320;
            }else{
            var my_sizes = 728;
            }
            }else{
            var my_sizes = format_w_adform[format];
            }
            return my_sizes;
            }
            function GethAdform(format){
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 100;
            }else{
            var my_sizes = 90;
            }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 250;
            }else{
            var my_sizes = 250;
            }
            }else if(format == 6){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = 100;
            }else{
            var my_sizes = 90;
            }
            }else{
            var my_sizes = format_h_adform[format];
            }
            return my_sizes;
            }
            function GetsizeIndex(format){
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [320,50];
            }else{
            var my_sizes = [728,90];
            }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [300,250];
            }else{
            var my_sizes = [970, 250];
            }
            }else if(format == 6){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [320,50];
            }else{
            var my_sizes = [728,90];
            }
            }else{
            var my_sizes = format_size_ix[format];
            }
            return my_sizes;
            }
            function Getsize(format,custom_footer){
            var custom_footer = custom_footer || 0;
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
                            var my_sizes = [[320,50],[300,50],[320,100],[300,100]];
                        }else{
                            var my_sizes = [[728,90],[320,50],[300,50],[320,100],[300,100]];
                        }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [[300,250]];
            }else{
            var my_sizes = [[970, 250],[1000, 30],[1000, 90],[800, 250],[950, 250],[900, 250],[970, 90]];
            }
            } else if(format == 30){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [[320,100],[300,100]]
            //console.log('Mobile')
            }else{
            var my_sizes = [[728, 90], [320, 100], [300, 100]];
            //console.log('Not mobile');
            }
            } else if(format == 6){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [[1,1],[320,50],[300,50],[320,100],[300,100]];
            }else{
            if(custom_footer == 1){
            var my_sizes = [[1,1],[728,90],[970,90],[1000,90],[1000,30],[990,90],[950,90]];
            }else{
            var my_sizes = [[1,1],[728,90],[970,90],[1000,90],[1000,30],[990,90],[950,90],[300,250]];
            }
            }
            }else{
            var my_sizes = format_size[format];
            }
            return my_sizes;
            }
            function GetsizeRubicon(format){
            if(format == 26322 || format == 30012){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = [43,67,44,59,117,16];
            return my_size
            }else{
            var my_sizes = [2,43,67,44,59,117,16];
            }
            }else if(format == 39287){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = '15';
            }else{
            var my_sizes = [15,57,55,56,116,125];
            }
            }else{
            var my_sizes = format_size_rubicon[format];
            }
            return [my_size];
            }
            function GetPulseSize(format){
            if(format == 1 || format == 28){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = '320x50';
            }else{
            var my_sizes = '728x90';
            }
            }else if(format == 31){
            if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            var my_sizes = '300x250';
            }else{
            var my_sizes = '970x250';
            }
            }else{
            var my_sizes = format_pulsepoint[format];
            }
            return my_sizes;
            }

            tmzr.que.push(function(){
            
            var videoAdUnit = [                    {
                    code: 'video',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/45111",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/45111"
                            }
                        }
                    },
                    sizes: [
                    [300, 250],
                    [300, 50],
                    [355, 50],
                    [640, 480]
                    ],
                    mediaTypes: {
                    banner: {
                    sizes: [
                    [300, 250],
                    [300, 50],
                    [355, 50],
                    [640, 480]
                    ]
                    },
                                          },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:11                    }
                    },

                                            {bidder: 'appnexus',
                        params:{
                        placementId: '24399765'
                        }
                        },                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                    {
                        bidder: "smilewanted",
                        params: {
                                                    zoneId: "themoneytizer.com_header_bidding_display_1"
                                                }
                        },
                                                                                                                            {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-11"
                        }
                        },
                                                                                                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468068',
                        video: {
                        skippable: false,
                        playback_method: ['auto_play_sound_off']
                        }
                        }
                        },                                        
                                                                {
                        bidder: 'improvedigital',
                        params: {
                        placementId: '22677427'
                        }
                        },
                                                                {
                        bidder: 'adyoulike',
                        params: {
                        placement: '915e1c757352e36158d4b445cb3fd9a4'
                        }
                        },
                                                                                                    ]},
                ]
            var nativeAdUnit = []
            var skinAdUnit = [                    {
                    code: '26325',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/26325",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/26325"
                            }
                        }
                    },
                    mediaTypes: {
                    banner: {
                    sizes:[[1, 1],[1800, 1000]]
                    }
                    },
                    bids: [
                                                                                                        {
                        bidder: "smilewanted",
                        params: {
                        bidfloor:0.50,
                                                    zoneId: "themoneytizer.com_header_bidding_display_1"
                                                }
                        },
                                                                                                        {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                    {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.50
                        }
                        },
                                                                                    {
                        bidder: 'appnexus',
                        params: {
                        placementId: '24734067',
                        reserve: 0.50
                        }
                        },
                                        
                                                            ]},
                ]

            var footerAdUnit = [                    {
                    code: '26328',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/26328",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/26328"
                            }
                        }
                    },
                    sizes:  Getsize('6','0'),
                    mediaTypes: {
                    banner: {
                    sizes:Getsize('6','0')
                    }
                    },
                    bids: [
                                                                                                                                                                    {
                        bidder: "smilewanted",
                        params: {
                                                    zoneId: "themoneytizer.com_header_bidding_display_1"
                                                }
                        },
                                                                                                                                                {
                        bidder: 'adyoulike',
                        params: {
                        placement: '04d0d26ef25d77b4805986c42656ccbb'
                        }
                        },
                                                                                
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-6"
                        }
                        },
                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_26328',
                        placement: '6'
                        }
                        },
                                                            
                                            {
                        bidder: 'appnexus',
                        params: {
                        placementId: '24399761'
                        }
                        },
                                        
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('6','329031'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('6'),
                        h:GethAdform('6')

                        }
                        },
                                                                {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                        {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468067'
                        }
                        },                                                                                                        {
                        bidder: 'improvedigital',
                        params: {
                        placementId: '22677423'
                        }
                        },
                                                                {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1124634',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01
                        }
                        }
                                        ]},
                ]
            isEmpty(nativeAdUnit)&&whenFormatFctDefined(window,"Adcall_48311")&&window.Adcall_48311(),isEmpty(skinAdUnit)&&whenFormatFctDefined(window,"Adcall_26325")&&window.Adcall_26325(),isEmpty(footerAdUnit)&&whenFormatFctDefined(window,"Adcall_26328")&&window.Adcall_26328(),isEmpty(videoAdUnit)&&whenFormatFctDefined(window,"Adcall_video")&&window.Adcall_video();

            window.pubstack_publica ={adServer : 'smart-rtb+',tags: [ window.pubstack_ab ]};

            window.bidder_geo = 0;

            var adUnits = [                    {
                    code: '26323',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/26323",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/26323"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(3)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:3,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_26323',
                        placement: '3'
                                                    }
                        },
                                                                                                {
                            bidder: 'improvedigital',
                            params: {
                            placementId: '22677433'
                            }
                            },
                                            
                    
                                                                {bidder: 'appnexus',
                        params:{
                        placementId: '24399771'
                        }
                        },
                    
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-3"
                        }
                        },
                                                                                                                {
                            bidder: 'adyoulike',
                            params: {
                            placement: '7532b000ce1e033058203df89ceaa631'
                            }
                            },
                                                                    
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('3','329029'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('3'),
                        h:GethAdform('3')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468063'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },                    {
                    code: '26322',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/26322",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/26322"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(1)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:1,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_26322',
                        placement: '1'
                                                    }
                        },
                                                                                                {
                            bidder: 'improvedigital',
                            params: {
                            placementId: '22677432'
                            }
                            },
                                            
                    
                                                                {bidder: 'appnexus',
                        params:{
                        placementId: '24399770'
                        }
                        },
                    
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-1"
                        }
                        },
                                                                                                                {
                            bidder: 'adyoulike',
                            params: {
                            placement: '0807cbb40fccf70a3567d3d1bc5ecf62'
                            }
                            },
                                                                    
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('1','329027'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('1'),
                        h:GethAdform('1')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468063'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },                    {
                    code: '26706',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/26706",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/26706"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(20)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:20,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_26706',
                        placement: '20'
                                                    }
                        },
                                                                                                {
                            bidder: 'improvedigital',
                            params: {
                            placementId: '22677430'
                            }
                            },
                                            
                    
                                                                {bidder: 'appnexus',
                        params:{
                        placementId: '24399768'
                        }
                        },
                    
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-20"
                        }
                        },
                                                                                                                {
                            bidder: 'adyoulike',
                            params: {
                            placement: 'bca7338d088aae0423a54d3494040ca7'
                            }
                            },
                                                                    
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('20','329034'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('20'),
                        h:GethAdform('20')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468063'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },                    {
                    code: '30012',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/30012",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/30012"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(28)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:28,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_30012',
                        placement: '28'
                                                    }
                        },
                                                                                                {
                            bidder: 'improvedigital',
                            params: {
                            placementId: '22677429'
                            }
                            },
                                            
                    
                                                                {bidder: 'appnexus',
                        params:{
                        placementId: '24399767'
                        }
                        },
                    
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078316',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-28"
                        }
                        },
                                                                                                                {
                            bidder: 'adyoulike',
                            params: {
                            placement: '64384cb36c5ab7eddf76feb019a254ec'
                            }
                            },
                                                                    
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('28','329036'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('28'),
                        h:GethAdform('28')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468064'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },                    {
                    code: '35757',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/35757",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/35757"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(30)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:30,
                    country: window.bidder_geo
                    }
                    },
                                            // Bidders InImage?>
                                                                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                                                            {bidder: 'adagio',
                            params:{
                            organizationId: '1015',
                            site: '90615-megazap-fr',
                            adUnitElementId: 'sas_35757',
                            placement: '30'
                            }
                            },
                                                                            {
                            bidder: 'eplanning',
                            params: {
                            ci: "2a156"
                            ,ml: 1

                            }
                            },
                                                                            {
                            bidder: 'amx',
                            params: {
                            tagId: "dGhlbW9uZXl0aXplci5jb20",
                            adUnitId : "90615-30"
                            }
                            },
                                                                            {
                            bidder: 'adform',
                            params: {
                            inv: 2623,
                            mname: GetmnameAdform('30','329037'),
                            pdom: 'megazap.fr',
                            priceType: 'net',
                            rcur:'USD',
                            w:GetwAdform('30'),
                            h:GethAdform('30')
                            }
                            },
                                                                                                    {
                            bidder: "onetag",
                            params: {
                            pubId: "2a897e3f18e6769",
                            ext: {
                            unit: '90615'
                            }
                            }
                            },
                                                                                                                        
                                                    {bidder: 'blueroostermedia',
                            params:{
                            placementId : '24468065'
                            }
                            },
                        
                                                    {bidder: 'appnexus',
                            params:{
                            placementId: '24399764'
                            }
                            },
                                                                    
                    ]
                    },                    {
                    code: '26711',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/26711",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/26711"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(19)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:19,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_26711',
                        placement: '19'
                                                    }
                        },
                                                                                                {
                            bidder: 'improvedigital',
                            params: {
                            placementId: '22677425'
                            }
                            },
                                            
                    
                                                                {bidder: 'appnexus',
                        params:{
                        placementId: '24399763'
                        }
                        },
                    
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078316',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-19"
                        }
                        },
                                                                                                                {
                            bidder: 'adyoulike',
                            params: {
                            placement: '5c1d6a8a7d8da72e8769f3041e603e38'
                            }
                            },
                                                                    
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('19','329033'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('19'),
                        h:GethAdform('19')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468064'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },                    {
                    code: '79570',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/79570",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/79570"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(39)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:39,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_79570',
                        placement: '39'
                                                    }
                        },
                                                                                        
                    
                                        
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-39"
                        }
                        },
                                                                                                                                
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('39','329039'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('39'),
                        h:GethAdform('39')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468063'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },                    {
                    code: '26324',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/26324",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/26324"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(4)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:4,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_26324',
                        placement: '4'
                                                    }
                        },
                                                                                                {
                            bidder: 'improvedigital',
                            params: {
                            placementId: '22677422'
                            }
                            },
                                            
                    
                                                                {bidder: 'appnexus',
                        params:{
                        placementId: '24399760'
                        }
                        },
                    
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-4"
                        }
                        },
                                                                                                                {
                            bidder: 'adyoulike',
                            params: {
                            placement: '4a244ab987f7eae13aed3e8fcc0ce828'
                            }
                            },
                                                                    
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('4','329030'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('4'),
                        h:GethAdform('4')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468063'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },                    {
                    code: '39287',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/39287",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/39287"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(31)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:31,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_39287',
                        placement: '31'
                                                    }
                        },
                                                                                                {
                            bidder: 'improvedigital',
                            params: {
                            placementId: '22677421'
                            }
                            },
                                            
                    
                                                                {bidder: 'appnexus',
                        params:{
                        placementId: '24399759'
                        }
                        },
                    
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-31"
                        }
                        },
                                                                                                                {
                            bidder: 'adyoulike',
                            params: {
                            placement: '8b0cf2e6ca8f7919724a9beb1678dc6a'
                            }
                            },
                                                                    
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('31','329038'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('31'),
                        h:GethAdform('31')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468063'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },                    {
                    code: '26300',
                    ortb2Imp: {
                        ext: {
                            gpid: "/90615/megazap.fr/desktop/26300",
                            data: {
                                pbadslot: "/90615/megazap.fr/desktop/26300"
                            }
                        }
                    },
                    pubstack: window.pubstack_publica,
                    mediaTypes: {
                                                                                banner: {
                    sizes: Getsize(2)
                    }
                    },
                    bids: [
                    {bidder: 'moneytizer',
                    params:{
                    siteId:90615,
                    adId:2,
                    country: window.bidder_geo
                    }
                    },
                                                                                                                                                                                                                                                                    {bidder: 'adagio',
                        params:{
                        organizationId: '1015',
                        site: '90615-megazap-fr',
                        adUnitElementId: 'sas_26300',
                        placement: '2'
                                                    }
                        },
                                                                                                {
                            bidder: 'improvedigital',
                            params: {
                            placementId: '22677412'
                            }
                            },
                                            
                    
                                                                {bidder: 'appnexus',
                        params:{
                        placementId: '24399749'
                        }
                        },
                    
                                                                            {
                            bidder: "smilewanted",
                            params: {
                                                            zoneId: "themoneytizer.com_header_bidding_display_1"
                                                        }
                            },
                                            
                                            {bidder: 'rubicon',
                        params:{
                        accountId:'11740',
                        siteId: '38330',
                        zoneId:'1078232',
                        referrer:'https://www.megazap.fr',
                        inventory:{'siteid':['90615']},
                        keywords:[90615],
                        floor: 0.01

                        }
                        },
                                                                {
                        bidder: 'eplanning',
                        params: {
                        ci: "2a156"
                        ,ml: 1

                        }
                        },
                                                                                    {
                        bidder: 'amx',
                        params: {
                        tagId: "dGhlbW9uZXl0aXplci5jb20",
                        adUnitId : "90615-2"
                        }
                        },
                                                                                                                {
                            bidder: 'adyoulike',
                            params: {
                            placement: '6cabd0d20f9fb3cceab8056fe3f102a1'
                            }
                            },
                                                                    
                                            {
                        bidder: 'adform',
                        params: {
                        inv: 2623,
                        mname: GetmnameAdform('2','329028'),
                        pdom: 'megazap.fr',
                        priceType: 'net',
                        rcur:'USD',
                        w:GetwAdform('2'),
                        h:GethAdform('2')
                        }
                        },
                    


                                                                {bidder: 'blueroostermedia',
                        params:{
                        placementId : '24468063'
                        }
                        },
                                                            
                                                                                                        
                                            {
                        bidder: "onetag",
                        params: {
                        pubId: "2a897e3f18e6769",
                        ext: {
                        unit: '90615'
                        }
                        }
                        },
                                                                                                                        
                    ]
                    },];

            var format_criteo = {"1":"1085567","2":"1085565","3":"1095714","31":"1085641","4":"1085632","19":"1085566","20":"1085636","28":"1085567","15":"1085643"};
            tmzr.addAdUnits(videoAdUnit);
            tmzr.addAdUnits(nativeAdUnit);
            tmzr.addAdUnits(skinAdUnit);
            tmzr.addAdUnits(footerAdUnit);
            tmzr.addAdUnits(adUnits);

                        if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
            for (var i = 0; i < tmzr.adUnits.length; i++) {
            for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
            if (tmzr.adUnits[i].bids[j].bidder == "richaudience" && tmzr.adUnits[i].code == "26325") {
            tmzr.adUnits[i].bids.splice(j, 1);
            }
            }
            }
            }
                            tmzr.enableAnalytics([{provider: 'adagio'},
                                ]);
            
            function customSmart(adUnit,segments,data, bid) {
            var target = [];
            if (typeof(segments) == 'object' && segments.length > 0) {
            segments.forEach(function(entry) {
            if (target.indexOf('sd_rtd=' + entry) === -1) {
            target.push('sd_rtd=' + entry);
            }
            });
            if (target.length > 0) {
            window.Smart_SR_data = target.join(';');
            }
            }
            }

            tmzr.setConfig({useBidCache: true,
            ortb2:{
                site:{
                    name:'megazap.fr'
                }
            },
            realTimeData: {
                auctionDelay: 1000,
                dataProviders: [{
                    name: "SirdataRTDModule",
                    waitForIt: true,
                    params: {
                        partnerId: 29567,
                        key: 50,
                        setGptKeyValues: false,
                        contextualMinRelevancyScore: 50, //Min score to filter contextual category globally (0-100 scale)
                        actualUrl: top.location.href, //top location url, for contextual categories
                        bidders: [{
                            bidder: 'ix'
                        },{
                            bidder: 'smartadserver'
                        },{
                            bidder: 'criteo'
                        },{
                            bidder: 'rubicon'
                        },{
                            bidder: 'appnexus',
                            curationId: '27440',
                            customFunction: customSmart
                        }]
                    }
                }]
            },
                                    "schain": {
            "validation": "off",
            "config": {
            "ver":"1.0",
            "complete": 1,
            "nodes": [
            {
            "asi":"themoneytizer.com",
            "sid":"86335",
            "hp":1
            }
            ]
            }
            },
            rubicon: {singleRequest: true},
            improvedigital: {singleRequest: true,usePrebidSizes:true},userSync: {
            auctionDelay :30,
            filterSettings: {
            iframe: {
            bidders: '*',
            filter: 'include'
            },
            image: {
            bidders: '*',
            filter: 'include'
            }
            },
            userIds: [{
            name: "criteo"
            },
            {
            name: "quantcastId",
            },
            {
            name: "id5Id",
            params: {
            partner: 12
            },
            storage: {
            type: "html5",
            name: "id5id",
            expires: 45
            }
            },{
            name: "sharedId",
            params: {
            syncTime: 60
            },
            storage: {
            name: "sharedid",
            type: "cookie",
            expires: 28
            },
            }],syncsPerBidder: 50,syncDelay: 3000},enableSendAllBids: false, timeoutBuffer: 400 ,pubcid: {enable: true},disableAjaxTimeout: true, maxRequestsPerOrigin: 1,consentManagement: {
            gdpr: {
            cmpApi: 'iab',
            timeout: 20000,
            allowAuctionWithoutConsent: true
            }
            }});
            tmzr.bidderSettings = {
            onetag: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * 1.20*.9;
            },
            },
            otm: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .012;
            },
            },
            adriver: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .012;
            },
            },
            oftmedia: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .8;
            },
            },
            blueroostermedia: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .7;
            },
            },
            rubicon: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .9;
            },
            },
            adform: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .88;
            },
            },
            criteo: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * 1.10;
            },
            },
            teads: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * 1.10;
            },
            },
            roix: {
            bidCpmAdjustment : function(bidCpm){
            return bidCpm * .6;
            },
            },
            standard: {
            adserverTargeting: [{
            key: "hb_bidder",
            val: function(bidResponse) {
            if(bidResponse.bidderCode=="rubiconLite"){
            return "rubicon";
            }else if(bidResponse.bidderCode=="stickyadstv"){
            return "stickyads";
            }else{
            return bidResponse.bidderCode;
            }
            }
            }, {
            key: "hb_adid",
            val: function(bidResponse) {
            return bidResponse.adId;
            }
            },{
            key: "hb_height",
            val: function(bidResponse) {
            return bidResponse.height;
            }
            },
            {
            key: "hb_bid",
            val: function(bidResponse) {
            var cpm = bidResponse.cpm/1.22*1.2;
            if(bidResponse.adUnitCode == "video" || bidResponse.adUnitCode == "26328" || bidResponse.adUnitCode =="26325" || bidResponse.adUnitCode == "48311"){
            if (cpm < 0.10) {
            return (Math.floor(cpm * 50) / 50).toFixed(2);
            } else if (cpm < 5.00) {
            return (Math.floor(cpm * 20) / 20).toFixed(2);
            } else if (cpm < 40.00) {
            return (Math.floor(cpm * 2) / 2).toFixed(2);
            } else {
            return '40.00';
            }
            }else{
            return cpm;
            }
            }
            }]
            }
            };
            
            tmzr.requestBids({
            timeout: 3000,
            bidsBackHandler: function(bidResponses) {
            bid = tmzr.getHighestCpmBids('video')[0];
            window.vastUrl = bid && bid.vastUrl;
            window.targetingParams = tmzr.getAdserverTargeting();
            for (var property in window.targetingParams) {
            if (window.targetingParams.hasOwnProperty(property)) {
            whenFormatFctDefined(window, 'Adcall_'+property);
            }
            }

            }
            });
            });
            var counter_refresh = [];
            function Timeout(fn, interval) {
            var id = setTimeout(fn, interval);
            this.cleared = false;
            this.clear = function () {
            this.cleared = true;
            clearTimeout(id);
            };
            }
            var smart_prebid2 = {"26322":"55794","26300":"55789","26323":"55792","26324":"55798","26711":"55790","26706":"55795","30012":"55793","39287":"55791","50677":"55796","28108":"55797"};
            tmzr.getTrueHighestCpmBids = function(formatid) {
            var adid = tmzr.getAdserverTargeting(formatid)[formatid].hb_adid;
            var getBidResponsesForAdUnitCode = tmzr.getBidResponsesForAdUnitCode(formatid).bids;
            for(bid in getBidResponsesForAdUnitCode){
            if(getBidResponsesForAdUnitCode[bid].adId == adid) return [getBidResponsesForAdUnitCode[bid]];
            }
            return false;
            }
                            function refreshSlot(formatid,capping,viewability) {
                function checkBidderByName(arrayofbids,name){
                for(var i=0,l=arrayofbids.length;i<l;i++)
                if(arrayofbids[i].bidder == name)
                return arrayofbids[i];
                return null;
                }
                var arr_width = {26322:728,26300:300,26323:300,26324:120,26711:300,26706:160,28108:300,30012:728,39287:970,35:50677,51410:728,28108:300};
                var arr_height = {26322:90,26300:250,26323:600,26324:600,26711:250,26706:600,28108:150,30012:90,39287:250,35:50677,51410:90,28108:250};
                var strformatid = formatid.toString();
                if(counter_refresh[formatid] == null ){
                counter_refresh[formatid] = 0;
                }else{
                counter_refresh[formatid] = counter_refresh[formatid]+1;
                }
                if(counter_refresh[formatid] < capping){
                if(formatid==26300 || formatid==26711){
                document.getElementById("sas_"+formatid).style.width = "300px";
                document.getElementById("sas_"+formatid).style.height = "250px";
                document.getElementById("sas_"+formatid).style.margin = "auto";
                }
                if(formatid==26324){
                document.getElementById("sas_"+formatid).style.width = "120px";
                document.getElementById("sas_"+formatid).style.height = "600px";
                document.getElementById("sas_"+formatid).style.margin = "auto";
                }
                if((formatid==26322 || formatid==30012) && (typeof window.md !== 'undefined' && window.md.phone() === null)){
                document.getElementById("sas_"+formatid).style.width = "728px";
                document.getElementById("sas_"+formatid).style.height = "90px";
                document.getElementById("sas_"+formatid).style.margin = "auto";
                }
                if((formatid==26322 || formatid==30012) && (typeof window.md !== 'undefined' && window.md.phone() !== null)){
                document.getElementById("sas_"+formatid).style.width = "320px";
                document.getElementById("sas_"+formatid).style.height = "100px";
                document.getElementById("sas_"+formatid).style.margin = "auto";
                }
                document.getElementById("sas_"+formatid).innerHTML = "";
                tmzr.que.push(function() {

                if((typeof window.md !== 'undefined' && window.md.phone() !== null) || navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i)){
                for (var i = 0; i < tmzr.adUnits.length; i++) {
                for(var j = tmzr.adUnits[i].bids.length -1; j >= 0 ; j--){
                if (tmzr.adUnits[i].bids[j].bidder == "richaudience" && tmzr.adUnits[i].code == "26325") {
                tmzr.adUnits[i].bids.splice(j, 1);
                }
                }
                }
                }
                                tmzr.requestBids({
                adUnitCodes:[strformatid],
                bidsBackHandler: function() {

                                    sas.clean(formatid);
                    sas.clean(strformatid);
                    document.getElementById("sas_"+formatid).innerHTML = "";
                    if (document.getElementById('sas_intextContainer_10575040') !=null)
                    document.getElementById("sas_intextContainer_10575040").innerHTML = "";
                    if (document.getElementById('sas_intextContainer_10501870') !=null)
                    document.getElementById("sas_intextContainer_10501870").innerHTML = "";
                    var parentsas = window.parent.document.getElementById('sas_'+formatid) || window.top.document.getElementById('sas_'+formatid);

                    if(parentsas){
                    parentsas.innerHTML = "";
                    }
                                window.targetingParams = tmzr.getAdserverTargeting();
                sas.cmd.push(function() {
                tmzr.que.push(function() {
                bid = tmzr.getTrueHighestCpmBids(strformatid)[0];
                if (bid) {
                var hb_adid = window.targetingParams[strformatid].hb_adid;
                var sasBid = JSON.parse(JSON.stringify(bid));
                sasBid.cpm = window.targetingParams[strformatid].hb_bid;
                //console.log(window.targetingParams[strformatid]);
                bid.currency = bid.currency || "USD";
                }else{
                var sasBid = {};
                }
                sas.setHeaderBiddingWinner("sas_"+strformatid, sasBid);
                sas.render();

                });
                });
                if(window.targetingParams && !isEmpty(window.targetingParams[formatid]) && window.tm_getpublica == 1){
                var http = new XMLHttpRequest();
                var url = 'https://c.tmyzer.com/c/?s=90615&f='+tagsObject[formatid]['ad_id']+'&fi=2';
                http.open("GET", url, true);
                http.send();
                }
                window.targetingParams = window.targetingParams || [];
                sas.cmd.push(function() {
                    sas.setEids(tmzr.getUserIdsAsEids());
                });
                if(typeof Smart_SR_data === 'undefined'){
                Smart_SR_data ="";
                }
                sas.cmd.push(function() {
                sas.call("std", {
                tagId: 'sas_'+formatid,
                siteId: 493709,
                pageId: 1541741,
                formatId: formatid,
                target:Smart_SR_data,
                timeout: 3000,
                schain:  "1.0,1!themoneytizer.com,90615,1,megazap.fr,megazap.fr"},
                {
                networkId: 1097, domain: "https://ww1097.smartadserver.com",onNoad: function() {
                window.targetingParams = tmzr.getAdserverTargeting();
                if (bid && bid.bidder == "improvedigital" && bid.mediaType == "video") {
                    var arr_width_video ={26300:300,26711:300,26323:300,39287:444,45111:640};
                    var creatediv = document.createElement("div");
                    creatediv.id = formatid;
                    creatediv.setAttribute("style","width:"+arr_width_video[formatid]+"px;margin:auto;");
                    document.getElementById("sas_"+formatid).appendChild(creatediv);
                    var iframeDoc = document;
                }else{
                    var myiframe = document.createElement("iframe");
                    myiframe.frameBorder=0;
                    myiframe.width=arr_width[formatid]+"px";
                    myiframe.height=arr_height[formatid]+"px";
                    myiframe.id="sas_iframe_"+formatid;
                    myiframe.setAttribute("scrolling", "no");
                    myiframe.setAttribute("marginheight", 0);
                    myiframe.setAttribute("marginwidth", 0);
                    myiframe.setAttribute("topmargin", 0);
                    myiframe.setAttribute("leftmargin", 0);
                    myiframe.setAttribute("allowtransparency", true);
                    document.getElementById("sas_"+formatid).appendChild(myiframe);
                    var iframeDoc = myiframe.contentWindow.document;
                }
                var hb_adid = window.targetingParams[formatid].hb_adid;
                                if (bid && bid.mediaType != "native") {
                                            tmzr.renderAd(iframeDoc, hb_adid);
                                    }
                }});
                });
                var http = new XMLHttpRequest();
                var url = 'https://c.tmyzer.com/c/?s=90615&f='+tagsObject[formatid]['ad_id']+'&fi=1';
                http.open("GET", url, true);
                http.send();
                }
                });
                });
                }
                }
                function refreshSlotFooter(formatid, capping) {
                var strformatid = formatid.toString();

                if (counter_refresh[formatid] == null) {
                counter_refresh[formatid] = 0;
                } else {
                counter_refresh[formatid] = counter_refresh[formatid] + 1;
                }
                if (counter_refresh[formatid] < capping) {
                tmzr.que.push(function () {
                tmzr.requestBids({
                adUnitCodes: [strformatid], bidsBackHandler: function () {
                document.getElementById("sas_" + formatid).innerHTML = "";
                var parentsas = window.parent.document.getElementById('sas_' + formatid) || window.top.document.getElementById('sas_' + formatid);
                if (parentsas) {
                parentsas.innerHTML = "";
                }

                window.targetingParams = tmzr.getAdserverTargeting();

                window.targetingParams[formatid] = window.targetingParams[formatid] || 0;
                if (window.targetingParams[formatid] == 0) {
                var moneybid = "";
                } else {
                var hb_adid = "hb_adid=" + window.targetingParams[formatid].hb_adid;
                var hb_pb = "hb_pb=" + window.targetingParams[formatid].hb_bid;
                var hb_bidder = "hb_bidder=" + window.targetingParams[formatid].hb_bidder;
                if (window.targetingParams[formatid].hb_height == "250") {
                var hb_format = "hb_format=" + formatid + "-1";
                } else {
                var hb_format = "hb_format=" + formatid;
                }
                var moneybid = ";" + hb_adid + ";" + hb_pb + ";" + hb_bidder + ";" + hb_format;
                }

                sas.refresh(formatid,{target:moneybid});

                var http = new XMLHttpRequest();
                var url = 'https://c.tmyzer.com/c/?s=90615&f=' + tagsObject[formatid]['ad_id'] + '&fi=1';
                http.open("GET", url, true);
                http.send();
                }
                });
                });
                }
                }
                        }
            var refreshVisibility26322 = function(){
                        var observers = [];
            var fetchAdsArea = document.querySelectorAll('*[id^="sas_"]');
            var slowBidders = ["teads", "richaudience", "blueroostermedia","sharethrough"];
            window.slowBidders = slowBidders;

            var slowBiddersTimer = ["60000", "30000", "30000","40000"];
            var adsAreaId =26322;
            var visibleRefreshRate =19000;
            var invisibleRefreshRate =36000;
            var adsCappingLimit = 50;
            var slowdown = 60000;
            var evt = {};
            evt.lastPos = 0;
            evt.lastTime = Date.now();
            window.adsArea26322= {};
            var visibilitySupport = false;
            if ('IntersectionObserver' in window) {
            visibilitySupport = true;
            }
            var refreshTimeTableVisible = {
            26322: 19000,
            26300: 18500,
            26323: 20000,
            26324: 21500,
            26711: 18500,
            26706: 23000,
            28108: 27000,
            30012: 23500,
            39287: 19500,
            50677: 21000,
            51410: 22000,
            26328: 30000,
            35757: 40000
            };
            var refreshTimeTableInvisible = {
            26322: 36000,
            26300: 37000,
            26323: 49000,
            26324: 52000,
            26711: 47000,
            26706: 54000,
            28108: 56000,
            30012: 58000,
            39287: 60000,
            50677: 62000,
            51410: 57000,
            26328: 45000,
            35757: 60000
            };

            //window.adsArea26322= el;
            window.adsArea26322.isVisible = false;
            window.adsArea26322.refreshTimer = Date.now();
            window.adsArea26322.formatId = adsAreaId;
            window.adsArea26322.refreshRate = refreshTimeTableVisible[adsAreaId];
            window.adsArea26322.capping = 1;
            window.adsArea26322.cappingLimit = adsCappingLimit;


            if (visibleRefreshRate != undefined) {
            refreshTimeTableVisible[adsAreaId] = visibleRefreshRate;
            }
            if (invisibleRefreshRate != undefined) {
            refreshTimeTableInvisible[adsAreaId] = invisibleRefreshRate;
            }

            if (visibilitySupport) {
            var option = {
            root: null,
            rootMargin: '0px',
            threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
            }
            var callback = function (entries, observer) {
            entries.forEach(entry => {
            if (Math.floor(entry.intersectionRatio * 100) > 50 && !window.adsArea26322.isVisible) {
            window.adsArea26322.isVisible = true;
            window.adsArea26322.refreshRate = refreshTimeTableVisible[adsAreaId];
            } else if (Math.floor(entry.intersectionRatio * 100) < 50 && window.adsArea26322.isVisible) {
            window.adsArea26322.isVisible = false;
            window.adsArea26322.refreshRate = refreshTimeTableInvisible[adsAreaId];
            }
            });
            };

            observers26322 = new IntersectionObserver(callback, option, true, 1000);

                            observers26322.observe(document.querySelector("#sas_" + adsAreaId));
                        } else {
            window.adsArea26322.lastPos = 0;
            window.adsArea26322.lastTime = Date.now();
            evt.scroll = window.addEventListener('scroll', function (e) {
            if ((Math.abs(window.adsArea26322.lastPos - window.scrollY) > 100) || (Date.now() - window.adsArea26322.lastTime > 200)) {
            window.adsArea26322.lastPos = window.scrollY;
            window.adsArea26322.lastTime = Date.now();
            var visibilitySensor = true;
            el = document.querySelector('#sas_26322')
            style = window.getComputedStyle(el);
            if (style.getPropertyValue('display') == 'none') {
            visibilitySensor = false;
            }
            if (style.getPropertyValue('opacity') < 0.8) {
            visibilitySensor = false;
            }
            if (el.parentElement) {
            style = window.getComputedStyle(el.parentElement);
            if (style.getPropertyValue('overflow') == 'hidden' || style.getPropertyValue('overflow-x') == 'hidden' || style.getPropertyValue('overflow-y') == 'hidden') {
            if (el.parentElement.getBoundingClientRect.width < el.getBoundingClientRect.width || el.parentElement.getBoundingClientRect.height < el.getBoundingClientRect.height) {
            visibilitySensor = false;
            }
            }
            }
            if (
            el.getBoundingClientRect().top + (el.getBoundingClientRect().height / 2) < 0 ||
            el.getBoundingClientRect().left < 0 ||
            el.getBoundingClientRect().right > (window.innerWidth || document.documentElement.clientWidth) ||
            el.getBoundingClientRect().bottom - (el.getBoundingClientRect().height / 2) > (window.innerHeight || document.documentElement.clientHeight)
            ) {
            visibilitySensor = false;
            }
            if (visibilitySensor && !window.adsArea26322.isVisible) {
            window.adsArea26322.isVisible = true;
            window.adsArea26322.refreshRate = refreshTimeTableVisible[adsAreaId];
            } else if (!visibilitySensor && window.adsArea26322.isVisible) {
            window.adsArea26322.isVisible = false;
            window.adsArea26322.refreshRate = refreshTimeTableInvisible[adsAreaId];
            }
            }
            observers.push(evt);
            });
            }
            refreshQueueManager26322 = function (formatId, capping) {
            window.adsArea26322.capping++;
            window.adsArea26322.refreshTimer = Date.now();

            var isClosed = false;
            if(window.adsArea26322.isClosed != undefined){
                if(window.adsArea26322.isClosed){
                    isClosed = true
                }
            }

            if(formatId == 26328){
                if(isClosed == false){
                    refreshSlotFooter(26322, window.adsArea26322.capping);
                }
            }else{
            refreshSlot(26322, window.adsArea26322.capping,window.adsArea26322.isVisible);
            }
            }
            setInterval(function(){loopChecker26322();}, 1000);
            loopChecker26322 = function() {
            if (typeof tmzr.getAllWinningBids == 'undefined') {return}
                el = window.adsArea26322;
                if (!isNaN(el.refreshRate) && el.capping < el.cappingLimit && el.formatId != '26328') {
                    lastBidder26322 = {"bidderCode":undefined, "responseTimestamp":0};
                    tmzr.getAllWinningBids().forEach(function(bid){
                        if(bid.adUnitCode==el.formatId){
                            if(bid.responseTimestamp > lastBidder26322.responseTimestamp){
                                lastBidder26322 = bid;
                            }
                        }
                    })
                    window.adsArea26322.lastBidder = lastBidder26322;
                    if(slowBidders.indexOf(el.lastBidder.bidder)==-1){
                        slowdown = 0;
                    } else {
                        slowdown = parseInt(slowBiddersTimer[slowBidders.indexOf(el.lastBidder.bidder)]);
                    }
                    if ((window.adsArea26322.refreshTimer + el.refreshRate) < Date.now()) {
                        if(((el.refreshTimer + slowdown) < Date.now()) && slowBidders.includes(el.lastBidder.bidder) == true) {
                            refreshQueueManager26322(el.formatId, el.capping);
                        } else if(slowBidders.includes(el.lastBidder.bidder) == false){
                            refreshQueueManager26322(el.formatId, el.capping);
                        }
                    }
                } else if (el.formatId != '26325' && el.formatId != '26328' && el.capping < el.cappingLimit) {
                    lastBidder26322 = {"bidderCode":undefined, "responseTimestamp":0};
                    if(el.lastBidder == undefined || slowBidders.indexOf(el.lastBidder.bidder)==-1){
                        slowdown = 0;
                    } else {
                        slowdown = parseInt(slowBiddersTimer[slowBidders.indexOf(el.lastBidder.bidder)]);
                    }
                    tmzr.getAllWinningBids().forEach(function(bid){
                        if(bid.adUnitCode==el.formatId){
                            if(bid.responseTimestamp > lastBidder26322.responseTimestamp){
                                lastBidder26322 = bid;
                            }
                        }
                    })
                    window.adsArea26322.lastBidder = lastBidder26322;

                    if (window.adsArea26322.refreshTimer + 25000 < Date.now() && !slowBidders.includes(el.lastBidder.bidder)) {
                        refreshQueueManager26322(el.formatId, el.capping);
                    } else if ((window.adsArea26322.refreshTimer + slowdown < Date.now() && slowBidders.includes(el.lastBidder.bidder))) {
                        refreshQueueManager26322(el.formatId, el.capping);
                    }
                } else if (el.formatId == '26328' && el.capping < el.cappingLimit) {

                    lastBidder26322 = {"bidderCode":undefined, "responseTimestamp":0};
                    if(el.lastBidder == undefined || slowBidders.indexOf(el.lastBidder.bidder)==-1){
                        slowdown = 0;
                    } else {
                        slowdown = parseInt(slowBiddersTimer[slowBidders.indexOf(el.lastBidder.bidder)]);
                    }
                    tmzr.getAllWinningBids().forEach(function(bid){
                        if(bid.adUnitCode==el.formatId){
                            if(bid.responseTimestamp > lastBidder26322.responseTimestamp){
                                lastBidder26322 = bid;
                            }
                        }
                    })
                    window.adsArea26322.lastBidder = lastBidder26322;

                    if (window.adsArea26322.refreshTimer + el.refreshRate < Date.now()) {
                        refreshQueueManager26322(el.formatId, el.capping);
                    }
                }
            };
            }
                            if(typeof crtg_content === 'undefined'){var crtg_content = "";}
                var mydiv = document.getElementById("90615-1");
                var creatediv = document.createElement("div");
                creatediv.id = "sas_26322";
                                    if( navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/webOS/i)
                    || navigator.userAgent.match(/iPhone/i)
                    || navigator.userAgent.match(/iPad/i)
                    || navigator.userAgent.match(/iPod/i)
                    || navigator.userAgent.match(/BlackBerry/i)
                    || navigator.userAgent.match(/Windows Phone/i)){
                    creatediv.style.width = "320px";
                    creatediv.style.height = "100px";
                    }else{
                    creatediv.style.width = "728px";
                    creatediv.style.height = "90px";
                    }
                    creatediv.style.margin = "auto";
                
                if(1 == 2 && 1 == 1 && ((navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i))||(typeof window.md !== 'undefined' && window.md.phone() !== null))){
                var paragraphs = document.getElementsByTagName("p");
                var counter = paragraphs.length;
                var temp = 0;
                var myP = null;
                var myPNumber = null;
                var coeffFilterBegin = 0.1;
                var coeffFilterEnd = 0.8;
                var filterBegin = Math.ceil(coeffFilterBegin * counter);
                var filterEnd = Math.ceil(counter - (coeffFilterEnd * counter));
                var limitPargraphs = 4;

                function convertHtmlToText(inputText) {
                var regex = /(<([^>]+)>)/ig;
                var returnText = "" + inputText;
                returnText = returnText.replace(regex, "");
                return returnText;
                }

                if (paragraphs != null && counter > limitPargraphs) {
                for(var i = filterBegin; i < filterEnd; i++) {
                var filteringParagraphs = convertHtmlToText(paragraphs[i].innerHTML);
                var number = filteringParagraphs.split(' ').length;
                if (temp <= number) {
                temp = number;
                myP = filteringParagraphs;
                myPNumber = i;
                }
                }
                paragraphs[myPNumber].className += " aBigClassNameToAvoidCollision2";
                paragraphs[myPNumber].appendChild(creatediv);
                } else {
                var divs = document.getElementsByTagName("div");
                var counter = divs.length;
                var coeffFilterBeginDiv = 0.1;
                var filterBeginDiv = Math.ceil(coeffFilterBeginDiv * counter);
                if(divs[filterBeginDiv]){
                divs[filterBeginDiv].className += " aBigClassNameToAvoidCollision2";
                divs[filterBeginDiv].appendChild(creatediv);
                }else{
                mydiv.appendChild(creatediv);
                }
                }
                }else{
                mydiv.appendChild(creatediv);
                }
                window.Adcall_26322= function(){
                sas.cmd.push(function() {
                    sas.setEids(tmzr.getUserIdsAsEids());
                });
                sas.cmd.push(function() {
                var arr_width = {26322:728,26300:300,26323:300,26324:120,26711:300,26706:160,28108:300,30012:728,39287:970,35:50677,51410:728,28108:300};
                var arr_width_video ={26300:300,26711:300,26323:300,39287:444,45111:640};
                var arr_height = {26322:90,26300:250,26323:600,26324:600,26711:250,26706:600,28108:150,30012:90,39287:250,35:50677,51410:90,28108:250};
                var bid = tmzr.getHighestCpmBids("26322")[0];
                if(bid){
                var hb_adid = window.targetingParams[26322].hb_adid;
                var sasBid = JSON.parse(JSON.stringify(bid));
                sasBid.cpm = window.targetingParams[26322].hb_bid;
                bid.currency = bid.currency || "USD";
                }else{
                var sasBid ={};
                }
                if(typeof Smart_SR_data === 'undefined'){
                Smart_SR_data ="";
                }
                console.log();
                sas.setHeaderBiddingWinner("sas_"+26322, sasBid);
                                sas.call("std", {
                tagId: 'sas_26322',
                siteId: 493709,
                pageId: 1541741,
                formatId: 26322,
                    target:Smart_SR_data,
                timeout:3000,
                schain:  "1.0,1!themoneytizer.com,90615,1,megazap.fr,megazap.fr"},
                {networkId: 1097, domain: "https://ww1097.smartadserver.com",
                onNoad: function() {
                    if (bid && bid.bidder == "improvedigital" && bid.mediaType == "video") {
                        var creatediv = document.createElement("div");
                        creatediv.id = '26322';
                        creatediv.setAttribute("style","width:"+arr_width_video[26322]+"px;margin:auto;");
                        document.getElementById("sas_26322").appendChild(creatediv);
                        var iframeDoc = document;
                    }else{
                        var myiframe = document.createElement('iframe');
                        myiframe.frameBorder=0;
                        myiframe.width=arr_width[26322]+"px";
                        myiframe.height=arr_height[26322]+"px";
                        myiframe.id="sas_iframe_26322";
                        myiframe.setAttribute("scrolling", "no");
                        myiframe.setAttribute("marginheight", 0);
                        myiframe.setAttribute("marginwidth", 0);
                        myiframe.setAttribute("topmargin", 0);
                        myiframe.setAttribute("leftmargin", 0);
                        myiframe.setAttribute("allowtransparency", true);
                        document.getElementById("sas_26322").appendChild(myiframe);
                        var iframeDoc = myiframe.contentWindow.document;
                    }
                                            if (bid && bid.mediaType != "native") {
                            tmzr.renderAd(iframeDoc, hb_adid);
                        }

                }});
                                }
                );

                var http = new XMLHttpRequest();
                var url = 'https://c.tmyzer.com/c/?s=90615&f=1&fi=0';
                http.open("GET", url, true);
                http.send();
                var checkiframe = setInterval(function(){
                var myframe = creatediv.getElementsByTagName("iframe")[0];
                if(myframe){
                if(myframe.sandbox == ""){
                                    myframe.setAttribute('sandbox', 'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
                                myframe.setAttribute('data-forced-sandbox', true);
                }
                clearInterval(checkiframe)}
                },200);
                refreshVisibility26322();
                };

            