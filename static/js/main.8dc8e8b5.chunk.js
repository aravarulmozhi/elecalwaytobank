(this["webpackJsonpele-cal-02"]=this["webpackJsonpele-cal-02"]||[]).push([[0],{43:function(e,a,t){e.exports=t(58)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var l,n,c=t(0),s=t.n(c),r=t(11),o=t.n(r),i=(t(31),t(48),t(32)),m=t(33),u=t(41),d=t(39),E=(t(49),function(e){var a=new Array;a[0]="",a[1]="One",a[2]="Two",a[3]="Three",a[4]="Four",a[5]="Five",a[6]="Six",a[7]="Seven",a[8]="Eight",a[9]="Nine",a[10]="Ten",a[11]="Eleven",a[12]="Twelve",a[13]="Thirteen",a[14]="Fourteen",a[15]="Fifteen",a[16]="Sixteen",a[17]="Seventeen",a[18]="Eighteen",a[19]="Nineteen",a[20]="Twenty",a[30]="Thirty",a[40]="Forty",a[50]="Fifty",a[60]="Sixty",a[70]="Seventy",a[80]="Eighty",a[90]="Ninety";var t=(e=e.toString()).split(".")[0].split(",").join(""),l=t.length,n="";if(l<=9){for(var c=new Array(0,0,0,0,0,0,0,0,0),s=new Array,r=0;r<l;r++)s[r]=t.substr(r,1);for(var o=9-l,i=0;o<9;o++,i++)c[o]=s[i];for(var m=0,u=1;m<9;m++,u++)0!==m&&2!==m&&4!==m&&7!==m||1===c[m]&&(c[u]=10+parseInt(c[u]),c[m]=0);for(var d="",E=0;E<9;E++)0!==(d=0===E||2===E||4===E||7===E?10*c[E]:c[E])&&(n+=a[d]+" "),(1===E&&0!==d||0===E&&0!==d&&0===c[E+1])&&(n+="Crores "),(3===E&&0!==d||2===E&&0!==d&&0===c[E+1])&&(n+="Lakhs "),(5===E&&0!==d||4===E&&0!==d&&0===c[E+1])&&(n+="Thousand "),6===E&&0!==d&&0!==c[E+1]&&0!==c[E+2]?n+="Hundred and ":6===E&&0!==d&&(n+="Hundred ");n=n.split("  ").join(" ")}return n}),p=function(e){var a=e.netSal,t=e.netsalVal;return s.a.createElement("div",null,s.a.createElement("article",{className:"ba  mv4 w-100 w-100-m w-100-l mw10 center bg-white sideIP"},s.a.createElement("br",null),s.a.createElement("div",{className:"salcon pa1"},s.a.createElement("p",{className:"f4 gray ttu lh-solid fw6"},"Net Salary "),s.a.createElement("input",{type:"range",id:"rangeIp",min:"15000",onInput:function(){return"inputIp.value=rangeIp.value"},max:"500000",onChange:a,value:t}),s.a.createElement("br",null),s.a.createElement("div",{className:"ransc-con"},s.a.createElement("label",{className:"ranSc tl"},"15K"),s.a.createElement("label",{className:"ranSc25"},"2.5L"),s.a.createElement("label",{className:"ranSc50 tr"},"5L")),s.a.createElement("br",null),s.a.createElement("div",{className:"salinpIP"},s.a.createElement("label",{className:"f2 pa1 mt2"},"\u20b9  "),s.a.createElement("input",{type:"text",className:"w4 f2 bb",id:"inputIp",onInput:function(){return"rangeIp.value=inputIp.value"},onChange:a,value:t}),s.a.createElement("small",{id:"name-desc",className:"f5 black-60 db mb2 black "},"(".concat(E(t),")"))))))},b=(t(50),function(e){var a=e.EMI_Pay,t=e.adderBut,l=e.totEmi,n=e.CC_OS,c=e.totCc,r=e.GL_PLS,o=e.totgol,i=e.mulVal,m=e.MulValSta,u=e.exRoi,d=e.expInVal,p=e.netSal,b=e.hlfix,f=e.Re_set,h=(e.keypre,e.ipIsVal),v=e.ipState;return s.a.createElement("div",null,s.a.createElement("article",{className:"ba w-100 w-100-m w-100-l mw10 center CalObli bg-white ph3-ns"},s.a.createElement("div",{className:"cf ph2-ns"},s.a.createElement("div",{className:"fl w-60-ns br mobRes"},s.a.createElement("h5",{className:"gray"},"CALCULATE OBLIGATION"),s.a.createElement("div",{className:"fl w-50 mobRes1"},s.a.createElement("input",{type:"number",className:v?"obiInpErr":"obiInp",id:"EMI_Pay",placeholder:"EMI Paying",onChange:a,onKeyPress:h}),s.a.createElement("button",{id:"inc",className:"butsty grow butsty1",onClick:function(){t("EMI_Pay")}},"+")," ",s.a.createElement("br",null),v?s.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2 dark-red"},"Invalid Input!"):s.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2 smallRes"},"Total Emi Paying ".concat(l," "),s.a.createElement("label",{className:"pointer underline hover-dark-green",onClick:function(){f("EMI_Pay")}}," (Reset)"))),s.a.createElement("div",{className:"fl w-50 mobRes1"},s.a.createElement("input",{type:"number",className:"obiInp",id:"cc_os",placeholder:"credit card out standing",onChange:n}),s.a.createElement("button",{id:"inc",className:"butsty grow",onClick:function(){t("cc_os")}},"+"),s.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"Total credit card obligation  ".concat(c," ")," ",s.a.createElement("label",{className:"pointer underline hover-dark-green",onClick:function(){f("cc_os")}}," (Reset)"))),s.a.createElement("div",{className:"fl w-50 mobRes1"},s.a.createElement("input",{type:"number",className:"obiInp",id:"go_l",placeholder:"Gold Loan",onChange:r}),s.a.createElement("button",{id:"inc",className:"butsty grow",onClick:function(){t("go_l")}},"+"),s.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2"},"Total Gold Paying ".concat(o)," ",s.a.createElement("label",{className:"pointer underline hover-dark-green",onClick:function(){f("go_l")}}," (Reset)"))),s.a.createElement("div",{className:"fl w-50 radCon mobRes1"},s.a.createElement("label",{className:"f4 b hlRes"},"Having Any Home Loan ? \xa0"),s.a.createElement("div",{className:"container"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("input",{type:"radio",id:"f-option",name:"selector",onClick:function(){return b(!0)}}),s.a.createElement("label",{htmlFor:"f-option",style:{"padding-left":"111px"}},"YES"),s.a.createElement("div",{className:"check"})),s.a.createElement("li",null,s.a.createElement("input",{type:"radio",id:"s-option",name:"selector",onClick:function(){return b(!1)},defaultChecked:!0}),s.a.createElement("label",{htmlFor:"s-option",style:{"padding-left":"111px"}},"NO"),s.a.createElement("div",{className:"check"},s.a.createElement("div",{className:"inside"})))))),s.a.createElement("div",{className:"fl w-100 bt pa1"},s.a.createElement("p",{className:"f4 gray ttu lh-solid fw6"},"Expecting Interest Rate "),s.a.createElement("input",{type:"range",id:"roiId",min:"1",max:"30",onInput:function(){},onChange:u,value:d}),s.a.createElement("br",null),s.a.createElement("div",{className:"ransc-con"},s.a.createElement("label",{className:"ranSc tl"},"1%"),s.a.createElement("label",{className:"ranSc25"},"15%"),s.a.createElement("label",{className:"ranSc50 tr"},"30%")),s.a.createElement("input",{className:"f2 p2 tc",id:"roiIp",type:"number",onInput:function(){},onChange:u,value:d}),s.a.createElement("label",{className:"f2 p2"},"%"))),s.a.createElement("div",{className:"fl  w-40-ns pa1 mobRes1"},s.a.createElement("div",{className:"bb"},s.a.createElement("p",null,"TOTAL OBLIGATION"),s.a.createElement("p",{className:"f2 pa1 totobval mw100"},"\u20b9 ","".concat(l+c+o))),s.a.createElement("div",{className:"totObli"},s.a.createElement("div",{className:"w-100"},s.a.createElement("p",null,"Multipler Calculation")),s.a.createElement("div",{className:"w-50 center"},s.a.createElement("label",{className:"f3 pa1 mw4 fl totobval"},"\u20b9 ".concat(Math.round(p-(l+c+o)))," X ")),s.a.createElement("div",{className:"w-50 center"},s.a.createElement("input",{id:"mulVal",type:"number",className:"pa2 ma2 bb mw4 mulValw fl",onChange:i})),s.a.createElement("label",{className:"f1 pa1 mw10 f1 totobval"},"\u20b9".concat(Math.round((p-(l+c+o))*m))),s.a.createElement("small",{id:"name-desc",className:"f6 black-60 db mb2 black b"},E(Math.round((p-(l+c+o))*m))))))))}),f=function(e){var a=e.netSal,t=e.totEmi,l=e.totCc,n=e.totgol,c=e.expInVal,r=e.hmLn,o=function(e,a,t,l,n){return t=parseFloat(t),l=parseFloat(l),n=parseFloat(n),0===l||0===t?0:function(e,a){for(var t=""+Math.round(e*Math.pow(10,a));t.length<=a;)t="0"+t;var l=t.length-a;return t.substring(0,l)+"."+t.substring(l,t.length)}(0===(e/=100*a)?-(n+l*t):-Math.pow(1+e,-t)*(n*e-l+Math.pow(1+e,t)*l)/e,2)},i=function(e){return e>=15e3&&e<=49999?55:e>=5e4&&e<=74999?65:e>=75e3?70:void 0},m=function(){var e=a,c=t+l+n,s=r?i(e)+5:i(e);return Math.round(e*(s/100)-c)};return s.a.createElement("div",{className:"mv1 w-100 w-100-m w-100-l mw10 center CalOblitab bg-white br4"},s.a.createElement("small",{id:"name-desc",className:"f4 fw5 black-60 db mb2 black b"},"FOIR ELIGIBLE"),s.a.createElement("div",{className:"overflow-auto tj pa2"},s.a.createElement("table",{className:"f6 w-100 mw10 center",cellSpacing:"0"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"stripe-dark tc"},s.a.createElement("th",{className:"fw5 tl pa2 bg-white ba"},"Tenure"),s.a.createElement("th",{className:"fw5 tl pa2 bg-white ba"},"Monthly Installment"),s.a.createElement("th",{className:"fw5 tl pa2 bg-white ba"},"Loan Amount"))),s.a.createElement("tbody",{className:"lh-copy"},function(){for(var e=[],a=1;a<=5;a++){var t=Math.round(o(c,12,12*a,-m(),.05));e.push(s.a.createElement("tr",{className:"stripe-dark",key:a},s.a.createElement("td",{className:"pa1 fw5 ba"},"For ".concat(a," Year")),s.a.createElement("td",{className:"pa1 fw5 ba"},"Max EMI Upto \u20b9 ".concat(m())),s.a.createElement("td",{className:"pa1 fw5 ba "},s.a.createElement("small",{id:"name-desc",className:"f5 fw5 black-60 db mb2 black "},"\u20b9 ".concat(t," "),"(".concat(E(t),")")))))}return e}()))))},h=(t(64),t(65),t(63),t(56),t(57),0),v=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).ReSt=function(a){"EMI_Pay"===a?(e.setState({EMI_Pay:0}),l=0):"cc_os"===a?(e.setState({cc_os:0}),n=0):"go_l"===a&&(e.setState({go_l:0}),h=0)},e.Re_set=function(a){console.log("You clicked!",a);var t=document.getElementById("".concat(a));e.ReSt(a),t.value="",t.focus(),t.select()},e.ipIsVal=function(a){"+"===a.key||"-"===a.key?e.setState({ipIsVal:!0}):e.setState({ipIsVal:!1})},e.netSal=function(a){e.setState({netSal:a.target.value})},e.exRoi=function(a){e.setState({expRoi:a.target.value})},e.mulVal=function(a){e.setState({mulVal:a.target.value})},e.hlfix=function(a){e.setState({hmLn:a})},e.EMI_Pay=function(a){e.state.ipIsVal?(e.setState({EMI_Pay:0}),l=0,console.log("Not Valid Ip!")):l>0?e.setState({EMI_Pay:l+Number(a.target.value)}):e.setState({EMI_Pay:Number(a.target.value)})},e.CC_OS=function(a){n>0?e.setState({cc_os:n+.05*a.target.value}):e.setState({cc_os:.05*a.target.value})},e.GL_PLS=function(a){h>0?e.setState({go_l:h+.015*a.target.value}):e.setState({go_l:.015*a.target.value})},e.addfun=function(a){"EMI_Pay"===a?l=e.state.EMI_Pay:"cc_os"===a?n=e.state.cc_os:"go_l"===a&&(h=e.state.go_l)},e.adderBut=function(a){var t=document.getElementById("".concat(a));e.addfun(a),t.value="",t.focus(),t.select()},e.state={netSal:15e3,EMI_Pay:0,cc_os:0,go_l:0,hmLn:!1,mulVal:1,expRoi:1,ipIsVal:!1},e}return Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"App bg-white mw9 center br4 shadow-2"},s.a.createElement(p,{netSal:this.netSal,netsalVal:this.state.netSal}),s.a.createElement(b,{EMI_Pay:this.EMI_Pay,adderBut:this.adderBut,totEmi:this.state.EMI_Pay,CC_OS:this.CC_OS,totCc:this.state.cc_os,GL_PLS:this.GL_PLS,totgol:this.state.go_l,mulVal:this.mulVal,MulValSta:this.state.mulVal,exRoi:this.exRoi,expInVal:this.state.expRoi,netSal:this.state.netSal,hlfix:this.hlfix,ipIsVal:this.ipIsVal,ipState:this.state.ipIsVal,Re_set:this.Re_set}),s.a.createElement(f,{netSal:this.state.netSal,totEmi:this.state.EMI_Pay,totCc:this.state.cc_os,totgol:this.state.go_l,expInVal:this.state.expRoi,hmLn:this.state.hmLn})))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.8dc8e8b5.chunk.js.map