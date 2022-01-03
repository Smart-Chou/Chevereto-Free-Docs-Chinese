import{r as p,o as t,c as o,a as s,b as r,F as l,e as a,d as n}from"./app.292a7b1f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const c={},i=a(`<h1 id="api-v1" tabindex="-1"><a class="header-anchor" href="#api-v1" aria-hidden="true">#</a> API v1</h1><p>Chevereto API v1 allows to upload pictures as guest to your Chevereto powered website.</p><p>API v1 doesn&#39;t have rate limiting but is affected by the configured flood upload limit in your admin dashboard. You should only use this API for your very own applications or scripts, is not intended for public usage.</p><h2 id="api-key" tabindex="-1"><a class="header-anchor" href="#api-key" aria-hidden="true">#</a> API key</h2><p>API v1 works with a single API key that you can set at Dashboard &gt; Settings &gt; API.</p><h2 id="api-call" tabindex="-1"><a class="header-anchor" href="#api-call" aria-hidden="true">#</a> API call</h2><h3 id="request-method" tabindex="-1"><a class="header-anchor" href="#request-method" aria-hidden="true">#</a> Request method</h3><p>API v1 calls can be done using the POST or GET request methods but since GET request are limited by the maximum allowed length of an URL you should prefer the POST request method.</p><h3 id="request-url" tabindex="-1"><a class="header-anchor" href="#request-url" aria-hidden="true">#</a> Request URL</h3><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>http://mysite.com/api/1/&lt;action&gt;/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>`,11),k=s("li",null,"key The API v1 key, it can be set in your admin dashboard settings.",-1),d=s("li",null,"action What you want to do [values: upload].",-1),m=n("source Either a image URL or a "),b={href:"https://en.wikipedia.org/wiki/Base64",target:"_blank",rel:"noopener noreferrer"},q=n("base64"),h=n(' encoded image string. You can also use FILES["source"] in your request.'),g=s("li",null,"format Sets the return format [values: json (default), redirect, txt].",-1),y=a(`<h3 id="example-call" tabindex="-1"><a class="header-anchor" href="#example-call" aria-hidden="true">#</a> Example call</h3><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>GET http://mysite.com/api/1/upload/?key=12345&amp;source=http://somewebsite/someimage.jpg&amp;format=json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Note: Always use POST when uploading local files. Url encoding may alter the base64 source due to encoded characters or just by URL request length limit due to GET request.</p><h2 id="api-response" tabindex="-1"><a class="header-anchor" href="#api-response" aria-hidden="true">#</a> API response</h2><p>API v1 responses will vary depending on the <strong>format</strong> parameter:</p><ul><li>json Display all the image uploaded information in JSON format. [default]</li><li>txt Returns the image direct URL in text/plain format.</li><li>redirect Redirects to the image viewer URL.</li></ul><p>When using JSON the response will have headers status codes to allow you to easily notice if the request was OK or not. It will also output the <code>status_txt</code> and <code>status_code</code> properties.</p><h3 id="example-response-json" tabindex="-1"><a class="header-anchor" href="#example-response-json" aria-hidden="true">#</a> Example response (JSON)</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;status_code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;success&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image uploaded&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;extension&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">53237</span><span class="token punctuation">,</span>
        <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">1151</span><span class="token punctuation">,</span>
        <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">898</span><span class="token punctuation">,</span>
        <span class="token property">&quot;date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2014-06-04 15:32:33&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;date_gmt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2014-06-04 19:32:33&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;storage_id&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;nsfw&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;md5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c684350d722c956c362ab70299735830&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;storage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;datefolder&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;original_filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;original_exifdata&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;views&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id_encoded&quot;</span><span class="token operator">:</span> <span class="token string">&quot;L&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ratio&quot;</span><span class="token operator">:</span> <span class="token number">1.2817371937639</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size_formatted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;52 KB&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bits&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
        <span class="token property">&quot;channels&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1/images/2014/06/04/example.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url_viewer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1/image/L&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;thumb&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.th.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.th&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ratio&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">17848</span><span class="token punctuation">,</span>
            <span class="token property">&quot;size_formatted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;17.4 KB&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;extension&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;bits&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;channels&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1/images/2014/06/04/example.th.png&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;medium&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;filename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.md.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.md&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;width&quot;</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
            <span class="token property">&quot;height&quot;</span><span class="token operator">:</span> <span class="token number">390</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ratio&quot;</span><span class="token operator">:</span> <span class="token number">1.2820512820513</span><span class="token punctuation">,</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">104448</span><span class="token punctuation">,</span>
            <span class="token property">&quot;size_formatted&quot;</span><span class="token operator">:</span> <span class="token string">&quot;102 KB&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;mime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;extension&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;bits&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;channels&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
            <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1/images/2014/06/04/example.md.png&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;views_label&quot;</span><span class="token operator">:</span> <span class="token string">&quot;views&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;display_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1/images/2014/06/04/example.md.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;how_long_ago&quot;</span><span class="token operator">:</span> <span class="token string">&quot;moments ago&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;status_txt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><h3 id="example-response-txt" tabindex="-1"><a class="header-anchor" href="#example-response-txt" aria-hidden="true">#</a> Example response (txt)</h3><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>http://127.0.0.1/images/2014/06/04/example.png
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="upload-to-user-workaround" tabindex="-1"><a class="header-anchor" href="#upload-to-user-workaround" aria-hidden="true">#</a> Upload to user workaround</h2><p>API V1 one doesn&#39;t have a way to upload images associated with a given user but you can override the default API. Copy the default <code>app/routes/route.api.php</code> file to <code>app/routes/overrides/route.api.php</code> folder.</p><p>Change this:</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">CHV<span class="token punctuation">\\</span>Image</span><span class="token operator">::</span><span class="token function">uploadToWebsite</span><span class="token punctuation">(</span><span class="token variable">$source</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To this (replace juanito with the target username or user_id):</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// This will upload images to &#39;juanito&#39; account </span>
<span class="token class-name class-name-fully-qualified static-context">CHV<span class="token punctuation">\\</span>Image</span><span class="token operator">::</span><span class="token function">uploadToWebsite</span><span class="token punctuation">(</span><span class="token variable">$source</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;juanito&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>By doing this, the <code>/api</code> route (sourced from <code>app/routes/overrides/route.api.php</code>) will now upload images in the name of that user.</p><h3 id="using-different-api-keys" tabindex="-1"><a class="header-anchor" href="#using-different-api-keys" aria-hidden="true">#</a> Using different API keys</h3><p>If you want to use a different API key in this new customized API simply change this:</p><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>!G\\timing_safe_compare(CHV\\getSetting(&#39;api_v1_key&#39;), $_REQUEST[&#39;key&#39;])
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To this:</p><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>!G\\timing_safe_compare(&#39;NowThisIsAnotherAPIKEY!&#39;, $_REQUEST[&#39;key&#39;])
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="multiple-apis" tabindex="-1"><a class="header-anchor" href="#multiple-apis" aria-hidden="true">#</a> Multiple APIs</h3><p>You can have multiple APIs long as you perform some editing at <code>app/loader.php</code>. Since this file handles some pre-routing, you need to add your custom routes to all the conditionals mentioning <code>api</code>.</p>`,25);function f(v,x){const e=p("ExternalLinkIcon");return t(),o(l,null,[i,s("ul",null,[k,d,s("li",null,[m,s("a",b,[q,r(e)]),h]),g]),y],64)}var I=u(c,[["render",f]]);export{I as default};