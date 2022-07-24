var libJsLeadPlace = {
  _author: "LeadPlace Dvpt",
  _version: "2.0",
  _scriptIframe: "//" + "tag.leadplace.fr" + "/wckr.php",
  _vendorTemelioId: 244,
  _isBeyable: false,
  _beyableCounter: 0,
  SendtoLPbyIframe: function (_param) {
    var _ifr = document.createElement("iframe");
    if (!window.__tcfapi) {
      // find the CMP frame
      var frame = window;
      var cmpFrame;
      var cmpCallbacks = {};

      while (!cmpFrame) {
        try {
          if (frame.frames["__tcfapiLocator"]) {
            cmpFrame = frame;
            break;
          }
        } catch (e) {}
        if (frame === window.top) {
          break;
        }
        frame = frame.parent;
      }

      /**
       * Set up a __tcfapi proxy method to do the postMessage and map the callback.
       * From the caller's perspective, this function behaves identically to the
       * CMP API's __tcfapi call
       */

      _ifr.__tcfapi = function (cmd, version, callback, arg) {
        if (!cmpFrame) {
          // in this case the CMP is managed by the partner.
          callback(
            {
              msg: "CMP not found",
              isCustomCMP: true,
            },
            false
          );
          return;
        }
        var callId = Math.random() + "";
        var msg = {
          __tcfapiCall: {
            command: cmd,
            parameter: arg,
            version: version,
            callId: callId,
          },
        };
        cmpCallbacks[callId] = callback;
        cmpFrame.postMessage(msg, "*");
      };

      function postMessageHandler(event) {
        var msgIsString = typeof event.data === "string";
        var json = event.data;
        if (msgIsString) {
          try {
            json = JSON.parse(event.data);
          } catch (e) {}
        }

        var payload = json.__tcfapiReturn;
        if (payload) {
          if (typeof cmpCallbacks[payload.callId] === "function") {
            cmpCallbacks[payload.callId](payload.returnValue, payload.success);
            cmpCallbacks[payload.callId] = null;
          }
        }
      }

      /* when we get the return message, call the stashed callback */
      window.addEventListener("message", postMessageHandler, false);
    } else {
      _ifr.__tcfapi = window.__tcfapi;
    }

    if (typeof by_data !== 'undefined') {
      var beyable = ""
      for (var key in by_data) {
        if (beyable != "") {
          beyable += "&";
        }
        beyable += "beyable_" + key + "=" + encodeURIComponent(by_data[key]);
      }
    }

    /* example call of the above __tcfapi  wrapper function */
    _ifr.__tcfapi(
      "getTCData",
      2,
      function (tcData, success) {
        var sendTag = false;
        var gdprQs = "";
        // the case of Custom CMP
        if (!success && tcData.isCustomCMP) {
          sendTag = true;
        }

        // the case of IAB
        if (
          success &&
          tcData.vendor &&
          tcData.vendor.consents[libJsLeadPlace._vendorTemelioId] &&
          tcData.purpose &&
          tcData.purpose.consents[1]
        ) {
          // consentData contains the base64-encoded consent string
          var consentData = tcData.tcString;

          // gdprApplies specifies whether the user is in EU jurisdiction
          var gdprApplies = tcData.gdprApplies ? 1 : 0;

          // pass these 2 values to all ad / pixel calls
          var gdprQs =
            "gdpr=" + gdprApplies + "&gdpr_consent=" + consentData + "&";

          sendTag = true;
        }

        if (sendTag) {
          var refurl = "ref=" + encodeURIComponent(window.location.href) + "&";

          if (beyable) {
            refurl += beyable + "&";
          }

          _ifr.src =
            document.location.protocol +
            libJsLeadPlace._scriptIframe +
            "?" +
            gdprQs +
            refurl +
            _param;
          _ifr.style.width = "0px";
          _ifr.style.height = "0px";
          _ifr.style.border = "0px";
          _ifr.style.display = "none";
          _ifr.style.visibility = "hidden";
          var a = document.getElementsByTagName("head")[0];
          if (a) a.appendChild(_ifr);
        }
      },
      [libJsLeadPlace._vendorTemelioId]
    );

    if (window.location.hostname.includes("sandro-paris"))
    {
      if (!libJsLeadPlace._isBeyable) {
        libJsLeadPlace._isBeyable = true;
        var leadPlaceInterval = null;
        var beyable = {
          CheckSandro: function () {
            console.info('start CheckSandro', libJsLeadPlace._beyableCounter);

            var by_data_var = ["viseng_score","viseng_segment"];
            if (typeof by_data !== 'undefined') {
              var hasKey = true;

              for (var index in by_data_var) {
                if (!by_data.hasOwnProperty(by_data_var[index])) {
                  hasKey = false;
                  break;
                }
              }

              if (hasKey) {
                clearInterval(leadPlaceInterval)
                libJsLeadPlace.SendtoLPbyIframe(_param)
              }
            }
            console.info('end CheckSandro', libJsLeadPlace._beyableCounter);
            libJsLeadPlace._beyableCounter++;
            if(libJsLeadPlace._beyableCounter > 10) {
              console.info("Clearing interval");
              clearInterval(leadPlaceInterval)
            }
          }
        }

        leadPlaceInterval = setInterval(function(){
          beyable.CheckSandro(_param)
        }, 1000);
      }
    }
  }
};