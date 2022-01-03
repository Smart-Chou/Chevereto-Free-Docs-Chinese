import{r,o as a,c,a as e,b as n,w as s,F as i,d as t}from"./app.292a7b1f.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const u={},l=e("h1",{id:"setup-cron",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setup-cron","aria-hidden":"true"},"#"),t(" Setup cron")],-1),h=t("Background jobs needs to be configured by running a "),p=t("cron"),_=t(". You need to configure this and make sure that is working every time you deploy Chevereto."),m=e("div",{class:"custom-container danger"},[e("p",{class:"custom-container-title"},"Must have"),e("p",null,"If this is not configured Chevereto won't remove expired images, check for updates, process external storage deletes and run maintenance tasks.")],-1),f=e("h2",{id:"cron-guides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cron-guides","aria-hidden":"true"},"#"),t(" Cron Guides")],-1),g=t("Setup Cron on cPanel");function v(x,k){const o=r("RouterLink");return a(),c(i,null,[l,e("p",null,[h,n(o,{to:"/setup/system/requirements.html#cron"},{default:s(()=>[p]),_:1}),_]),m,f,e("ul",null,[e("li",null,[n(o,{to:"/setup/server/cpanel.html#setup-cron-on-cpanel"},{default:s(()=>[g]),_:1})])])],64)}var y=d(u,[["render",v]]);export{y as default};