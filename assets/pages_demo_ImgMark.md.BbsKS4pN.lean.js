const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.es.BKSopKJH.js","assets/chunks/framework.DPDg7N6I.js"])))=>i.map(i=>d[i]);
import{d as F,p as u,a4 as U,V as j,o as d,c as p,j as a,G as k,k as r,a3 as C,F as _,C as v,t as w,_ as H,a as S,w as J,B as A}from"./chunks/framework.DPDg7N6I.js";var s=256,y=[],I=256,c;for(;s--;)y[s]=(s+256).toString(16).substring(1);function L(h){var i=0,n=h||11;if(!c||s+n>I*2)for(c="",s=0;i<I;i++)c+=y[Math.random()*256|0];return c.substring(s,s+++n)}const G={class:"page-test-img-mark"},W={style:{width:"50vw",height:"60vh",background:"#ccc","box-sizing":"border-box","flex-shrink":"0"}},Z={class:"info-panel"},q=["onMouseenter","onMouseleave","title"],K=F({__name:"ImgMarkDemo",setup(h){let i=u(null);U(async()=>{i.value=(await j(async()=>{const{ImgMark:e}=await import("./chunks/index.es.BKSopKJH.js");return{ImgMark:e}},__vite__mapDeps([0,1]))).ImgMark});let n=u("/img/imgMarkDemoImg.jpg"),l=u("crop"),m=u([{__uid:"1",startX:0,startY:0,endX:1774,endY:100}]),f=u([{__uid:"1",startX:50,startY:0,endX:100,endY:50,isShow:!0,type:1,labelText:"haha",tagConfig:{highlightStrokeStyle:"#ccc",customDraw(e,o){e.fillStyle="black",e.fillRect(o.positions[0],o.positions[1],5,5)}},onClick(e,o){o.showOutLine=!o.showOutLine,g.value.render()}},{__uid:"2",startX:0,startY:0,endX:1774,endY:100,isShow:!0,type:1,showOutLine:!0,tagConfig:{highlightStrokeStyle:"red",highlightLineDash:[0]}}]),g=u();function b(e){console.log("onLoadImage",e)}function D(e){console.log("resizeStart",e)}function T(e){console.log("resizeEnd",e);let o=g.value.getTagListGroupByCropIndex("allIn");console.log("group",o)}function M(){console.log("drawCropStart...")}function O(){console.log("drawTagStart...")}function X(e){console.log("delCrop",e)}let x=[{startX:50,startY:0,endX:51,endY:1},{startX:50,startY:100,endX:51,endY:101}];function z(e,o){e.lineWidth=5,e.beginPath();let t=o(x);e.moveTo(t[0][0],t[0][1]),e.lineTo(t[1][0],t[1][1]),e.strokeStyle="green",e.setLineDash([0]),e.stroke()}function E(e){e&&g.value.removeTagItems(e)}function Y(e){console.log(111,e)}function R(e){console.log("tagsListChange",e),e.type=="statusChange"&&g.value.hooks.shiftDrawSwitch("on"),e.type=="add"&&g.value.hooks.shiftDrawSwitch("off")}function B(e){e.showOutLine=!0}function P(e){e.showOutLine=!1}function N(e){let o=e.filter(t=>!t.type);o.length!==0&&E(o)}return(e,o)=>(d(),p("div",G,[a("div",W,[k(r(i),{ref_key:"imgMarkRef",ref:g,src:r(n),mode:r(l),"onUpdate:mode":o[0]||(o[0]=t=>C(l)?l.value=t:l=t),tagList:r(f),"onUpdate:tagList":o[1]||(o[1]=t=>C(f)?f.value=t:f=t),cropList:r(m),"onUpdate:cropList":o[2]||(o[2]=t=>C(m)?m.value=t:m=t),onCropListChange:Y,onTagsStatusChange:N,onResizeStart:D,onResizeEnd:T,onDelCrop:X,drawingText:"lala",onTagListChange:R,onDrawCropStart:M,onDrawTagStart:O,onOnLoadImage:b,customDrawTopCtx:z,enableCropResize:!0,"enable-tag-resize":!0,enableInteractiveTagChangeStatus:!1,tagConfig:{fontSize:50},splitClickAndDoubleClickEvent:!0,isCropSingle:!1,isImgCrop:!0,isShowTip:!0,enableDrawCropOutOfImg:!1,enableDrawTagOutOfCrop:!0,enableDrawTagOutOfImg:!1},null,8,["src","mode","tagList","cropList"])]),a("div",Z,[(d(!0),p(_,null,v(r(f),t=>(d(),p("div",{onMouseenter:V=>B(t),onMouseleave:V=>P(t),style:{"margin-top":"20px"},key:r(L)(6),title:JSON.stringify(t),type:"warning"},w(t),41,q))),128)),o[3]||(o[3]=a("hr",null,null,-1)),(d(!0),p(_,null,v(r(m),t=>(d(),p("div",{style:{"margin-top":"20px"},key:r(L)(6),type:"warning"},w(JSON.stringify(t)),1))),128))])]))}}),Q=H(K,[["__scopeId","data-v-1235c3b4"]]),te=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/demo/ImgMark.md","filePath":"pages/demo/ImgMark.md"}'),$={name:"pages/demo/ImgMark.md"},oe=Object.assign($,{setup(h){return(i,n)=>{const l=A("ClientOnly");return d(),p("div",null,[n[0]||(n[0]=a("h2",{id:"imgmark-组件演示",tabindex:"-1"},[S("ImgMark 组件演示 "),a("a",{class:"header-anchor",href:"#imgmark-组件演示","aria-label":'Permalink to "ImgMark 组件演示"'},"​")],-1)),n[1]||(n[1]=a("h4",{id:"操作说明",tabindex:"-1"},[S("操作说明： "),a("a",{class:"header-anchor",href:"#操作说明","aria-label":'Permalink to "操作说明："'},"​")],-1)),n[2]||(n[2]=a("ol",null,[a("li",null,"空格 + hold 鼠标左键拖动进行标注"),a("li",null,"Ctrl +B 切换模式为裁切或 tag 标注"),a("li",null,"鼠标滚轮放大缩小画布"),a("li",null,"hold 鼠标左键拖动画布"),a("li",null,"鼠标移动到裁切框后 hold 鼠标左键可 resize")],-1)),k(l,null,{default:J(()=>[k(Q)]),_:1})])}}});export{te as __pageData,oe as default};
