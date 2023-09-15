"use strict";(self.webpackChunkpush_doc_hub_v_2=self.webpackChunkpush_doc_hub_v_2||[]).push([[6060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,p={unversionedId:"dev/chat/ui-components/ChatProfile",id:"dev/chat/ui-components/ChatProfile",title:"ChatProfile",description:"- ChatProfile",source:"@site/docs/dev/chat/ui-components/05-ChatProfile.mdx",sourceDirName:"dev/chat/ui-components",slug:"/dev/chat/ui-components/ChatProfile",permalink:"/dev/chat/ui-components/ChatProfile",draft:!1,editUrl:"https://github.com/ethereum-push-notification-service/push-documentation/docs/dev/chat/ui-components/05-ChatProfile.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"pushChatSidebar",previous:{title:"MessageInput",permalink:"/dev/chat/ui-components/MessageInput"},next:{title:"ChatViewComponent",permalink:"/dev/chat/ui-components/ChatViewComponent"}},l={},c=[],u={toc:c},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ChatProfile"),(0,o.kt)("h3",{parentName:"li",id:"get-the-user-profile-or-group-profile-with-group-info-and-functional-group-edit-options-by-just-importing-chatprofile-and-passing-the-chatid-or-wallet-addressif-w2w"},"get the user profile or group profile (with group info and functional group edit options) by just importing ChatProfile and passing the chatId or wallet address(if w2w)."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Inputs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"chatId- required( recipient\u2019 address if w2w , chatId if its group chat)"),(0,o.kt)("li",{parentName:"ul"},"style - required (Info)"))),(0,o.kt)("li",{parentName:"ul"},"Example",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://github.com/KlausMikhaelson/KlausMikhaelson/assets/100528412/088f3d96-1bd2-4411-a88d-e992658808c7",alt:"Example Image"})),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import ChatProfile from \"@pushprotocol/uiweb\";\n\nexport const ChatProfileTest () => { \nreturn (\n        <ChatProfile chatId={'330cae5f963f2df3d6d692a7075317c906468e3fe60bfb8280a7e125208939e1'} style='Info' />\n    )\n}\n")))))))))}f.isMDXComponent=!0}}]);