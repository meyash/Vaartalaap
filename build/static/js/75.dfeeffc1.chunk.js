(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[75],{296:function(I,n,_){!function(I){"use strict";I.defineMode("ntriples",(function(){var I={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};function n(n,_){var R,t=n.location;R=t==I.PRE_SUBJECT&&"<"==_?I.WRITING_SUB_URI:t==I.PRE_SUBJECT&&"_"==_?I.WRITING_BNODE_URI:t==I.PRE_PRED&&"<"==_?I.WRITING_PRED_URI:t==I.PRE_OBJ&&"<"==_?I.WRITING_OBJ_URI:t==I.PRE_OBJ&&"_"==_?I.WRITING_OBJ_BNODE:t==I.PRE_OBJ&&'"'==_?I.WRITING_OBJ_LITERAL:t==I.WRITING_SUB_URI&&">"==_||t==I.WRITING_BNODE_URI&&" "==_?I.PRE_PRED:t==I.WRITING_PRED_URI&&">"==_?I.PRE_OBJ:t==I.WRITING_OBJ_URI&&">"==_||t==I.WRITING_OBJ_BNODE&&" "==_||t==I.WRITING_OBJ_LITERAL&&'"'==_||t==I.WRITING_LIT_LANG&&" "==_||t==I.WRITING_LIT_TYPE&&">"==_?I.POST_OBJ:t==I.WRITING_OBJ_LITERAL&&"@"==_?I.WRITING_LIT_LANG:t==I.WRITING_OBJ_LITERAL&&"^"==_?I.WRITING_LIT_TYPE:" "!=_||t!=I.PRE_SUBJECT&&t!=I.PRE_PRED&&t!=I.PRE_OBJ&&t!=I.POST_OBJ?t==I.POST_OBJ&&"."==_?I.PRE_SUBJECT:I.ERROR:t,n.location=R}return{startState:function(){return{location:I.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(I,_){var R=I.next();if("<"==R){n(_,R);var t="";return I.eatWhile((function(I){return"#"!=I&&">"!=I&&(t+=I,!0)})),_.uris.push(t),I.match("#",!1)||(I.next(),n(_,">")),"variable"}if("#"==R){var e="";return I.eatWhile((function(I){return">"!=I&&" "!=I&&(e+=I,!0)})),_.anchors.push(e),"variable-2"}if(">"==R)return n(_,">"),"variable";if("_"==R){n(_,R);var i="";return I.eatWhile((function(I){return" "!=I&&(i+=I,!0)})),_.bnodes.push(i),I.next(),n(_," "),"builtin"}if('"'==R)return n(_,R),I.eatWhile((function(I){return'"'!=I})),I.next(),"@"!=I.peek()&&"^"!=I.peek()&&n(_,'"'),"string";if("@"==R){n(_,"@");var r="";return I.eatWhile((function(I){return" "!=I&&(r+=I,!0)})),_.langs.push(r),I.next(),n(_," "),"string-2"}if("^"==R){I.next(),n(_,"^");var T="";return I.eatWhile((function(I){return">"!=I&&(T+=I,!0)})),_.types.push(T),I.next(),n(_,">"),"variable"}" "==R&&n(_,R),"."==R&&n(_,R)}}})),I.defineMIME("application/n-triples","ntriples"),I.defineMIME("application/n-quads","ntriples"),I.defineMIME("text/n-triples","ntriples")}(_(27))}}]);
//# sourceMappingURL=75.dfeeffc1.chunk.js.map