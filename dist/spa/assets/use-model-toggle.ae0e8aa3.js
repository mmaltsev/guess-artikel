import{c as q,a5 as k,a6 as z,a as n,h as y,b as A,p as C,v as x,a7 as B,k as Q,m as S}from"./index.da6493bb.js";import{u as T,a as H}from"./use-quasar.8f50ecf4.js";var D=q({name:"QCardActions",props:{...k,vertical:Boolean},setup(e,{slots:r}){const i=z(e),l=n(()=>`q-card__actions ${i.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>y("div",{class:l.value},A(r.default))}});const P={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},g={xs:2,sm:4,md:8,lg:16,xl:24};var j=q({name:"QSeparator",props:{...T,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const r=C(),i=H(e,r.proxy.$q),l=n(()=>e.vertical===!0?"vertical":"horizontal"),c=n(()=>` q-separator--${l.value}`),m=n(()=>e.inset!==!1?`${c.value}-${P[e.inset]}`:""),d=n(()=>`q-separator${c.value}${m.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?" q-separator--dark":"")),t=n(()=>{const o={};if(e.size!==void 0&&(o[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const f=e.spaced===!0?`${g.md}px`:e.spaced in g?`${g[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];o[`margin${s[0]}`]=o[`margin${s[1]}`]=f}return o});return()=>y("hr",{class:d.value,style:t.value,"aria-orientation":l.value})}});const w={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},E=["beforeShow","show","beforeHide","hide"];function F({showing:e,canShow:r,hideOnRouteChange:i,handleShow:l,handleHide:c,processOnMount:m}){const d=C(),{props:t,emit:o,proxy:f}=d;let s;function M(a){e.value===!0?v(a):p(a)}function p(a){if(t.disable===!0||a!==void 0&&a.qAnchorHandled===!0||r!==void 0&&r(a)!==!0)return;const u=t["onUpdate:modelValue"]!==void 0;u===!0&&(o("update:modelValue",!0),s=a,S(()=>{s===a&&(s=void 0)})),(t.modelValue===null||u===!1)&&b(a)}function b(a){e.value!==!0&&(e.value=!0,o("beforeShow",a),l!==void 0?l(a):o("show",a))}function v(a){if(t.disable===!0)return;const u=t["onUpdate:modelValue"]!==void 0;u===!0&&(o("update:modelValue",!1),s=a,S(()=>{s===a&&(s=void 0)})),(t.modelValue===null||u===!1)&&$(a)}function $(a){e.value!==!1&&(e.value=!1,o("beforeHide",a),c!==void 0?c(a):o("hide",a))}function h(a){t.disable===!0&&a===!0?t["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!1):a===!0!==e.value&&(a===!0?b:$)(s)}x(()=>t.modelValue,h),i!==void 0&&B(d)===!0&&x(()=>f.$route.fullPath,()=>{i.value===!0&&e.value===!0&&v()}),m===!0&&Q(()=>{h(t.modelValue)});const V={show:p,hide:v,toggle:M};return Object.assign(f,V),V}export{j as Q,E as a,F as b,D as c,w as u};