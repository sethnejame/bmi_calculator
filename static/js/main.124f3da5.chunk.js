(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(1),c=a(2),h=a(4),s=a(3),u=a(5),m=function(e){return e<18.5?"Underweight":e>18.5&&e<25?"Normal":e>25&&e<30?"Overweight":e>30?"Obese":void 0},d=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"calculate",value:function(){return function(e,t,a){var n;parseFloat(e),parseFloat(t),e=isNaN(e)?0:e,t=isNaN(t)?0:t,n="metric"===a?e/(t/100*t/100):e/(t*t)*703;var i=parseFloat(n.toFixed(2)),r=m(i);return isNaN(i)||!isFinite(i)||0===i?"":"You are ".concat(r," with a BMI of ").concat(i)}(this.props.weight,this.props.height,this.props.method)}},{key:"render",value:function(){return i.a.createElement("div",{id:"response"},this.calculate())}}]),t}(n.Component);var g=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("label",null,"Method"),i.a.createElement("select",{name:"method",id:"method",onChange:e.onChangeValue,value:e.method},i.a.createElement("option",{value:"metric"},"Metric"),i.a.createElement("option",{value:"imperial"},"Imperial"))))},v=(a(14),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(s.a)(t).call(this,e))).methodChange=function(e){a.setState({method:e.target.value})},a.state={weight:"",height:"",method:"metric"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"bmiContainer"},i.a.createElement("h1",null,"BMI Calculator"),i.a.createElement("div",{style:{paddingBottom:10}},i.a.createElement(g,{method:this.state.method,onChangeValue:this.methodChange})),i.a.createElement("div",null,i.a.createElement("label",null,"Weight","metric"===this.state.method?"(kg)":"(lbs)"),"\n",i.a.createElement("input",{name:"weight",value:this.state.weight,onChange:function(t){return e.setState({weight:t.target.value})}})),i.a.createElement("div",null,i.a.createElement("label",null,"Height","metric"===this.state.method?"(cm)":"(inches)"),"\n",i.a.createElement("input",{name:"height",value:this.state.height,onChange:function(t){return e.setState({height:t.target.value})}})),i.a.createElement(d,{weight:this.state.weight,height:this.state.height,method:this.state.method}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.124f3da5.chunk.js.map