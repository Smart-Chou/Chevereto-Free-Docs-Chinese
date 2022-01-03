import{r,o as d,c as h,a as e,b as s,w as t,F as p,d as n,e as i}from"./app.eeb85bd8.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const _={},b=e("h1",{id:"\u8981\u6C42",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8981\u6C42","aria-hidden":"true"},"#"),n(" \u8981\u6C42")],-1),m={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"\u901A\u7528 VPS \u57FA\u7840\u8BBE\u65BD\u53EF\u7528",-1),v=n("\u67E5\u770B\u6211\u4EEC\u7684 "),g={href:"https://github.com/chevereto/vps",target:"_blank",rel:"noopener noreferrer"},f=n("VPS"),k=n(" \u901A\u7528 bash \u811A\u672C\uFF0C\u4E86\u89E3\u6240\u6709\u5305\u542B\u7684\u65E0\u5FE7\u670D\u52A1\u5668\u8BBE\u7F6E\u3002"),C=e("p",null,"\u6700\u4F4E\u673A\u5668\u8981\u6C42\uFF1A",-1),x=e("strong",null,"\u6CE8\u610F\uFF1A",-1),P=n(" \u4EE5\u6700\u4F4E\u8981\u6C42\u8FD0\u884C\u65F6\uFF0C\u5EFA\u8BAE"),I={href:"https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-20-04",target:"_blank",rel:"noopener noreferrer"},V=n("\u6DFB\u52A0\u4EA4\u6362\u7A7A\u95F4"),L=n("\u3002"),N=e("ul",null,[e("li",null,"1GB \u5185\u5B58"),e("li",null,"1 \u4E2A\u4E2D\u592E\u5904\u7406\u5668")],-1),O=e("h2",{id:"\u8F6F\u4EF6\u8981\u6C42",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8F6F\u4EF6\u8981\u6C42","aria-hidden":"true"},"#"),n(" \u8F6F\u4EF6\u8981\u6C42")],-1),E=n("\u670D\u52A1\u5668\u8981\u6C42"),G=n("\u5BB9\u5668\u8981\u6C42"),H=e("h2",{id:"cron",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cron","aria-hidden":"true"},"#"),n(" Cron")],-1),S=n("\u9700\u8981 "),B={href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"},R=n("cron"),q=n(" \u6765\u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u540E\u53F0\u4F5C\u4E1A\u3002 cron \u662F\u5B9A\u671F\u6267\u884C\u547D\u4EE4\u7684\u7CFB\u7EDF\uFF0C\u8FD9\u6837 Chevereto \u53EF\u4EE5\u5728\u540E\u53F0\u6267\u884C\u64CD\u4F5C\u3002"),j=i('<div class="custom-container tip"><p class="custom-container-title">\u68C0\u67E5\u60A8\u7684\u670D\u52A1\u5668\u6587\u6863</p><p>\u6B64 cron \u8BBE\u7F6E\u53C2\u8003\u4EC5\u9002\u7528\u4E8E\u5177\u6709 root \u8BBF\u95EE\u6743\u9650\u7684\u57FA\u4E8E Debian \u7684\u670D\u52A1\u5668\u3002\u6211\u4EEC<strong>\u5F3A\u70C8\u5EFA\u8BAE</strong>\u68C0\u67E5\u60A8\u7684\u670D\u52A1\u5668\u6587\u6863\uFF0C\u4E86\u89E3\u5982\u4F55\u8BBE\u7F6E\u548C\u8FD0\u884C cron\u3002</p></div><h3 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h3><p>\u8BE5\u547D\u4EE4\u5E94\u8BE5\u7531 web-server \u7528\u6237\u8FD0\u884C\uFF0C\u5B83\u662F <code>www-data</code>(\u53EF\u80FD\u4F1A\u6709\u6240\u4E0D\u540C)\u3002\u8981\u5728 Chevereto \u4E2D\u8FD0\u884C\u8BE5\u547D\u4EE4\uFF0C\u5B83\u9700\u8981\u5728 Chevereto CLI \u4E2D\u8C03\u7528 PHP \u4E8C\u8FDB\u5236\u6587\u4EF6\u3002</p><div class="custom-container tip"><p class="custom-container-title">PHP \u4E8C\u8FDB\u5236\u6587\u4EF6</p><p>\u4F7F\u7528 <code>which php</code> \u6765\u5B9A\u4F4D PHP \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u56E0\u4E3A\u5B83\u7684\u4F4D\u7F6E\u5728\u4E0D\u540C\u7684\u7CFB\u7EDF\u548C\u914D\u7F6E\u4E2D\u53EF\u80FD\u4F1A\u6709\u6240\u4E0D\u540C\u3002</p></div><p>\u4E0B\u9762\u7684\u547D\u4EE4\u4F7F\u7528 <code>sudo -u www-data</code> \u4EE5 <code>www-data</code> \u7528\u6237\u6743\u9650\u8FD0\u884C\u547D\u4EE4\u3002 PHP \u4E8C\u8FDB\u5236\u6587\u4EF6\u4F4D\u4E8E <code>php</code>\uFF0C\u800C Chevereto CLI \u4F4D\u4E8E <code>/var/www/html/cli.php</code>\u3002\u4F20\u9012\u7ED9 Chevereto \u7684\u547D\u4EE4\u53C2\u6570\u662F<code>-C cron</code>\u3002</p>',5),D=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),n(" -u www-data php /var/www/html/cli.php -C "),e("span",{class:"token function"},"cron"),n(`
`)])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),F=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"sudo"),n(" -u www-data "),e("span",{class:"token assign-left variable"},"IS_CRON"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"1"),n(` php /var/www/html/cron.php
`)])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),M=e("h4",{id:"docker-\u547D\u4EE4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-\u547D\u4EE4","aria-hidden":"true"},"#"),n(" Docker \u547D\u4EE4")],-1),y=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[n("docker "),e("span",{class:"token builtin class-name"},"exec"),n(" -it "),e("span",{class:"token punctuation"},"\\"),n(`
    --user www-data `),e("span",{class:"token punctuation"},"\\"),n(`
    chevereto-container php /var/www/html/cli.php -C `),e("span",{class:"token function"},"cron"),n(`
`)])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br")])],-1),T=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[n("docker "),e("span",{class:"token builtin class-name"},"exec"),n(" -it "),e("span",{class:"token punctuation"},"\\"),n(`
    --user www-data `),e("span",{class:"token punctuation"},"\\"),n(`
    -e `),e("span",{class:"token assign-left variable"},"IS_CRON"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"1"),n(),e("span",{class:"token punctuation"},"\\"),n(`
    chevereto-container php /var/www/html/cron.php
`)])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br")])],-1),z=e("h3",{id:"cron-d-\u6587\u4EF6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cron-d-\u6587\u4EF6","aria-hidden":"true"},"#"),n(" Cron.d \u6587\u4EF6")],-1),A=n("\u4F7F\u7528 "),J={href:"https://manpages.debian.org/stretch/cron/cron.8",target:"_blank",rel:"noopener noreferrer"},K=n("cron.d \u6587\u4EF6"),Q=n(" \u53EF\u4EE5\u8F7B\u677E\u8BBE\u7F6E cron\u3002\u4F8B\u5982\uFF1A"),U=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span>/etc/cron.d/chevereto <span class="token operator">&lt;&lt;</span><span class="token string">EOM
* * * * * www-data php /var/www/html/cli.php -C cron
EOM</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="cron-\u8BA1\u5212" tabindex="-1"><a class="header-anchor" href="#cron-\u8BA1\u5212" aria-hidden="true">#</a> Cron \u8BA1\u5212</h3>`,2),W=n("\u5728\u4E0A\u9762\u7684\u6307\u4EE4\u4E2D "),X={href:"https://crontab.guru/#*_*_*_*_*",target:"_blank",rel:"noopener noreferrer"},Y=n("* * * * *"),Z=n(" \u662F\u6BCF\u5206\u949F\u8FD0\u884C\u7684 cron \u8BA1\u5212\u3002"),$=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"\u9002\u5408\u4F60\u7684\u60C5\u51B5"),e("p",null,"\u4E0A\u8FF0\u9ED8\u8BA4 cron \u5728\u8FD0\u884C\u6211\u4EEC\u7684\u5B98\u65B9\u914D\u7F6E\u65F6\u6709\u6548\u3002\u5982\u679C\u60A8\u4E0D\u4F7F\u7528\u6211\u4EEC\u7684\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u60A8\u5C06\u9700\u8981\u66F4\u6539\u7528\u6237\u3001PHP \u4E8C\u8FDB\u5236\u6587\u4EF6\u548C Chevereto CLI \u4F4D\u7F6E\u7684\u9ED8\u8BA4\u8BF4\u660E\u3002\u8BF7\u53C2\u9605\u60A8\u7684\u7CFB\u7EDF\u6587\u6863\u3002")],-1);function ee(ne,se){const a=r("ExternalLinkIcon"),c=r("RouterLink"),o=r("CodeGroupItem"),l=r("CodeGroup");return d(),h(p,null,[b,e("div",m,[w,e("p",null,[v,e("a",g,[f,s(a)]),k])]),C,e("p",null,[x,P,e("a",I,[V,s(a)]),L]),N,O,e("ul",null,[e("li",null,[s(c,{to:"/setup/server/requirements.html"},{default:t(()=>[E]),_:1})]),e("li",null,[s(c,{to:"/setup/container/requirements.html"},{default:t(()=>[G]),_:1})])]),H,e("p",null,[S,e("a",B,[R,s(a)]),q]),j,s(l,null,{default:t(()=>[s(o,{title:"V3.20+"},{default:t(()=>[D]),_:1}),s(o,{title:"Older"},{default:t(()=>[F]),_:1})]),_:1}),M,s(l,null,{default:t(()=>[s(o,{title:"V3.20+"},{default:t(()=>[y]),_:1}),s(o,{title:"Older"},{default:t(()=>[T]),_:1})]),_:1}),z,e("p",null,[A,e("a",J,[K,s(a)]),Q]),U,e("p",null,[W,e("a",X,[Y,s(a)]),Z]),$],64)}var oe=u(_,[["render",ee]]);export{oe as default};
