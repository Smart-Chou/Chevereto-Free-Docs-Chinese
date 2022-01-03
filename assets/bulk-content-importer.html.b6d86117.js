import{r as e,o as c,c as i,a,b as n,w as t,F as d,e as o,d as s}from"./app.292a7b1f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const m={},b=o('<h1 id="bulk-content-importer" tabindex="-1"><a class="header-anchor" href="#bulk-content-importer" aria-hidden="true">#</a> Bulk content importer</h1><p>This tool allows to <strong>mass import</strong> images, albums, and users by parsing the contents of a filesystem location. It is intended to be used when you want to import a massive amount of content that otherwise will be troublesome to import by using the API or the web gui.</p><div class="custom-container tip"><p class="custom-container-title">Importing != Syncing</p><p>Importing takes the content from the importing path and <em>import it</em> into database, filesystem or external storage. Failed files will be moved to a special directory at <code>./importing/failed/</code>.</p></div><h2 id="how-to-use-it" tabindex="-1"><a class="header-anchor" href="#how-to-use-it" aria-hidden="true">#</a> How to use it</h2>',4),h={class:"custom-container tip"},g=a("p",{class:"custom-container-title"},"demo-importing",-1),k=s("Check the repository at "),f={href:"https://github.com/chevereto/demo-importing",target:"_blank",rel:"noopener noreferrer"},v=s("chevereto/demo-importing"),q=s(" for an example on how to organize your files to use the Bulk content importer."),y=o('<p>Bulk content importer works by scanning the <code>importing/</code> path, where folders are used to denote a given parsing format for the files contained within.</p><p>Placing the content at these directories following the <a href="#parsing-formats">parsing formats</a> conventions will enable to import images to users created as a folder, add categories, etc.</p><table><thead><tr><th><code>./importing/</code></th><th>Parsing</th></tr></thead><tbody><tr><td><code>parse-users/</code></td><td><a href="#top-level-folder-as-username">Top-level folder as username</a></td></tr><tr><td><code>parse-albums/</code></td><td><a href="#top-level-folders-as-albums">Top-level folders as albums</a></td></tr><tr><td><code>no-parse/</code></td><td><a href="#no-parse">No folder parsing</a></td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Go to <code>dashboard/bulk</code> to review importing jobs.</p></div><h3 id="charset" tabindex="-1"><a class="header-anchor" href="#charset" aria-hidden="true">#</a> Charset</h3><p>Files and <code>.json</code> metadata must be in UTF-8.</p><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h3>',7),w=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"sudo"),s(` -u www-data php /var/www/html/cli.php -C importing
`)])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])],-1),_=a("div",{class:"language-bash ext-sh line-numbers-mode"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"sudo"),s(" -u www-data "),a("span",{class:"token assign-left variable"},"IS_CRON"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(),a("span",{class:"token assign-left variable"},"THREAD_ID"),a("span",{class:"token operator"},"="),a("span",{class:"token number"},"1"),s(` php importing.php
`)])]),a("div",{class:"line-numbers"},[a("span",{class:"line-number"},"1"),a("br")])],-1),x=a("h3",{id:"cron-entry",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#cron-entry","aria-hidden":"true"},"#"),s(" Cron entry")],-1),j=s("The importing command can be automatically scheduled by using "),T={href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"},C=s("cron"),I=s(":"),D=o(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>* * * * * COMMAND_HERE <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="threads" tabindex="-1"><a class="header-anchor" href="#threads" aria-hidden="true">#</a> Threads</h3><p>You can speed up the process by running the importing in multiple threads by passing different <code>env</code> for <code>THREAD_ID</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> -u www-data <span class="token assign-left variable">THREAD_ID</span><span class="token operator">=</span><span class="token number">1</span> php cli.php -C importing
<span class="token function">sudo</span> -u www-data <span class="token assign-left variable">THREAD_ID</span><span class="token operator">=</span><span class="token number">2</span> php cli.php -C importing
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="file-locking" tabindex="-1"><a class="header-anchor" href="#file-locking" aria-hidden="true">#</a> File locking</h3><p>The importing process can be locked by placing an empty lock file at <code>./importing/.lock</code>.</p><p>The process won&#39;t be carried until this file gets removed. This comes handy when you want to import a large dataset and you care about the nested folder structure.</p><h2 id="parsing-formats" tabindex="-1"><a class="header-anchor" href="#parsing-formats" aria-hidden="true">#</a> Parsing formats</h2><p>The bulk importer scans the target importing directory and creates content accordingly parsing rules described below. User assets (avatar, background image) will get uploaded to the system user folder.</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>The parser creates users and albums only if those doesn&#39;t exists. It detects if <code>username</code> exists, and it does the same for albums (based on the album name + its owner).</p></div><h3 id="top-level-folder-as-username" tabindex="-1"><a class="header-anchor" href="#top-level-folder-as-username" aria-hidden="true">#</a> Top-level folder as username</h3><p>Top-level folders within the importing path will be handled as <code>username</code>. Second-level folders will be parsed as <code>album name</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./<span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
\u2514\u2500\u2500 rodolfo <span class="token operator">&lt;</span>- username
    \u251C\u2500\u2500 weapons <span class="token operator">&lt;</span>- album name
    \u2502   \u251C\u2500\u2500 machine-gun.jpg
    \u2502   \u2514\u2500\u2500 rocket-launcher.jpg
    \u2514\u2500\u2500 logo-alt.png
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>For the tree above, the parser will:</p><ul><li>Create <code>rodolfo</code> user (if the user doesn&#39;t exists)</li><li>Create album <code>weapons</code> under <code>rodolfo</code> user (if the album doesn&#39;t exists)</li><li>Upload the images contained in <code>./&lt;path&gt;/rodolfo/weapons</code> to rodolfo&#39;s <code>weapons</code> album</li><li>Upload <code>logo-alt.png</code> to <code>rodolfo</code> (no album)</li></ul><h3 id="top-level-folders-as-albums" tabindex="-1"><a class="header-anchor" href="#top-level-folders-as-albums" aria-hidden="true">#</a> Top-level folders as albums</h3><p>Top-level folders within the importing path will be handled as <code>album_name</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./<span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
\u2514\u2500\u2500 weapons <span class="token operator">&lt;</span>- album name
    \u251C\u2500\u2500 machine-gun.jpg
    \u251C\u2500\u2500 rocket-launcher.jpg
    \u2514\u2500\u2500 logo-alt.png
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>For the tree above, the parser will:</p><ul><li>Create album <code>weapons</code> as guest user (if the album doesn&#39;t exists)</li><li>Upload the images contained in <code>./&lt;path&gt;/weapons</code> to <code>weapons</code> album</li></ul><h3 id="no-parse" tabindex="-1"><a class="header-anchor" href="#no-parse" aria-hidden="true">#</a> No parse</h3><p>No folder is parsed, only images will be imported as guest.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./<span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
\u251C\u2500\u2500 machine-gun.jpg
\u251C\u2500\u2500 rocket-launcher.jpg
\u2514\u2500\u2500 logo-alt.png
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>For the tree above, the parser will:</p><ul><li>Upload the images contained in <code>./&lt;path&gt;</code> to public, as guest user.</li></ul><h2 id="statuses" tabindex="-1"><a class="header-anchor" href="#statuses" aria-hidden="true">#</a> Statuses</h2><p>The importing jobs statuses get defined as follow:</p><table><thead><tr><th>Status</th><th>Description</th></tr></thead><tbody><tr><td>Queued</td><td>Job is in the processing queue (default status)</td></tr><tr><td>Working</td><td>Job is being parsed</td></tr><tr><td>Paused</td><td>Job is paused</td></tr><tr><td>Canceled</td><td>Job aborted by the user</td></tr><tr><td>Completed</td><td>Job completed (everything parsed)</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Importing may show &quot;completed&quot; when there&#39;s nothing else to parse, but internally it will get re-queued automatically.</p></div><h2 id="metadata" tabindex="-1"><a class="header-anchor" href="#metadata" aria-hidden="true">#</a> Metadata</h2><p>The bulk importer supports metadata using the JSON format, same as <a href="#importing-from-google-photos">Google Photos</a>. Metadata must be provided per content basis, meaning that you must use one metadata file for each content.</p><div class="custom-container tip"><p class="custom-container-title">UTF-8</p><p>Metadata must be in UTF-8 format. Don&#39;t forget to fix your charset.</p></div><table><thead><tr><th>Content</th><th>Type</th><th>Metadata file</th></tr></thead><tbody><tr><td><code>rodolfo/</code></td><td>username</td><td><code>rodolfo/metadata.json</code></td></tr><tr><td><code>rodolfo/weapons/</code></td><td>album</td><td><code>rodolfo/weapons/metadata.json</code></td></tr><tr><td><code>rodolfo/weapons/machine-gun.jpg</code></td><td>image</td><td><code>rodolfo/weapons/machine-gun.json</code></td></tr><tr><td><code>rodolfo/weapons/rocket-launcher.jpg</code></td><td>image</td><td><code>rodolfo/weapons/rocket-launcher.json</code></td></tr><tr><td><code>rodolfo/logo-alt.png</code></td><td>image</td><td><code>rodolfo/logo-alt.json</code></td></tr></tbody></table><p>Tree below shows metadata for the table above.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./<span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
\u2514\u2500\u2500 rodolfo
    \u251C\u2500\u2500 weapons
    \u2502   \u251C\u2500\u2500 machine-gun.jpg
    \u2502   \u251C\u2500\u2500 machine-gun.json
    \u2502   \u251C\u2500\u2500 rocket-launcher.jpg
    \u2502   \u251C\u2500\u2500 rocket-launcher.json
    \u2502   \u2514\u2500\u2500 metadata.json
    \u251C\u2500\u2500 logo-alt.png
    \u251C\u2500\u2500 logo-alt.json
    \u2514\u2500\u2500 metadata.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Metadata properties merges the content being parsed, meaning that you don&#39;t need to explicitly indicate all properties, only what you need to describe.</p></div><h3 id="image-metadata" tabindex="-1"><a class="header-anchor" href="#image-metadata" aria-hidden="true">#</a> Image metadata</h3><p>JSON metadata file below provides a sample metadata for <code>machine-gun.jpg</code>.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;imageData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Machine gun&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Say hello to my little friend!&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;nsfw&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Guns&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;urlKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Guns&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Guns don&#39;t kill people, sugar does.&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">Image categories</p><p>Image categories will be created if needed long as you provide both <code>name</code> and <code>urlKey</code>.</p></div><h3 id="album-metadata" tabindex="-1"><a class="header-anchor" href="#album-metadata" aria-hidden="true">#</a> Album metadata</h3><p>JSON metadata file bellow provides a sample metadata for <code>guns/</code> album.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;albumData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Guns&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Guns should be banned.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;private&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;privacy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>For album privacy, you can pick from:</p><table><thead><tr><th>Privacy type</th><th>Effect</th></tr></thead><tbody><tr><td><code>public</code></td><td>Public album (default)</td></tr><tr><td><code>private</code></td><td>Private album for owner</td></tr><tr><td><code>private_but_link</code></td><td>Same as <code>private</code> + those with the album link</td></tr><tr><td><code>password</code></td><td>Will set the password for accessing the album</td></tr></tbody></table><p>For example, if you need <code>private_but_link</code> the metadata property should look like this:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;privacy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;private_but_link&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="user-metadata" tabindex="-1"><a class="header-anchor" href="#user-metadata" aria-hidden="true">#</a> User metadata</h3><p>JSON metadata file bellow provides a sample metadata for <code>rodolfo/</code> user.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;userData&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;role&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Rodolfo Berrios&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rodolfo&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rodolfo@chevereto.com&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;website&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://rodolfoberrios.com&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;I&#39;m the Master of Puppets @chevereto, the alpha-omega. He/Him/They.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;profileImages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rodo-avatar.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rodo-bkg.jpg&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;networks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;facebook&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no!&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;twitter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no!&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;timezone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;America/Santiago&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cl&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>Profile images have to be located in the <code>.assets/</code> folder inside the user folder.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./<span class="token operator">&lt;</span>path<span class="token operator">&gt;</span>
\u2514\u2500\u2500 rodolfo
    \u2514\u2500\u2500 .assets
        \u251C\u2500\u2500 rodo-avatar.jpg
        \u2514\u2500\u2500 rodo-bkg.jpg
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">User assets</p><p>The type of the image assets must be one of the file formats handled by your installation.</p></div>`,53);function N(F,S){const p=e("ExternalLinkIcon"),r=e("CodeGroupItem"),l=e("CodeGroup");return c(),i(d,null,[b,a("div",h,[g,a("p",null,[k,a("a",f,[v,n(p)]),q])]),y,n(l,null,{default:t(()=>[n(r,{title:"V3.20+"},{default:t(()=>[w]),_:1}),n(r,{title:"Older"},{default:t(()=>[_]),_:1})]),_:1}),x,a("p",null,[j,a("a",T,[C,n(p)]),I]),D],64)}var E=u(m,[["render",N]]);export{E as default};
