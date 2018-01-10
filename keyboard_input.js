/* Generated by the Nim Compiler v0.17.2 */
/*   (c) 2017 Andreas Rumpf */

var framePtr = null;
var excHandler = 0;
var lastJSError = null;
if (typeof Int8Array === 'undefined') Int8Array = Array;
if (typeof Int16Array === 'undefined') Int16Array = Array;
if (typeof Int32Array === 'undefined') Int32Array = Array;
if (typeof Uint8Array === 'undefined') Uint8Array = Array;
if (typeof Uint16Array === 'undefined') Uint16Array = Array;
if (typeof Uint32Array === 'undefined') Uint32Array = Array;
if (typeof Float32Array === 'undefined') Float32Array = Array;
if (typeof Float64Array === 'undefined') Float64Array = Array;

function cstrToNimstr(c_14803) {
		  var ln = c_14803.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_14803.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_14803.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  result[r] = 0; // terminating zero
  return result;
  

	
}

function makeNimstrLit(c_14603) {
		    var ln = c_14603.length;
    var result = new Array(ln + 1);
    var i = 0;
    for (; i < ln; ++i) {
      result[i] = c_14603.charCodeAt(i);
    }
    result[i] = 0; // terminating zero
    return result;
    

	
}

function toJSStr(s_15003) {
		    var len = s_15003.length-1;
    var asciiPart = new Array(len);
    var fcc = String.fromCharCode;
    var nonAsciiPart = null;
    var nonAsciiOffset = 0;
    for (var i = 0; i < len; ++i) {
      if (nonAsciiPart !== null) {
        var offset = (i - nonAsciiOffset) * 2;
        var code = s_15003[i].toString(16);
        if (code.length == 1) {
          code = "0"+code;
        }
        nonAsciiPart[offset] = "%";
        nonAsciiPart[offset + 1] = code;
      }
      else if (s_15003[i] < 128)
        asciiPart[i] = fcc(s_15003[i]);
      else {
        asciiPart.length = i;
        nonAsciiOffset = i;
        nonAsciiPart = new Array((len - i) * 2);
        --i;
      }
    }
    asciiPart = asciiPart.join("");
    return (nonAsciiPart === null) ?
        asciiPart : asciiPart + decodeURIComponent(nonAsciiPart.join(""));
  

	
}
var nimvm_6119 = false;
var nim_program_result = 0;
var globalRaiseHook_11605 = [null];
var localRaiseHook_11610 = [null];
var outOfMemHook_11613 = [null];

function decWidth_44006(element_44008) {
		var width_44009 = parseInt(element_44008.style.width);
		if ((width_44009 <= 1)) {
		}
		else {
			element_44008.style.width = toJSStr((cstrToNimstr(((width_44009 - 1))+"").slice(0,-1)).concat(makeNimstrLit("px")));
		}
		

	
}

function incWidth_44001(element_44003) {
		var width_44004 = parseInt(element_44003.style.width);
		var maxWidth_44005 = (window.innerWidth - (parseInt(document.body.style.margin) * 2));
		if ((maxWidth_44005 <= width_44004)) {
		}
		else {
			element_44003.style.width = toJSStr((cstrToNimstr(((width_44004 + 1))+"").slice(0,-1)).concat(makeNimstrLit("px")));
		}
		

	
}

function toggleKey_44010(keyCode_44012, element_44013) {
		switch (keyCode_44012) {
		case 74:
			decWidth_44006(element_44013);
			break;
		case 75:
			incWidth_44001(element_44013);
			break;
		default: 
			break;
		}

	
}

function main_44016() {

		function colonanonymous__44024(e_44026) {
				toggleKey_44010(e_44026.keyCode, bar_44023);

			
		}

		var bar_44023 = document.getElementById("bar");
		bar_44023.style.backgroundColor = "#302833";
		bar_44023.style.height = "10px";
		bar_44023.style.width = "100px";
		document.body.style.margin = "8px";
		window.addEventListener("keydown", colonanonymous__44024, false);

	
}
main_44016();
