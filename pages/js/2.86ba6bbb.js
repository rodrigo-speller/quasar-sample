(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        Quasar App\n      ")]),a("div",[e._v("Quasar v"+e._s(e.$q.version))])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v("\n        Essential Links\n      ")]),e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:e.link}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},i=[],c=a("60a3"),l=function(e,t,a,r){var n,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,a,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i};let s=class extends c["c"]{};l([Object(c["b"])({type:String,required:!0})],s.prototype,"title",void 0),l([Object(c["b"])({type:String,default:""})],s.prototype,"caption",void 0),l([Object(c["b"])({type:String,default:"#"})],s.prototype,"link",void 0),l([Object(c["b"])({type:String,default:""})],s.prototype,"icon",void 0),s=l([c["a"]],s);var u=s,p=u,f=a("2877"),b=a("66e5"),d=a("4074"),v=a("0016"),m=a("0170"),h=a("eebe"),q=a.n(h),k=Object(f["a"])(p,o,i,!1,null,null,null),w=k.exports;q()(k,"components",{QItem:b["a"],QItemSection:d["a"],QIcon:v["a"],QItemLabel:m["a"]});var y=function(e,t,a,r){var n,o=arguments.length,i=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,a,r);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(o<3?n(i):o>3?n(t,a,i):n(t,a))||i);return o>3&&i&&Object.defineProperty(t,a,i),i};const g=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}];let O=class extends c["c"]{constructor(){super(...arguments),this.leftDrawerOpen=!1,this.essentialLinks=g}};O=y([Object(c["a"])({components:{EssentialLink:w}})],O);var _=O,Q=_,j=a("4d5a"),D=a("e359"),L=a("65c6"),x=a("9c40"),E=a("6ac5"),R=a("9404"),C=a("1c1c"),I=a("09e3"),P=Object(f["a"])(Q,r,n,!1,null,null,null);t["default"]=P.exports;q()(P,"components",{QLayout:j["a"],QHeader:D["a"],QToolbar:L["a"],QBtn:x["a"],QToolbarTitle:E["a"],QDrawer:R["a"],QList:C["a"],QItemLabel:m["a"],QPageContainer:I["a"]})}}]);