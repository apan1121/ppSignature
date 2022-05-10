(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{129:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container pb-5 pt-5"},[a("h2",{staticClass:"mb-5"},[t._v("\n        五步驟建立您的 PressPlay 簽名檔\n    ")]),t._v(" "),a("h3",{staticClass:"mt-3 mb-3"},[t._v("\n        1. 填寫您的基本資料\n    ")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4"},[a("form",[a("div",{staticClass:"form-group"},[t._m(0),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.group,expression:"cardInfo.group"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.cardInfo,"group",e.target.multiple?a:a[0])}}},t._l(t.groupSelector,(function(e,r){return a("option",{key:r,domProps:{value:r,textContent:t._s(e.name)}})})),0)]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(1),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.department,expression:"cardInfo.department"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.cardInfo,"department",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("\n                            請選擇\n                        ")]),t._v(" "),t._l(t.groupSelector[t.cardInfo.group].department,(function(e,r){return a("option",{key:r,domProps:{value:e,textContent:t._s(e)}})}))],2)]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.name,expression:"cardInfo.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:"請輸入您的中文或英文姓名"},domProps:{value:t.cardInfo.name},on:{input:function(e){e.target.composing||t.$set(t.cardInfo,"name",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.jobTitle,expression:"cardInfo.jobTitle"}],staticClass:"form-control",attrs:{type:"text",name:"jobTitle",placeholder:"請輸入您的完整職稱"},domProps:{value:t.cardInfo.jobTitle},on:{input:function(e){e.target.composing||t.$set(t.cardInfo,"jobTitle",e.target.value)}}})]),t._v(" "),"hk"!==t.cardInfo.group?a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"showPhone"}},[t._v("公司號碼")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.showPhone,expression:"cardInfo.showPhone"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.cardInfo,"showPhone",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:!0}},[t._v("顯示")]),t._v(" "),a("option",{domProps:{value:!1}},[t._v("不顯示")])])]):t._e(),t._v(" "),"hk"!==t.cardInfo.group?a("div",{staticClass:"form-group"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.extension,expression:"cardInfo.extension"}],staticClass:"form-control",attrs:{type:"text",name:"extension",placeholder:"請輸入您的分機號碼"},domProps:{value:t.cardInfo.extension},on:{input:function(e){e.target.composing||t.$set(t.cardInfo,"extension",e.target.value)}}})]):t._e(),t._v(" "),a("div",{staticClass:"form-group"},[t._m(5),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.cellphone,expression:"cardInfo.cellphone"}],staticClass:"form-control",attrs:{type:"text",name:"cellphone",placeholder:"請輸入您的手機"},domProps:{value:t.cardInfo.cellphone},on:{input:function(e){e.target.composing||t.$set(t.cardInfo,"cellphone",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(6),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.email,expression:"cardInfo.email"}],staticClass:"form-control",attrs:{type:"text",name:"jobTitle",placeholder:"請輸入您的手機"},domProps:{value:t.cardInfo.email},on:{input:function(e){e.target.composing||t.$set(t.cardInfo,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[t._m(7),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cardInfo.lineId,expression:"cardInfo.lineId"}],staticClass:"form-control",attrs:{type:"text",name:"lineId",placeholder:"Line ID"},domProps:{value:t.cardInfo.lineId},on:{input:function(e){e.target.composing||t.$set(t.cardInfo,"lineId",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"col-12 col-md-8"},[a("table",{ref:"signatureHTML",staticStyle:{"border-spacing":"0px","border-collapse":"collapse","background-color":"transparent",color:"rgb(68,68,68)",width:"480px","font-size":"10pt","font-family":"Arial,sans-serif","line-height":"normal"},attrs:{cellpadding:"0",cellspacing:"0"}},[a("tbody",[a("tr",[a("td",{staticStyle:{padding:"10px 10px 12px 5px",width:"200px","vertical-align":"top","text-align":"right"},attrs:{valign:"top"}},[a("a",{staticStyle:{display:"inline-block","background-color":"transparent",color:"rgb(51,122,183)","text-decoration":"none","margin-bottom":"2px"},attrs:{href:"https://www.pressplay.cc/",target:"_blank"}},[a("img",{staticClass:"CToWUd",staticStyle:{width:"initial",height:"32px"},style:{border:"0px","vertical-align":"middle",width:"auto",height:"33px"},attrs:{border:"0",alt:"Logo",src:t.groupSelector[t.cardInfo.group].img}})])]),t._v(" "),a("td",{staticStyle:{padding:"12px 0px 6px 0px",width:"320px"}},[a("table",{staticStyle:{"border-spacing":"0px","border-collapse":"collapse","background-color":"transparent"},attrs:{cellpadding:"0",cellspacing:"0"}},[a("tbody",[a("tr",[a("td",{staticStyle:{padding:"0px","font-size":"12pt","font-family":"Arial,sans-serif","font-weight":"bold",color:"rgb(61,60,63)"}},[a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},[t._v(t._s(t.cardInfo.name))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{padding:"0px 0px 11px","font-size":"10pt","font-family":"Arial,sans-serif",color:"rgb(61,60,63)"}},[a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},[t._v(t._s(t.cardInfo.jobTitle))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{padding:"0px","font-size":"10pt","font-family":"Arial,sans-serif",color:"rgb(155,155,155)"}},[a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},[t._v(t._s(t.cardInfo.department))])])]),t._v(" "),"hk"!==t.cardInfo.group&&t.cardInfo.showPhone?a("tr",[a("td",{staticStyle:{padding:"0px","font-size":"10pt","font-family":"Arial,sans-serif",color:"rgb(155,155,155)"}},[a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},[t._v("phone: "),a("a",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"},attrs:{href:"tel:"+t.phone}},[t._v(t._s(t.phone))])])])]):t._e(),t._v(" "),t.cardInfo.cellphone?a("tr",[a("td",{staticStyle:{padding:"0px","font-size":"10pt","font-family":"Arial,sans-serif",color:"rgb(155,155,155)"}},[a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},[t._v("\n                                                cellphone:\n                                                "),a("a",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"},attrs:{href:"tel:"+t.cardInfo.cellphone}},[t._v(t._s(t.cardInfo.cellphone))])])])]):t._e(),t._v(" "),a("tr",[a("td",{staticStyle:{padding:"0px","font-size":"10pt","font-family":"Arial,sans-serif",color:"rgb(155,155,155)"}},[a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},[t._v("email: ")]),t._v(" "),a("span",{staticStyle:{color:"rgb(23,147,210)"}},[a("a",{staticStyle:{"font-family":"Verdana,sans-serif",color:"rgb(244,170,16)"},attrs:{href:"mailto:"+t.cardInfo.email}},[t._v(t._s(t.cardInfo.email))])])])]),t._v(" "),t.cardInfo.lineId?a("tr",[a("td",{staticStyle:{padding:"0px","font-size":"10pt","font-family":"Arial,sans-serif",color:"rgb(155,155,155)"}},[a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},[t._v("\n                                                Line ID:\n                                                "),a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},[t._v(t._s(t.cardInfo.lineId))])])])]):t._e(),t._v(" "),a("tr",[a("td",{staticStyle:{padding:"0px","font-size":"10pt","font-family":"Arial,sans-serif",color:"rgb(155,155,155)"}},[a("span",{staticStyle:{"font-family":"Verdana,sans-serif",color:"#061733"}},["hk"===t.cardInfo.group?[t._v("\n                                                    Room F, 9/F, Tower A, Capital Tower, 38 Wai Yip Street, Kowloon, Hong Kong\n                                                    "),a("br"),t._v("\n                                                    香港九龍偉業街38號富臨中心A塔9F\n                                                ")]:[t._v("\n                                                    103 台北市大同區西寧北路62-5號2樓\n                                                ")]],2)])])])])])])])])])]),t._v(" "),a("hr"),t._v(" "),a("h3",{staticClass:"mt-3 mb-3"},[t._v("\n        2. 點擊複製簽名檔\n    ")]),t._v(" "),a("button",{staticClass:"btn btn-primary share-url-clipboard-btn",on:{click:t.copy}},[t._v("\n        複製\n    ")]),t._v(" "),a("hr"),t._v(" "),a("h3",{staticClass:"mt-3 mb-3"},[t._v("\n        3. 至 GMail 設定頁面\n    ")]),t._v(" "),t._m(8),t._v(" "),a("h4",{staticClass:"pt-2 pb-2"},[t._v("\n        或\n    ")]),t._v(" "),t._m(9),t._v(" "),a("div",[a("img",{attrs:{src:"./dist/img/pressplay/setting.png"}})]),t._v(" "),a("hr"),t._v(" "),a("h3",{staticClass:"mt-3 mb-3"},[t._v("\n        4. 設定您的簽名檔\n    ")]),t._v(" "),t._m(10),t._v(" "),a("div",[a("img",{attrs:{src:"./dist/img/pressplay/step1.png"}})]),t._v(" "),a("h5",{staticClass:"mt-3 mb-3"},[t._v("\n        b. 新增一個簽名\n    ")]),t._v(" "),a("div",[a("img",{attrs:{src:"./dist/img/pressplay/step2.png"}})]),t._v(" "),a("h5",{staticClass:"mt-3 mb-3"},[t._v("\n        c. 點擊空白區塊，ctrl + v (cmd + v) 貼上您的簽名檔\n    ")]),t._v(" "),a("div",[a("img",{attrs:{src:"./dist/img/pressplay/step3.png"}})]),t._v(" "),a("div",[a("img",{attrs:{src:"./dist/img/pressplay/step3-1.png"}})]),t._v(" "),a("h5",{staticClass:"mt-3 mb-3"},[t._v("\n        d. 將簽名檔設為預設值\n    ")]),t._v(" "),a("div",[a("img",{attrs:{src:"./dist/img/pressplay/step4.png"}})]),t._v(" "),a("h5",{staticClass:"mt-3 mb-3"},[t._v("\n        e. 儲存設定\n    ")]),t._v(" "),a("div",[a("img",{attrs:{src:"./dist/img/pressplay/step5.png"}})]),t._v(" "),a("hr"),t._v(" "),a("h3",{staticClass:"mt-3 mb-3"},[t._v("\n        5. 完成！\n    ")]),t._v(" "),t._m(11)])};r._withStripped=!0;var n=a(53),s=a.n(n),o=a(39),i=a.n(o),l=a(13);function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f={components:{},filters:{},props:{},data:function(){return{clipboardJSFlag:"",groupSelector:{pressplay:{name:"PressPlay",img:"https://static.pressplay.cc/static/uploads/ics/ppSignature/PPLogo_PressPlay.png",department:["管理部","中央營運處","公關部","人資部","法務部","財務部"]},next:{name:"PPX Next",img:"https://static.pressplay.cc/static/uploads/ics/ppSignature/PPLogo_Next.png",department:["影響力品牌事業群","內容行銷部","經紀部","品牌部","課程部"]},academy:{name:"PPA Academy",img:"https://static.pressplay.cc/static/uploads/ics/ppSignature/PPLogo_Academy.png",department:["知識內容事業群","商業開發部","課程營運部","知識內容行銷部","產品設計部","系統開發部"]},hk:{name:"PressPlay HK",img:"https://static.pressplay.cc/static/uploads/ics/ppSignature/PPLogo_HK.png",department:["影響力品牌事業群 ","經紀部 Talent","課程部 Next Master","品牌部 Brand","內容行銷部 Connect"]}},cardInfo:{group:"pressplay",department:"",name:"GG Lee",jobTitle:"Art Director",showPhone:!0,extension:"",cellphone:"",email:"@pressplay.cc",lineId:""}}},computed:p(p({},Object(l.c)([])),{},{phone:function(){var t="(02) 2558-8355";return this.cardInfo.extension&&(t="".concat(t," #").concat(this.cardInfo.extension)),t}}),watch:{"cardInfo.group":function(t,e){if(t!==e){var a=JSON.parse(JSON.stringify(this.cardInfo));a.department="",this.cardInfo=a}}},created:function(){},mounted:function(){this.initClipboard()},updated:function(){},destroyed:function(){},methods:p(p(p({},Object(l.b)({})),Object(l.d)({})),{},{initClipboard:function(){console.log("initClipboard");var t=this,e=new s.a(".share-url-clipboard-btn",{target:function(e){return t.$refs.signatureHTML}});e.on("success",(function(e){t.clipboardJSFlag="success",e.clearSelection(),i()({title:"成功",text:"簽名檔已在您的剪貼簿中",icon:"success"})})),e.on("error",(function(e){t.clipboardJSFlag="error",i()({title:"失敗",text:"請重新嘗試複製，或洽詢工作人員",icon:"error"})}))},copy:function(){}})},m=a(66),v=Object(m.a)(f,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"name"}},[this._v("事業體 "),e("small",[this._v("(必填)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"department"}},[this._v("部門 "),e("small",[this._v("(必填)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"name"}},[this._v("姓名 "),e("small",[this._v("(必填)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"jobTitle"}},[this._v("職稱 "),e("small",[this._v("(必填)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"extension"}},[this._v("分機號碼 "),e("small",[this._v("(選填)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"cellphone"}},[this._v("手機 "),e("small",[this._v("(選填)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"email"}},[this._v("Email "),e("small",[this._v("(必填)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{attrs:{for:"lineId"}},[this._v("Line ID "),e("small",[this._v("(選填)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("點擊右側齒輪 "),e("a",{staticClass:"btn btn-warning",attrs:{target:"_blank",href:"https://mail.google.com/mail/u/0/#settings/general"}},[e("i",{staticClass:"fas fa-cog"})]),this._v(" 進入 GMail 設定頁面")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("點擊 GMail 主畫面右上角 "),e("b",{staticClass:"text-primary"},[this._v("齒輪圖示")]),this._v("，並點擊 "),e("b",{staticClass:"text-primary"},[this._v("查看所有設定")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"mt-3 mb-3"},[this._v("\n        a. 在 ＧMail 設定頁面中找到簽名設定，並點擊 "),e("b",{staticClass:"text-primary"},[e("i",{staticClass:"fas fa-plus"}),this._v(" 建立新標籤")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("恭喜你完成您的簽名檔，趕快找一個人來測試寄信看看吧，如果不知道要寄給誰，歡迎寄給 "),e("a",{attrs:{href:"mailto:gg@pressplay.cc"}},[this._v("gg@pressplay.cc")])])}],!1,null,"8cd4f7ea",null);v.options.__file="components/ppSignature/main.vue";e.default=v.exports}}]);