import{d as V,a as $,c as b,r as y,b as M,w as C,o as r,e as u,f as d,g as S,v as w,t as T,_ as B,F as I,h as z,i as L,j as O,u as J}from"./index-Dzbpk85X.js";import{u as E,a as K}from"./card-E07Ub78T.js";const N=V("dragZonesStore",{state:()=>({dragZone:{id:1,text:"new drag zone",column:1},dragZones:[{id:1,text:"drag zone 1",column:1},{id:2,text:"drag zone 2",column:2}]}),persist:!0,actions:{getDragZones(){return this.dragZones},setDragZones(a){this.dragZones=a},addDragZoneTitle(a){this.dragZones.push(a)},updateDragZoneTitle(a){this.dragZones=this.dragZones.map(i=>i.id===a.id?a:i)},removeDragZoneTitle(a){this.dragZones=this.dragZones.filter(i=>i.id!==a)}}}),U=["id"],F={key:0,class:"edit-mode"},j={key:1,class:"show-mode"},A={class:"title"},H={class:"text"},q=$({__name:"DragCard",props:{card:{}},emits:["dragstart"],setup(a,{emit:i}){const m=N();b(()=>m.getDragZones());const g=a,h=i,v=E(),c=y({id:null,title:"",text:"",column:null}),p=y(!1),k=(t,n)=>{h("dragstart",t,n)},Z=()=>{p.value=!0,c.value=JSON.parse(JSON.stringify(g.card))},_=()=>{p.value=!1,v.updateCard(c.value),c.value={id:null,title:"",text:"",column:null}},o=()=>{p.value=!1};return(t,n)=>{const e=M("click-outside");return C((r(),u("div",{class:"drag-card",id:`${g.card.id}`,draggable:"true",onDragstart:n[2]||(n[2]=s=>k(s,t.card)),onDblclick:Z},[p.value?(r(),u("div",F,[C(d("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>c.value.title=s),onKeypress:S(_,["enter"]),class:"title",type:"text"},null,544),[[w,c.value.title]]),C(d("textarea",{"onUpdate:modelValue":n[1]||(n[1]=s=>c.value.text=s),onKeypress:S(_,["enter"]),class:"text"},null,544),[[w,c.value.text]]),d("button",{onClick:_,class:"btn-save"},"save")])):(r(),u("div",j,[d("div",A,T(t.card.title),1),d("div",H,T(t.card.text),1)]))],40,U)),[[e,o]])}}}),G=B(q,[["__scopeId","data-v-40274cc8"]]),P={class:"dragboard"},Q={class:"container"},R={class:"dragtable",id:"dragtable"},W=["onDrop"],X=["onDblclick"],Y=["onUpdate:modelValue"],ee={key:1},te=["onClick"],se=$({__name:"DragTable",setup(a){const i=N(),m=b(()=>i.getDragZones()),g=E(),h=b(()=>g.getCardList()),v=y(-1),c=o=>h.value.filter(t=>t.column===o),p=(o,t)=>{o.dataTransfer.dropEffect="move",o.dataTransfer.effectAllowed="move",o.dataTransfer.setData("itemID",t.id)},k=(o,t)=>{const n=o.dataTransfer.getData("itemID"),e=JSON.parse(JSON.stringify(g.getCardList()));let s=e.find(f=>f.id===+n);const l=e.findIndex(f=>+f.id==+s.id),D=o.toElement.closest(".drag-card");let x;if(!D||!D.id){s.column=t,g.updateCard(s);return}console.log("nextCardId",D.id),console.log("currentCardsList",e),x=e.findIndex(f=>+f.id==+D.id),console.log("nextCardIndex",e[x],x),s.column=t,e.splice(l,1),e.splice(x,0,s),g.setCardList(e)},Z=()=>{const o={id:Math.floor(Math.random()*1e5),text:"new drag zone",column:m.value.length+1};i.addDragZoneTitle(o)},_=()=>{v.value=-1};return(o,t)=>{const n=M("click-outside");return r(),u("section",P,[d("div",Q,[d("div",R,[(r(!0),u(I,null,z(m.value,(e,s)=>(r(),u("div",{key:e.id,class:"drag-zone",onDrop:l=>k(l,e.column),onDragenter:t[0]||(t[0]=L(()=>{},["prevent"])),onDragover:t[1]||(t[1]=L(()=>{},["prevent"]))},[d("div",{onDblclick:l=>v.value=s,class:"drag-zone-title"},[v.value===s?C((r(),u("input",{key:0,"onUpdate:modelValue":l=>e.text=l,class:"edit-mode",onKeydown:S(_,["esc"])},null,40,Y)),[[w,e.text],[n,_]]):(r(),u("p",ee,T(e.text),1))],40,X),(r(!0),u(I,null,z(c(e.column),l=>(r(),O(G,{key:l.id,card:l,onDragstart:p},null,8,["card"]))),128)),d("button",{onClick:l=>J(K)(e.column),class:"btn-add-card"}," + ",8,te)],40,W))),128)),d("div",{class:"drag-zone-add"},[d("button",{onClick:Z,class:"btn-add-zone"}," + ")])])])])}}}),ne=$({__name:"Home",setup(a){return(i,m)=>(r(),O(se))}});export{ne as default};