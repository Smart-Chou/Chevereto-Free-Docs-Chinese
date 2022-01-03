import{e}from"./app.292a7b1f.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const t={},a=e('<h1 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> Theme</h1><h2 id="theme-overrides" tabindex="-1"><a class="header-anchor" href="#theme-overrides" aria-hidden="true">#</a> Theme overrides</h2><p>Theme overrides works by detecting a file override which replaces a given theme file, so the system will use the override instead of the default file. Overrides are placed at <code>app/themes/Peafowl/overrides</code>. For example, let&#39;s say you want to replace <code>app/themes/Peafowl/views/image.php</code> you have to simply copy the file to <code>app/themes/Peafowl/overrides/views/image.php</code> and the system will now use the override instead of the default file.</p><h2 id="custom-hooks" tabindex="-1"><a class="header-anchor" href="#custom-hooks" aria-hidden="true">#</a> Custom hooks</h2><p>Custom hooks allows to add or edit code in designated areas or segments of the theme. Default theme includes a custom hooks folder where you can add your own stuff and is filled with plenty sample files. For example, to customize the share buttons follow these steps:</p><ul><li>Go to the theme custom hooks folder <code>app/themes/Peafowl/custom_hooks/</code></li><li>Make a copy of <code>share_links.sample.php</code> (do all your editing needed in this copy)</li><li>Rename your working copy to <code>share_links.php</code></li></ul><p>Chevereto will detect your overrides and it will load this file into the theme.</p><h2 id="clone-default-theme" tabindex="-1"><a class="header-anchor" href="#clone-default-theme" aria-hidden="true">#</a> Clone default theme</h2><p>If you need more customization you should clone the default &quot;Peafowl&quot; theme and do your work in this new theme. To clone the default theme:</p><ul><li>Copy <code>app/themes/Peafowl/</code> and paste it in the same directory</li><li>Name your new theme as anything you want (no white spaces)</li></ul><p>Best way to keep a track of default theme changes is by creating a local git repo in your computer. Create a local git repo with last Chevereto version and commit each time you want to merge the code and will be able to see exactly all the changes line by line.</p>',11);function i(h,s){return a}var d=o(t,[["render",i]]);export{d as default};