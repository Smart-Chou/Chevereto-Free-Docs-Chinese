import{r as d,o as n,c as l,a as e,b as s,w as i,F as r,e as o,d as t}from"./app.292a7b1f.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=o(`<h1 id="system" tabindex="-1"><a class="header-anchor" href="#system" aria-hidden="true">#</a> System</h1><p><code>/dashboard/settings/system</code></p><h2 id="automatic-updates-check" tabindex="-1"><a class="header-anchor" href="#automatic-updates-check" aria-hidden="true">#</a> Automatic updates check</h2><p>Toggles the automatic updates check. When enabled, your installation will automatically check for new updates.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable automatic updates check</td></tr><tr><td>Disabled</td><td>Disable automatic updates check</td></tr></tbody></table><h2 id="display-available-updates-notification" tabindex="-1"><a class="header-anchor" href="#display-available-updates-notification" aria-hidden="true">#</a> Display available updates notification</h2><p>Toggles the display of a system notification on update available.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable available updates notification</td></tr><tr><td>Disabled</td><td>Disable available updates notification</td></tr></tbody></table><h2 id="dump-update-query" tabindex="-1"><a class="header-anchor" href="#dump-update-query" aria-hidden="true">#</a> Dump update query</h2><p>Toggles the display of the update query. When enabled, the update query will be shown and not executed.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This is automatically enabled if the installation holds more than 1,000,000 (1M) images. This is because is safer to run the query directly in the database console.</p></div><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Dump the update query (queries should be manually executed)</td></tr><tr><td>Disabled</td><td>Run the update query (queries will be executed directly)</td></tr></tbody></table><h2 id="seo-image-urls" tabindex="-1"><a class="header-anchor" href="#seo-image-urls" aria-hidden="true">#</a> SEO image URLs</h2><p>Toggles image SEO URLs.</p><p>When enabled, the image URL will contain its title, like <code>/image/image-title.&lt;id&gt;</code>.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable SEO image URLs</td></tr><tr><td>Disabled</td><td>Disable SEO image URLs</td></tr></tbody></table><h2 id="seo-album-urls" tabindex="-1"><a class="header-anchor" href="#seo-album-urls" aria-hidden="true">#</a> SEO album URLs</h2><p>Toggles album SEO URLs.</p><p>When enabled, the album URL will contain its title, like <code>/album/album-name.&lt;id&gt;</code>.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable SEO album URLs</td></tr><tr><td>Disabled</td><td>Disable SEO album URLs</td></tr></tbody></table><h2 id="minify-code" tabindex="-1"><a class="header-anchor" href="#minify-code" aria-hidden="true">#</a> Minify code</h2><p>Toggles CSS and JSS minification.</p><p>When enabled, <code>*.min.js</code> and <code>*.min.css</code> will be automatically used.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable minify code</td></tr><tr><td>Disabled</td><td>Disable minify code</td></tr></tbody></table><h2 id="maintenance" tabindex="-1"><a class="header-anchor" href="#maintenance" aria-hidden="true">#</a> Maintenance</h2><p>Toggles maintenance mode.</p><p>When enabled, the website will show a maintenance message and no actions will be allowed.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable maintenance mode</td></tr><tr><td>Disabled</td><td>Disable maintenance mode</td></tr></tbody></table><h2 id="crypt-salt" tabindex="-1"><a class="header-anchor" href="#crypt-salt" aria-hidden="true">#</a> Crypt salt</h2><p>The crypt salt used to encode DB integer IDs to alphanumeric representations.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This value is shown only for reference. It shouldn&#39;t be edited.</p></div><table><thead><tr><th>Type</th><th>Example</th></tr></thead><tbody><tr><td>String</td><td>bnnnfer98</td></tr></tbody></table><h2 id="php-error-reporting" tabindex="-1"><a class="header-anchor" href="#php-error-reporting" aria-hidden="true">#</a> PHP error reporting</h2><p>Toggles PHP error reporting. When enabled, the system will use:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token constant">E_ALL</span> <span class="token operator">^</span> <span class="token constant">E_NOTICE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable PHP error reporting</td></tr><tr><td>Disabled</td><td>Disable PHP error reporting</td></tr></tbody></table><h2 id="debug-level" tabindex="-1"><a class="header-anchor" href="#debug-level" aria-hidden="true">#</a> Debug level</h2>`,37),p=t("Shows the debug level. This value is taken from the "),b=t("settings file"),m=t("."),f=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Type"),e("th",null,"Example")])]),e("tbody",null,[e("tr",null,[e("td",null,"Integer"),e("td",null,"Print and log errors")])])],-1);function y(g,E){const a=d("RouterLink");return n(),l(r,null,[u,e("p",null,[p,s(a,{to:"/en/setup/settings-file.html"},{default:i(()=>[b]),_:1}),m]),f],64)}var x=h(c,[["render",y]]);export{x as default};
