(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={app:"App_app__3q3Um",title:"App_title__2_I0S"}},function(e,t,a){e.exports={DrumPadButton:"DrumPad_DrumPadButton__36n9G",ManualActive:"DrumPad_ManualActive__2SOe9"}},,,function(e,t,a){e.exports={DrumMachine:"DrumMachine_DrumMachine__2R6HK"}},function(e,t,a){e.exports={DrumPads:"DrumPads_DrumPads__25T3H"}},function(e,t,a){e.exports={Display:"Display_Display__hrXg5"}},function(e,t,a){e.exports=a(32)},,,,,,function(e,t,a){},,,,,,function(e,t,a){var n={"./Cev_H2.mp3":22,"./Dsc_Oh.mp3":23,"./Heater-1.mp3":24,"./Heater-2.mp3":25,"./Heater-3.mp3":26,"./Heater-4_1.mp3":27,"./Heater-6.mp3":28,"./Kick_n_Hat.mp3":29,"./RP4_KICK_1.mp3":30};function r(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=21},function(e,t,a){e.exports=a.p+"static/media/Cev_H2.abe03961.mp3"},function(e,t,a){e.exports=a.p+"static/media/Dsc_Oh.5c9f8087.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-1.b1cfea05.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-2.0d219666.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-3.632e8772.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-4_1.d9de8a50.mp3"},function(e,t,a){e.exports=a.p+"static/media/Heater-6.3062daca.mp3"},function(e,t,a){e.exports=a.p+"static/media/Kick_n_Hat.200b4bd3.mp3"},function(e,t,a){e.exports=a.p+"static/media/RP4_KICK_1.09fda256.mp3"},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),o=(a(15),a(2)),u=a.n(o),m=a(1),s=a(6),l=a.n(s),p=a(7),d=a.n(p),_=a(3),f=a.n(_),H=function(e){var t=e.audioSource,c=e.keyName,i=e.beatPlayed,o=Object(n.useRef)(),u=Object(n.useState)(""),s=Object(m.a)(u,2),l=s[0],p=s[1];Object(n.useEffect)(function(){return window.addEventListener("keydown",_),function(){return window.removeEventListener("keydown",_)}},[t,c]);var d=function(){i(c),o.current.currentTime=0,o.current.play(),p(f.a.ManualActive),setTimeout(function(){return p("")},100)},_=function(e){e.code==="Key".concat(c)&&d()};return r.a.createElement("div",{className:"drum-pad"},r.a.createElement("audio",{ref:o,src:a(21)("./".concat(t,".mp3")),className:"clip",id:c}),r.a.createElement("button",{onClick:d,className:[f.a.DrumPadButton,l].join(" ")},c))},v=function(e){var t=e.beats,a=e.beatPlayed;return r.a.createElement("div",{className:d.a.DrumPads},t.map(function(e){return r.a.createElement(H,{key:e.name,keyName:e.name,audioSource:e.source,beatPlayed:a})}))},D=a(8),E=a.n(D),y=function(e){return r.a.createElement("div",{id:"display",className:E.a.Display},e.message)},b={Q:{name:"Q",source:"Heater-1",title:"Heater 1"},W:{name:"W",source:"Heater-2",title:"Heater 2"},E:{name:"E",source:"Heater-3",title:"Heater 3"},A:{name:"A",source:"Heater-4_1",title:"Heater 4"},S:{name:"S",source:"Heater-6",title:"Clap"},D:{name:"D",source:"Dsc_Oh",title:"Open HH"},Z:{name:"Z",source:"Kick_n_Hat",title:"Kick n' Hat"},X:{name:"X",source:"RP4_KICK_1",title:"Kick"},C:{name:"C",source:"Cev_H2",title:"Closed HH"}},h=function(){var e=Object(n.useState)("Play a Beat!"),t=Object(m.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{id:"drum-machine",className:l.a.DrumMachine},r.a.createElement("div",null,r.a.createElement(y,{message:a})),r.a.createElement("div",null,r.a.createElement(v,{beats:Object.keys(b).map(function(e){return b[e]}),beatPlayed:function(e){return c(b[e].title)}})))},w=function(){return r.a.createElement("div",{className:u.a.app},r.a.createElement("h1",{className:u.a.title},"The Drum Machine"),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.7f193933.chunk.js.map