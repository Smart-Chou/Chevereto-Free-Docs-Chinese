import{r as d,o as r,c as o,a as e,b as h,F as i,e as n,d as t}from"./app.292a7b1f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const c={},l=n('<h1 id="external-storage" tabindex="-1"><a class="header-anchor" href="#external-storage" aria-hidden="true">#</a> External storage</h1><p><code>/dashboard/settings/external-storage</code></p><h2 id="adding-storages" tabindex="-1"><a class="header-anchor" href="#adding-storages" aria-hidden="true">#</a> Adding storages</h2><p>Click on &quot;Add storage&quot;.</p><h2 id="storage-values-common" tabindex="-1"><a class="header-anchor" href="#storage-values-common" aria-hidden="true">#</a> Storage values (common)</h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> Name</h3><p>The name for the storage.</p><table><thead><tr><th>Type</th><th>Accepted</th></tr></thead><tbody><tr><td>String</td><td>max length 32</td></tr></tbody></table><h3 id="bucket" tabindex="-1"><a class="header-anchor" href="#bucket" aria-hidden="true">#</a> Bucket</h3><p>The bucket where the files will be stored.</p><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>String</td><td>The bucket name</td></tr></tbody></table><h3 id="key" tabindex="-1"><a class="header-anchor" href="#key" aria-hidden="true">#</a> Key</h3><p>The API key to access storage.</p><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>String</td><td>Public key</td></tr></tbody></table><h3 id="secret" tabindex="-1"><a class="header-anchor" href="#secret" aria-hidden="true">#</a> Secret</h3><p>The API secret to access storage.</p><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>String</td><td>Secret key</td></tr></tbody></table><h3 id="storage-capacity" tabindex="-1"><a class="header-anchor" href="#storage-capacity" aria-hidden="true">#</a> Storage capacity</h3><p>The capacity allowed for the storage.</p><table><thead><tr><th>Type</th><th>Example</th></tr></thead><tbody><tr><td>String</td><td>20 GB</td></tr></tbody></table><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3><p>The URL that will be mapped to the storage.</p><table><thead><tr><th>Type</th><th>Example</th></tr></thead><tbody><tr><td>String</td><td><code>https://storage1.demo.chevereto.com/bucket/</code></td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>For the example above, a file at <code>https://storage1.demo.chevereto.com/bucket/example.jpg</code> should be resolving.</p></div><h2 id="alibaba-cloud-oss" tabindex="-1"><a class="header-anchor" href="#alibaba-cloud-oss" aria-hidden="true">#</a> Alibaba Cloud OSS</h2><h3 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> Endpoint</h3><p>Besides common settings, Alibaba Cloud OSS requires to provide the endpoint.</p><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>String</td><td>Alibaba Cloud OSS endpoint</td></tr></tbody></table><h2 id="amazon-s3" tabindex="-1"><a class="header-anchor" href="#amazon-s3" aria-hidden="true">#</a> Amazon S3</h2><p>Besides common settings, Amazon S3 requires to provide the region.</p><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>String</td><td>Amazon S3 region</td></tr></tbody></table><h2 id="backblaze-b2" tabindex="-1"><a class="header-anchor" href="#backblaze-b2" aria-hidden="true">#</a> Backblaze B2</h2><p>Uses common settings, but Backblaze B2 names key/secret in differently.</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>Key</td><td>Account ID</td></tr><tr><td>Secret</td><td>Master Application Key</td></tr></tbody></table><h2 id="ftp" tabindex="-1"><a class="header-anchor" href="#ftp" aria-hidden="true">#</a> FTP</h2><p>Besides some common settings, FTP requires other values.</p><table><thead><tr><th>Value</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>Server</td><td>IP address or hostname</td><td><code>127.0.0.1</code> <code>ftp.chevereto.com</code></td></tr><tr><td>Path</td><td>Server FTP path</td><td><code>/path/in/server/</code></td></tr><tr><td></td><td></td><td></td></tr><tr><td>User</td><td>FTP user</td><td>username</td></tr><tr><td>Password</td><td>FTP password</td><td>password</td></tr></tbody></table><h2 id="google-cloud" tabindex="-1"><a class="header-anchor" href="#google-cloud" aria-hidden="true">#</a> Google Cloud</h2><p>Besides some common settings, Google Cloud requires to provide the key in JSON format.</p><h3 id="private-key" tabindex="-1"><a class="header-anchor" href="#private-key" aria-hidden="true">#</a> Private key</h3><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>String</td><td>Google Cloud JSON key</td></tr></tbody></table><h2 id="local" tabindex="-1"><a class="header-anchor" href="#local" aria-hidden="true">#</a> Local</h2><p>Besides some common settings, Local requires to provide the local path.</p><table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>String</td><td>Local path</td></tr></tbody></table><h2 id="microsoft-azure" tabindex="-1"><a class="header-anchor" href="#microsoft-azure" aria-hidden="true">#</a> Microsoft Azure</h2><p>Besides some common settings, Microsoft Azure requires other values.</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>Account</td><td>Microsoft Azure AccountName</td></tr><tr><td>Key</td><td>Microsoft Azure Accountkey</td></tr><tr><td>Endpoint</td><td>Microsoft Azure endpoint</td></tr></tbody></table><h2 id="openstack" tabindex="-1"><a class="header-anchor" href="#openstack" aria-hidden="true">#</a> OpenStack</h2><p>Besides some common settings, OpenStack requires other values.</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>Service name</td><td>For example, <code>swift</code></td></tr><tr><td>Identity URL</td><td>Identity API endpoint</td></tr><tr><td>Username</td><td>The username</td></tr><tr><td>Password</td><td>The password</td></tr><tr><td>Region</td><td>Storage region</td></tr><tr><td>Container</td><td>Storage container</td></tr><tr><td>Tenant id</td><td>Tenant id (account id)</td></tr><tr><td>Tenant name</td><td>Tenant name (account name)</td></tr></tbody></table><h2 id="s3-compatible" tabindex="-1"><a class="header-anchor" href="#s3-compatible" aria-hidden="true">#</a> S3 compatible</h2><p>Besides some common settings, S3 compatible requires to provide the region and the endpoint.</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>Region</td><td>Storage region</td></tr><tr><td>Endpoint</td><td>Storage endpoint</td></tr></tbody></table><h2 id="sftp" tabindex="-1"><a class="header-anchor" href="#sftp" aria-hidden="true">#</a> SFTP</h2>',54),p=t("Same as "),b=e("a",{href:"#ftp"},"FTP",-1),u=t(", but using the "),m={href:"https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"},g=t("SSH File Transfer Protocol"),y=t(" protocol.");function f(S,x){const a=d("ExternalLinkIcon");return r(),o(i,null,[l,e("p",null,[p,b,u,e("a",m,[g,h(a)]),y])],64)}var _=s(c,[["render",f]]);export{_ as default};
