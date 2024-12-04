import{Q as w}from"./QPage.bbb0cf0e.js";import{b as x,Q,c as f}from"./use-quasar.0d0457f1.js";import{Q as q,a as m,g as C}from"./google-icon.31c7635c.js";import{u as S,i as n,o as v,e as y,w as s,f as l,V as U,Q as c,a7 as E,d as k}from"./index.849ce026.js";import{u as B}from"./useAuth.f17d0f46.js";const A={__name:"SignupForm",setup(h){const r=x(),{register:p,loginWithGoogle:_}=B(),u=S(),i=n(""),t=n(""),d=n(""),o=n(!1),b=async()=>{try{if(o.value=!0,t.value!==d.value)throw new Error("Passwords do not match");await p(i.value,t.value),alert("Please verify your email! Redirecting to login..."),u.push("/login")}catch{r.notify({message:"Couldn't sign up. Please try again.",color:"negative",position:"top"})}finally{o.value=!1}},P=async()=>{try{o.value=!0,await _(),alert("Account created successfully! Redirecting to main page..."),u.push("/")}catch{r.notify({message:"Couldn't sign up. Please try again.",color:"negative",position:"top"})}finally{o.value=!1}},V=()=>{u.push("/login")};return(g,a)=>(v(),y(w,{class:"q-pa-md flex flex-center"},{default:s(()=>[l(Q,{flat:"",class:"q-pa-md",style:{"max-width":"400px",width:"100%"}},{default:s(()=>[l(f,null,{default:s(()=>a[3]||(a[3]=[U("div",{class:"text-h6 text-center"},"Sign Up",-1)])),_:1}),l(f,null,{default:s(()=>[l(q,{onSubmit:b},{default:s(()=>[l(m,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),label:"Email",type:"email",outlined:"",dense:"",class:"q-mb-sm",placeholder:"Enter your email",rules:[e=>!!e||"Email is required"]},null,8,["modelValue","rules"]),l(m,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),label:"Password",type:"password",outlined:"",dense:"",class:"q-mb-sm",placeholder:"Enter a password",rules:[e=>!!e||"Password is required"]},null,8,["modelValue","rules"]),l(m,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value=e),label:"Confirm Password",type:"password",outlined:"",dense:"",class:"q-mb-sm",placeholder:"Confirm your password",rules:[e=>e===t.value||"Passwords must match"]},null,8,["modelValue","rules"]),l(c,{type:"submit",label:"Sign Up",color:"indigo",class:"full-width q-mb-sm",loading:o.value},null,8,["loading"])]),_:1}),l(c,{label:"Sign Up with Google",color:"white",icon:"img:"+E(C),class:"full-width q-my-sm","text-color":"primary",unelevated:"",outline:"",onClick:P,loading:o.value},null,8,["icon","loading"]),l(c,{label:"Already have an account? Login",flat:"","no-caps":"",color:"indigo",class:"full-width",onClick:V})]),_:1})]),_:1})]),_:1}))}},N=k({name:"SignupPage",__name:"SignupPage",setup(h){return(r,p)=>(v(),y(w,null,{default:s(()=>[l(A)]),_:1}))}});export{N as default};