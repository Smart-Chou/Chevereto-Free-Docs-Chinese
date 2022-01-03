import{e}from"./app.32562cb7.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const a={},d=e(`<h1 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme</h1><p><code>/dashboard/settings/theme</code></p><h2 id="tone" tabindex="-1"><a class="header-anchor" href="#tone" aria-hidden="true">#</a> Tone</h2><p>Determines the theme tone.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Light</td><td>Use light mode</td></tr><tr><td>Dark</td><td>Use dark mode</td></tr></tbody></table><h2 id="main-color" tabindex="-1"><a class="header-anchor" href="#main-color" aria-hidden="true">#</a> Main color</h2><p>Determines the main color.</p><table><thead><tr><th>Type</th><th>Example</th></tr></thead><tbody><tr><td>Hex</td><td>#00A7DA</td></tr></tbody></table><h2 id="top-bar-button-color" tabindex="-1"><a class="header-anchor" href="#top-bar-button-color" aria-hidden="true">#</a> Top bar button color</h2><p>Determines the top bar button color.</p><h2 id="enable-vector-logo" tabindex="-1"><a class="header-anchor" href="#enable-vector-logo" aria-hidden="true">#</a> Enable vector logo</h2><p>Toggles the use of vector logo.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Use vector logo</td></tr><tr><td>Disabled</td><td>Don&#39;t use vector logo</td></tr></tbody></table><h2 id="vector-logo-image" tabindex="-1"><a class="header-anchor" href="#vector-logo-image" aria-hidden="true">#</a> Vector logo image</h2><p>The vector logo image. The size is just for reference, the system will display the logo fixing height.</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>SVG</td><td>500x76</td></tr></tbody></table><h2 id="raster-logo-image" tabindex="-1"><a class="header-anchor" href="#raster-logo-image" aria-hidden="true">#</a> Raster logo image</h2><p>The raster logo image. The size is just for reference, the system will display the logo fixing height.</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>PNG</td><td>314x48</td></tr></tbody></table><h2 id="logo-height" tabindex="-1"><a class="header-anchor" href="#logo-height" aria-hidden="true">#</a> Logo height</h2><p>Determines the logo height, which will be fixed and width will be adjusted.</p><table><thead><tr><th>Type</th><th>Recommended</th></tr></thead><tbody><tr><td>Integer</td><td>Min: <code>20</code> - Max: <code>50</code></td></tr></tbody></table><h2 id="favicon-image" tabindex="-1"><a class="header-anchor" href="#favicon-image" aria-hidden="true">#</a> Favicon image</h2><p>Determines the favicon image, the icon which appears in the web browser bar.</p><table><thead><tr><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>PNG</td><td>300x300</td></tr></tbody></table><h2 id="image-load-max-filesize-mb" tabindex="-1"><a class="header-anchor" href="#image-load-max-filesize-mb" aria-hidden="true">#</a> Image load max. filesize (MB)</h2><p>Determines the maximum image file size to load. Images bigger than this value will require &quot;click to load&quot; full resolution image.</p><table><thead><tr><th>Type</th><th>Recommended</th></tr></thead><tbody><tr><td>Integer</td><td>3</td></tr></tbody></table><h2 id="enable-download-button" tabindex="-1"><a class="header-anchor" href="#enable-download-button" aria-hidden="true">#</a> Enable download button</h2><p>Toggles the display of a download button for image view.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable download button to appear on image view</td></tr><tr><td>Disabled</td><td>Don&#39;t show the image download button</td></tr></tbody></table><h2 id="enable-right-click-on-image" tabindex="-1"><a class="header-anchor" href="#enable-right-click-on-image" aria-hidden="true">#</a> Enable right click on image</h2><p>Toggles the ability to right click on the images. This controls the display of the context menu for the <code>&lt;image&gt;</code> tag.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable to right click on images (save-as)</td></tr><tr><td>Disabled</td><td>Disable right click on images</td></tr></tbody></table><h2 id="enable-show-exif-data" tabindex="-1"><a class="header-anchor" href="#enable-show-exif-data" aria-hidden="true">#</a> Enable show Exif data</h2><p>Toggles the display of image Exif data.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Show image Exif data</td></tr><tr><td>Disabled</td><td>Don&#39;t show (hide) image Exif data</td></tr></tbody></table><h2 id="enable-social-share" tabindex="-1"><a class="header-anchor" href="#enable-social-share" aria-hidden="true">#</a> Enable social share</h2><p>Toggles the social share buttons for sharing the image.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable social share buttons for image</td></tr><tr><td>Disabled</td><td>Disable social share buttons for image</td></tr></tbody></table><h2 id="enable-embed-codes-content" tabindex="-1"><a class="header-anchor" href="#enable-embed-codes-content" aria-hidden="true">#</a> Enable embed codes (content)</h2><p>Toggles the display of embed codes.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Show embed codes</td></tr><tr><td>Disabled</td><td>Don&#39;t show (hide) embed codes</td></tr></tbody></table><h2 id="not-safe-content-checkbox-in-uploader" tabindex="-1"><a class="header-anchor" href="#not-safe-content-checkbox-in-uploader" aria-hidden="true">#</a> Not safe content checkbox in uploader</h2><p>Toggles the display of the NSFW checkbox.</p><table><thead><tr><th>Value</th><th>Effect</th></tr></thead><tbody><tr><td>Enabled</td><td>Enable display of NSFW checkbox</td></tr><tr><td>Disabled</td><td>DIsable display of NSFW checkbox</td></tr></tbody></table><h2 id="custom-css-code" tabindex="-1"><a class="header-anchor" href="#custom-css-code" aria-hidden="true">#</a> Custom CSS code</h2><p>Custom <code>CSS</code> code that will get added to the HTML. Example:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="custom-js-code" tabindex="-1"><a class="header-anchor" href="#custom-js-code" aria-hidden="true">#</a> Custom JS code</h2><p>Custom <code>JS</code> code that will get added to the HTML. Example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;argument&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,52);function o(n,r){return d}var i=t(a,[["render",o]]);export{i as default};