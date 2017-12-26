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
var NTI138 = {size: 0,kind: 28,base: null,node: null,finalizer: null};

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

function setConstr() {
		      var result = {};
      for (var i = 0; i < arguments.length; ++i) {
        var x = arguments[i];
        if (typeof(x) == "object") {
          for (var j = x[0]; j <= x[1]; ++j) {
            result[j] = true;
          }
        } else {
          result[x] = true;
        }
      }
      return result;
    

	
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_19817, src_19818, ti_19819) {
	var result_20229 = null;

		switch (ti_19819.kind) {
		case 21:
		case 22:
		case 23:
		case 5:
			if (!(isFatPointer_19801(ti_19819))) {
			result_20229 = src_19818;
			}
			else {
				result_20229 = [src_19818[0], src_19818[1]];
			}
			
			break;
		case 19:
			      if (dest_19817 === null || dest_19817 === undefined) {
        dest_19817 = {};
      }
      else {
        for (var key in dest_19817) { delete dest_19817[key]; }
      }
      for (var key in src_19818) { dest_19817[key] = src_19818[key]; }
      result_20229 = dest_19817;
    
			break;
		case 18:
		case 17:
			if (!((ti_19819.base == null))) {
			result_20229 = nimCopy(dest_19817, src_19818, ti_19819.base);
			}
			else {
			if ((ti_19819.kind == 17)) {
			result_20229 = (dest_19817 === null || dest_19817 === undefined) ? {m_type: ti_19819} : dest_19817;
			}
			else {
				result_20229 = (dest_19817 === null || dest_19817 === undefined) ? {} : dest_19817;
			}
			}
			nimCopyAux(result_20229, src_19818, ti_19819.node);
			break;
		case 24:
		case 4:
		case 27:
		case 16:
			      if (src_19818 === null) {
        result_20229 = null;
      }
      else {
        if (dest_19817 === null || dest_19817 === undefined) {
          dest_19817 = new Array(src_19818.length);
        }
        else {
          dest_19817.length = src_19818.length;
        }
        result_20229 = dest_19817;
        for (var i = 0; i < src_19818.length; ++i) {
          result_20229[i] = nimCopy(result_20229[i], src_19818[i], ti_19819.base);
        }
      }
    
			break;
		case 28:
			      if (src_19818 !== null) {
        result_20229 = src_19818.slice(0);
      }
    
			break;
		default: 
			result_20229 = src_19818;
			break;
		}

	return result_20229;

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

function isFatPointer_19801(ti_19803) {
	var result_19804 = false;

	BeforeRet: do {
		result_19804 = !((ConstSet1[ti_19803.base.kind] != undefined));
		break BeforeRet;
	} while (false);

	return result_19804;

}

function nimCopyAux(dest_19822, src_19823, n_19825) {
		switch (n_19825.kind) {
		case 0:
			break;
		case 1:
			      dest_19822[n_19825.offset] = nimCopy(dest_19822[n_19825.offset], src_19823[n_19825.offset], n_19825.typ);
    
			break;
		case 2:
			L1: do {
				var i_20215 = 0;
				var colontmp__20217 = 0;
				colontmp__20217 = (n_19825.len - 1);
				var res_20220 = 0;
				L2: do {
						L3: while (true) {
						if (!(res_20220 <= colontmp__20217)) break L3;
							i_20215 = res_20220;
							nimCopyAux(dest_19822, src_19823, n_19825.sons[i_20215]);
							res_20220 += 1;
						}
				} while(false);
			} while(false);
			break;
		case 3:
			      dest_19822[n_19825.offset] = nimCopy(dest_19822[n_19825.offset], src_19823[n_19825.offset], n_19825.typ);
      for (var i = 0; i < n_19825.sons.length; ++i) {
        nimCopyAux(dest_19822, src_19823, n_19825.sons[i][1]);
      }
    
			break;
		}

	
}

function nsuIntToStr(x_38644, minchars_38645) {
	var result_38646 = null;

		result_38646 = nimCopy(null, cstrToNimstr((Math.abs(x_38644))+""), NTI138);
		L1: do {
			var i_38656 = 0;
			var colontmp__38658 = 0;
			colontmp__38658 = (minchars_38645 - (result_38646 != null ? result_38646.length-1 : 0));
			var res_38661 = 1;
			L2: do {
					L3: while (true) {
					if (!(res_38661 <= colontmp__38658)) break L3;
						i_38656 = res_38661;
						result_38646 = nimCopy(null, [48].concat(result_38646), NTI138);
						res_38661 += 1;
					}
			} while(false);
		} while(false);
		if ((x_38644 < 0)) {
		result_38646 = nimCopy(null, [45].concat(result_38646), NTI138);
		}
		

	return result_38646;

}

function decWidth_44005(element_44007) {
		var width_44008 = parseInt(element_44007.style.width);
		if ((width_44008 <= 1)) {
		}
		else {
			element_44007.style.width = toJSStr((nsuIntToStr((width_44008 - 1), 1).slice(0,-1)).concat(makeNimstrLit("px")));
		}
		

	
}

function incWidth_44001(element_44003) {
		var width_44004 = parseInt(element_44003.style.width);
		if ((window.innerWidth <= width_44004)) {
		}
		else {
			element_44003.style.width = toJSStr((nsuIntToStr((width_44004 + 1), 1).slice(0,-1)).concat(makeNimstrLit("px")));
		}
		

	
}

function toggleKey_44009(keyCode_44011, element_44012) {
		switch (keyCode_44011) {
		case 74:
			decWidth_44005(element_44012);
			break;
		case 75:
			incWidth_44001(element_44012);
			break;
		default: 
			break;
		}

	
}

function main_44015() {

		function colonanonymous__44023(e_44025) {
				toggleKey_44009(e_44025.keyCode, bar_44022);

			
		}

		var bar_44022 = document.getElementById("bar");
		bar_44022.style.backgroundColor = "#302833";
		bar_44022.style.height = toJSStr((nsuIntToStr(10, 1).slice(0,-1)).concat(makeNimstrLit("px")));
		bar_44022.style.width = toJSStr((nsuIntToStr(100, 1).slice(0,-1)).concat(makeNimstrLit("px")));
		window.addEventListener("keydown", colonanonymous__44023, false);

	
}
main_44015();
