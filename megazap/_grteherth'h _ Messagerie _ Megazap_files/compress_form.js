function dei(A){return document.getElementById(A)}function del_error(B,A){if(A==null){A="button"}else{A=""}if(document.getElementById(B)){document.getElementById(B).className=A}if(B=="a_cgv"&&document.getElementById("label_"+B)){document.getElementById("label_"+B).className="inline"}}function passwordStrength(A){var D=new Array();var C=0;if(A.length>6){C++}if((A.match(/[a-z]/))&&(A.match(/[A-Z]/))){C++}if(A.match(/\d+/)){C++}if(A.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)){C++}if(A.length>12){C++}var B=document.getElementById("passwordquality").getElementsByTagName("td");for(i=0;i<B.length;i++){if(document.getElementById("passwordquality_q"+i)!=null){document.getElementById("passwordquality_q"+i).style.display="none"}B[i].className="";if(C>=i&&A!=""){B[i].className="q"+C}}if(A!=""){document.getElementById("passwordquality_q"+C).style.display=""}}function changeEtat(C,B){for(var A=0;A<B.length;A++){document.getElementById("div_"+C.id+"_etat"+B[A]).style.display="none";if(C.value==B[A]){document.getElementById("div_"+C.id+"_etat"+B[A]).style.display=""}}}function test_vide(E,D,A){var C=E.split("|");for(var B=0;B<C.length;B++){E=C[B];if(dei(E).value.replace(" ","")==""||dei(E).value.length<D){if(dei(E).className.indexOf(A)<0){dei(E).className+=" "+A}dei(E).focus();return false}}return true}function test_numeric(D,A){var C=D.split("|");for(var B=0;B<C.length;B++){D=C[B];if(isNaN(dei(D).value)){if(dei(D).className.indexOf(A)<0){dei(D).className+=" "+A}dei(D).value="";dei(D).focus();return false}}return true}function init_vide(C,A){var B=C.className.indexOf(A);if(B>0){C.className=C.className.replace(A,"")}return true}