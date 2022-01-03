import{r as e,o as t,c as o,a as s,b as r,F as l,e as a,d as n}from"./app.32562cb7.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=a(`<h1 id="api-v1" tabindex="-1"><a class="header-anchor" href="#api-v1" aria-hidden="true">#</a> API v1</h1><p>Chevereto API v1 \u5141\u8BB8\u4EE5\u8BBF\u5BA2\u8EAB\u4EFD\u5C06\u56FE\u7247\u4E0A\u4F20\u5230\u60A8\u7684 Chevereto \u7F51\u7AD9\u3002</p><p>API v1 \u6CA1\u6709\u901F\u7387\u9650\u5236\uFF0C\u4F46\u53D7\u7BA1\u7406\u4EEA\u8868\u677F\u4E2D\u914D\u7F6E\u7684\u6D2A\u6C34\u4E0A\u4F20\u9650\u5236\u7684\u5F71\u54CD\u3002\u60A8\u5E94\u8BE5\u53EA\u5C06\u8FD9\u4E2A API \u7528\u4E8E\u60A8\u81EA\u5DF1\u7684\u5E94\u7528\u7A0B\u5E8F\u6216\u811A\u672C\uFF0C\u800C\u4E0D\u662F\u7528\u4E8E\u516C\u5171\u7528\u9014\u3002</p><h2 id="api-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#api-\u5BC6\u94A5" aria-hidden="true">#</a> API \u5BC6\u94A5</h2><p>API v1 \u4F7F\u7528\u5355\u4E2A API \u5BC6\u94A5\uFF0C\u60A8\u53EF\u4EE5\u5728\u4EEA\u8868\u677F &gt; \u8BBE\u7F6E &gt; API \u4E2D\u8BBE\u7F6E\u8BE5\u5BC6\u94A5\u3002</p><h2 id="api-\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#api-\u8C03\u7528" aria-hidden="true">#</a> API \u8C03\u7528</h2><h3 id="\u8BF7\u6C42\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u6CD5" aria-hidden="true">#</a> \u8BF7\u6C42\u65B9\u6CD5</h3><p>API v1 \u8C03\u7528\u53EF\u4EE5\u4F7F\u7528 POST \u6216 GET \u8BF7\u6C42\u65B9\u6CD5\u5B8C\u6210\uFF0C\u4F46\u7531\u4E8E GET \u8BF7\u6C42\u53D7\u5230 URL \u5141\u8BB8\u7684\u6700\u5927\u957F\u5EA6\u7684\u9650\u5236\uFF0C\u56E0\u6B64\u60A8\u5E94\u8BE5\u66F4\u559C\u6B22 POST \u8BF7\u6C42\u65B9\u6CD5\u3002</p><h3 id="\u8BF7\u6C42\u7F51\u5740" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u7F51\u5740" aria-hidden="true">#</a> \u8BF7\u6C42\u7F51\u5740</h3><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>http://mysite.com/api/1/&lt;action&gt;/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h3>`,11),k=s("li",null,"key API v1 \u5BC6\u94A5\uFF0C\u5B83\u53EF\u4EE5\u5728\u60A8\u7684\u7BA1\u7406\u4EEA\u8868\u677F\u8BBE\u7F6E\u4E2D\u8BBE\u7F6E\u3002",-1),b=s("li",null,"\u884C\u52A8\u4F60\u60F3\u505A\u4EC0\u4E48[\u503C\uFF1A\u4E0A\u4F20]\u3002",-1),d=n("source \u56FE\u50CF URL \u6216 "),m={href:"https://en.wikipedia.org/wiki/Base64",target:"_blank",rel:"noopener noreferrer"},q=n("base64"),h=n(' \u7F16\u7801\u7684\u56FE\u50CF\u5B57\u7B26\u4E32\u3002\u60A8\u8FD8\u53EF\u4EE5\u5728\u8BF7\u6C42\u4E2D\u4F7F\u7528 FILES["source"]\u3002'),g=s("li",null,"\u683C\u5F0F\u8BBE\u7F6E\u8FD4\u56DE\u683C\u5F0F[\u503C\uFF1Ajson(\u9ED8\u8BA4)\uFF0C\u91CD\u5B9A\u5411\uFF0Ctxt]\u3002",-1),y=a(`<h3 id="\u793A\u4F8B\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u8C03\u7528" aria-hidden="true">#</a> \u793A\u4F8B\u8C03\u7528</h3><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>\u83B7\u53D6 http://mysite.com/api/1/upload/?key=12345&amp;source=http://somewebsite/someimage.jpg&amp;format=json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\uFF1A\u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u65F6\u59CB\u7EC8\u4F7F\u7528 POST\u3002 Url \u7F16\u7801\u53EF\u80FD\u4F1A\u56E0\u7F16\u7801\u5B57\u7B26\u6216\u56E0 GET \u8BF7\u6C42\u800C\u4EC5\u56E0 URL \u8BF7\u6C42\u957F\u5EA6\u9650\u5236\u800C\u6539\u53D8 base64 \u6E90\u3002</p><h2 id="api-\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#api-\u54CD\u5E94" aria-hidden="true">#</a> API \u54CD\u5E94</h2><p>API v1 \u54CD\u5E94\u4F1A\u56E0 <strong>format</strong> \u53C2\u6570\u800C\u5F02\uFF1A</p><ul><li>json \u4EE5JSON\u683C\u5F0F\u663E\u793A\u6240\u6709\u56FE\u7247\u4E0A\u4F20\u4FE1\u606F\u3002 [\u9ED8\u8BA4]</li><li>txt \u4EE5\u6587\u672C/\u7EAF\u6587\u672C\u683C\u5F0F\u8FD4\u56DE\u56FE\u50CF\u76F4\u63A5 URL\u3002</li><li>\u91CD\u5B9A\u5411 \u91CD\u5B9A\u5411\u5230\u56FE\u50CF\u67E5\u770B\u5668 URL\u3002</li></ul><p>\u4F7F\u7528 JSON \u65F6\uFF0C\u54CD\u5E94\u5C06\u5177\u6709\u6807\u5934\u72B6\u6001\u4EE3\u7801\uFF0C\u4EE5\u4FBF\u60A8\u8F7B\u677E\u6CE8\u610F\u8BF7\u6C42\u662F\u5426\u6B63\u5E38\u3002\u5B83\u8FD8\u5C06\u8F93\u51FA <code>status_txt</code> \u548C <code>status_code</code> \u5C5E\u6027\u3002</p><h3 id="\u793A\u4F8B\u54CD\u5E94-json" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u54CD\u5E94-json" aria-hidden="true">#</a> \u793A\u4F8B\u54CD\u5E94(JSON)</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><h3 id="\u793A\u4F8B\u54CD\u5E94-txt" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B\u54CD\u5E94-txt" aria-hidden="true">#</a> \u793A\u4F8B\u54CD\u5E94 (txt)</h3><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>http://127.0.0.1/images/2014/06/04/example.png
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="\u4E0A\u4F20\u7ED9\u7528\u6237\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u7ED9\u7528\u6237\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u4E0A\u4F20\u7ED9\u7528\u6237\u89E3\u51B3\u65B9\u6CD5</h2><p>API V1 \u65E0\u6CD5\u4E0A\u4F20\u4E0E\u7ED9\u5B9A\u7528\u6237\u5173\u8054\u7684\u56FE\u50CF\uFF0C\u4F46\u60A8\u53EF\u4EE5\u8986\u76D6\u9ED8\u8BA4 API\u3002\u5C06\u9ED8\u8BA4\u7684 <code>app/routes/route.api.php</code> \u6587\u4EF6\u590D\u5236\u5230 <code>app/routes/overrides/route.api.php</code> \u6587\u4EF6\u5939\u3002</p><p>\u6539\u53D8\u8FD9\u4E2A\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name class-name-fully-qualified static-context">CHV<span class="token punctuation">\\</span>Image</span><span class="token operator">::</span><span class="token function">uploadToWebsite</span><span class="token punctuation">(</span><span class="token variable">$source</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E3A\u6B64(\u7528\u76EE\u6807\u7528\u6237\u540D\u6216 user_id \u66FF\u6362 juanito)\uFF1A</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment">// \u8FD9\u4F1A\u5C06\u56FE\u50CF\u4E0A\u4F20\u5230\u201Cjuanito\u201D\u5E10\u6237</span>
<span class="token class-name class-name-fully-qualified static-context">CHV<span class="token punctuation">\\</span>Image</span><span class="token operator">::</span><span class="token function">uploadToWebsite</span><span class="token punctuation">(</span><span class="token variable">$source</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;juanito&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u901A\u8FC7\u8FD9\u6837\u505A\uFF0C<code>/api</code> \u8DEF\u7531(\u6765\u81EA<code>app/routes/overrides/route.api.php</code>)\u73B0\u5728\u5C06\u4EE5\u8BE5\u7528\u6237\u7684\u540D\u4E49\u4E0A\u4F20\u56FE\u50CF\u3002</p><h3 id="\u4F7F\u7528\u4E0D\u540C\u7684-api-\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E0D\u540C\u7684-api-\u5BC6\u94A5" aria-hidden="true">#</a> \u4F7F\u7528\u4E0D\u540C\u7684 API \u5BC6\u94A5</h3><p>\u5982\u679C\u60A8\u60F3\u5728\u8FD9\u4E2A\u65B0\u7684\u81EA\u5B9A\u4E49 API \u4E2D\u4F7F\u7528\u4E0D\u540C\u7684 API \u5BC6\u94A5\uFF0C\u53EA\u9700\u66F4\u6539\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>!G\\timing_safe_compare(CHV\\getSetting(&#39;api_v1_key&#39;), $_REQUEST[&#39;key&#39;])
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5BF9\u6B64\uFF1A</p><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>!G\\timing_safe_compare(&#39;NowThisIsAnotherAPIKEY!&#39;, $_REQUEST[&#39;key&#39;])
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="\u591A\u4E2A-api" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A-api" aria-hidden="true">#</a> \u591A\u4E2A API</h3><p>\u4F60\u53EF\u4EE5\u6709\u591A\u4E2A API\uFF0C\u53EA\u8981\u4F60\u5728 <code>app/loader.php</code> \u4E2D\u8FDB\u884C\u4E00\u4E9B\u7F16\u8F91\u3002\u7531\u4E8E\u6B64\u6587\u4EF6\u5904\u7406\u4E00\u4E9B\u9884\u8DEF\u7531\uFF0C\u56E0\u6B64\u60A8\u9700\u8981\u5C06\u81EA\u5B9A\u4E49\u8DEF\u7531\u6DFB\u52A0\u5230\u6240\u6709\u63D0\u53CA <code>api</code> \u7684\u6761\u4EF6\u4E2D\u3002</p>`,25);function _(v,x){const p=e("ExternalLinkIcon");return t(),o(l,null,[i,s("ul",null,[k,b,s("li",null,[d,s("a",m,[q,r(p)]),h]),g]),y],64)}var P=c(u,[["render",_]]);export{P as default};