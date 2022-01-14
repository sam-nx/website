import{r as o,o as p,c as u,a as n,b as t,w as a,F as i,e as s}from"./app.4c04c0d0.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const k={},d=n("h1",{id:"basic-button-listener",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-button-listener","aria-hidden":"true"},"#"),s(" Basic button listener")],-1),b=s("With sheweny each button must be a class which extends from the "),m=s("Button"),h=s(" class"),_=n("h2",{id:"import-button",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import-button","aria-hidden":"true"},"#"),s(" Import Button")],-1),f=s("Import the "),y=s("Button"),g=s(" class :"),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Button "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),x=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Button "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br")])],-1),B=n("h2",{id:"create-the-button-listner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-the-button-listner","aria-hidden":"true"},"#"),s(" Create the button listner")],-1),v=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Button "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

module`),n("span",{class:"token punctuation"},"."),s("exports "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Btns"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Button"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"client"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"btnId1"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"btnId2"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"button"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("button"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br")])],-1),j=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Button "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ShewenyClient "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"sheweny"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ButtonInteraction "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"discord.js"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Btns"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"Button"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token operator"},":"),s(" ShewenyClient"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("client"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"btnId1"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"btnId2"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"execute"),n("span",{class:"token punctuation"},"("),s("button"),n("span",{class:"token operator"},":"),s(" ButtonInteraction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("button"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br")])],-1);function C(I,S){const c=o("RouterLink"),e=o("CodeGroupItem"),l=o("CodeGroup");return p(),u(i,null,[d,n("p",null,[b,t(c,{to:"/doc/structures/Button.html"},{default:a(()=>[m]),_:1}),h]),_,n("p",null,[f,t(c,{to:"/doc/structures/Button.html"},{default:a(()=>[y]),_:1}),g]),t(l,null,{default:a(()=>[t(e,{title:"CommonJS"},{default:a(()=>[w]),_:1}),t(e,{title:"ESM"},{default:a(()=>[x]),_:1})]),_:1}),B,t(l,null,{default:a(()=>[t(e,{title:"JS CommonJS"},{default:a(()=>[v]),_:1}),t(e,{title:"TS ES Modules"},{default:a(()=>[j]),_:1})]),_:1})],64)}var J=r(k,[["render",C]]);export{J as default};
