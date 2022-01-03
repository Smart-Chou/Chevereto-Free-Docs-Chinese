import{r as t,o as c,c as u,a as e,b as s,w as a,F as p,d as n}from"./app.292a7b1f.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},_=e("h1",{id:"updating",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#updating","aria-hidden":"true"},"#"),n(" Updating")],-1),m=e("p",null,"This section outlines the update process required to upgrade to V3 from old releases (V3.X).",-1),g={class:"custom-container danger"},f=e("p",{class:"custom-container-title"},"Checklist",-1),k=n("Check that your server meets the "),b=n("requirements"),y=n(" for running the target release to update."),v=e("li",null,"Make sure to have a recent backup of your database and your code modifications (if any).",-1),w=e("li",null,"After the update you will need to re-apply your modifications.",-1),C=e("h2",{id:"using-release-package",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-release-package","aria-hidden":"true"},"#"),n(" Using Release package")],-1),x=e("p",null,[n("The release package is a "),e("code",null,"zip"),n(" file containing the software files. Once extracted, the software is ready to be updated.")],-1),L=e("p",null,[n("\u{1F449} This method is recommended for "),e("strong",null,"cPanel"),n(", "),e("strong",null,"Plesk"),n(" and other web panel users.")],-1),I=n("Upload the "),T={href:"https://chevereto.com/panel/downloads",target:"_blank",rel:"noopener noreferrer"},E=n("latest release"),z=n(" package to your server (usually in the "),R=e("code",null,"public_html",-1),U=n(" folder)"),V=e("li",null,[n("Unzip the software using your server built-in "),e("code",null,"unzip"),n(" utility")],-1),N=e("li",null,[n("Remove the "),e("code",null,".zip"),n(" file")],-1),P=e("li",null,"Open your target website URL and follow the instructions",-1),G=e("h2",{id:"using-composer-package-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-composer-package-manager","aria-hidden":"true"},"#"),n(" Using Composer package manager")],-1),S=e("p",null,"Using Composer the update carried in CLI context. It requires:",-1),O=e("li",null,[n("CLI with "),e("code",null,"curl"),n(", "),e("code",null,"unzip")],-1),q={href:"https://getcomposer.org/",target:"_blank",rel:"noopener noreferrer"},j=n("Composer"),B=e("p",null,[n("\u{1F449} This method is recommended for "),e("strong",null,"VPS"),n(" and machines with "),e("strong",null,"CLI access"),n(".")],-1),H=e("ul",null,[e("li",null,[n("Run the following command from your "),e("strong",null,"Chevereto project folder"),n(":")])],-1),D=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token assign-left variable"},"LICENSE"),e("span",{class:"token operator"},"="),n("YOUR_V3_LICENSE_KEY "),e("span",{class:"token operator"},"&&"),n(`
`),e("span",{class:"token function"},"curl"),n(" -f -SOJL "),e("span",{class:"token punctuation"},"\\"),n(`
    -X POST -d `),e("span",{class:"token string"},'"nowrap"'),n(),e("span",{class:"token punctuation"},"\\"),n(`
    -H `),e("span",{class:"token string"},[n('"License: '),e("span",{class:"token variable"},"$LICENSE"),n('"')]),n(),e("span",{class:"token punctuation"},"\\"),n(`
    `),e("span",{class:"token string"},'"https://chevereto.com/api/download/3.20"'),n(),e("span",{class:"token punctuation"},"\\"),n(`
`),e("span",{class:"token operator"},"&&"),n(),e("span",{class:"token function"},"unzip"),n(" chevereto*.zip "),e("span",{class:"token punctuation"},"\\"),n(`
`),e("span",{class:"token operator"},"&&"),n(),e("span",{class:"token function"},"rm"),n(" -rf chevereto*.zip "),e("span",{class:"token punctuation"},"\\"),n(`
`),e("span",{class:"token operator"},"&&"),n(),e("span",{class:"token function"},"composer"),n(),e("span",{class:"token function"},"install"),n(),e("span",{class:"token punctuation"},"\\"),n(`
`),e("span",{class:"token operator"},"&&"),n(),e("span",{class:"token function"},"chown"),n(" www-data: "),e("span",{class:"token builtin class-name"},"."),n(" -R "),e("span",{class:"token punctuation"},"\\"),n(`
`),e("span",{class:"token operator"},"&&"),n(" php cli.php -C "),e("span",{class:"token function"},"install"),n(`
`)])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br"),e("span",{class:"line-number"},"8"),e("br"),e("span",{class:"line-number"},"9"),e("br"),e("span",{class:"line-number"},"10"),e("br")])],-1),F=e("h2",{id:"http-update-legacy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#http-update-legacy","aria-hidden":"true"},"#"),n(" HTTP update (legacy)")],-1),X=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"Not working?"),e("p",null,"The HTTP method doesn't provide the same reliability as the other methods. Don't worry if it randomly fails, if that ever happens simply try again with an alternative update method instead.")],-1),Y=e("p",null,"\u{1F449} This method should be used only as last resort.",-1),A=n("Go to "),J={href:"https://chevereto.com/panel/license",target:"_blank",rel:"noopener noreferrer"},K=n("panel/license"),M=n(" and grab your V3 license key"),$=e("li",null,[n("Go to "),e("code",null,"/dashboard"),n(' and click on "check for updates"')],-1),Q=e("li",null,"Install the update when prompted",-1),W=e("li",null,"Provide your license key",-1);function Z(ee,ne){const l=t("RouterLink"),o=t("ExternalLinkIcon"),r=t("CodeGroupItem"),i=t("CodeGroup");return c(),u(p,null,[_,m,e("div",g,[f,e("ul",null,[e("li",null,[k,s(l,{to:"/setup/server/requirements.html"},{default:a(()=>[b]),_:1}),y]),v,w])]),C,x,L,e("ul",null,[e("li",null,[I,e("a",T,[E,s(o)]),z,R,U]),V,N,P]),G,S,e("ul",null,[O,e("li",null,[e("a",q,[j,s(o)])])]),B,H,s(i,null,{default:a(()=>[s(r,{title:"Debian"},{default:a(()=>[D]),_:1})]),_:1}),F,X,Y,e("ul",null,[e("li",null,[A,e("a",J,[K,s(o)]),M]),$,Q,W])],64)}var oe=d(h,[["render",Z]]);export{oe as default};
