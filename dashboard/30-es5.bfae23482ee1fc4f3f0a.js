(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{r0Rl:function(e,n){var a="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function i(e){return c("(?=",e,")")}function c(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return n.map(function(e){return(n=e)?"string"==typeof n?n:n.source:null;var n}).join("")}e.exports=function(e){var n={$pattern:a,keyword:t.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),literal:r.join(" "),built_in:s.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")},o={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},l=function(e,n,a){var t=e.contains.findIndex(function(e){return e.label===n});if(-1===t)throw new Error("can not find mode to replace");e.contains.splice(t,1,a)},b=function(e){var n=a,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:function(e,n){var a=e[0].length+e.index,t=e.input[a];"<"!==t?">"===t&&(function(e,n){var a=n.after,t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,a)}(e,{after:a})||n.ignoreMatch()):n.ignoreMatch()}},l={$pattern:a,keyword:t.join(" "),literal:r.join(" "),built_in:s.join(" ")},b="\\.([0-9](_?[0-9])*)",d={className:"number",variants:[{begin:"(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((".concat(b,")|\\.)?|(").concat(b,"))[eE][+-]?([0-9](_?[0-9])*)\\b")},{begin:"\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((".concat(b,")\\b|\\.)?|(").concat(b,")\\b")},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},u={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},E={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,g],subLanguage:"css"}},m={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,g]},f={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},_=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,E,m,d,e.REGEXP_MODE];g.contains=_.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(_)});var p=[].concat(f,g.contains),y=p.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(p)}]),N={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:y};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,u,E,m,f,d,{begin:c(/[{,\n]\s*/,i(c(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+i("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[f,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:y}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),N],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[N,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",N]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},N]},{begin:/\$[(.]/}]}}(e);return Object.assign(b.keywords,n),b.exports.PARAMS_CONTAINS.push(o),b.contains=b.contains.concat([o,{beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"}]),l(b,"shebang",e.SHEBANG()),l(b,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),b.contains.find(function(e){return"function"===e.className}).relevance=0,Object.assign(b,{name:"TypeScript",aliases:["ts"]}),b}}}]);