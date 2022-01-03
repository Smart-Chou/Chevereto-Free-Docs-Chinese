module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'Chevereto Docs',
    description: '开源自托管映像托管解决方案',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/logo.svg',
            },
        ],
        [
            'link',
            {
                rel: 'manifest',
                href: '/manifest.webmanifest',
            },
        ],
        [
            'meta',
            {
                name: 'theme-color',
                content: '#23a8e0',
            },
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes',
            },
        ],
        [
            'meta',
            {
                name: 'apple-mobile-web-app-status-bar-style',
                content: 'black',
            },
        ],
        [
            'link',
            {
                rel: 'apple-touch-icon',
                href: '/logo.svg',
            },
        ],
        [
            'link',
            {
                rel: 'mask-icon',
                href: '/logo.svg',
                color: '#3eaf7c',
            },
        ],
        [
            'meta',
            {
                name: 'msapplication-TileImage',
                content: '/logo.svg',
            },
        ],
        [
            'meta',
            {
                name: 'msapplication-TileColor',
                content: '#000000',
            },
        ],
    ],
    theme: '@vuepress/theme-default',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Chevereto Docs',
            description: '开源自托管映像托管解决方案',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Chevereto Docs',
            description: 'Self-hosted image hosting software',
        },
    },
    themeConfig: {
        home: '/',
        logo: '/logo.svg',
        author: 'ChouCong',
        description: '开源自托管映像托管解决方案',
        hostname: 'https://codenoob.top/Chevereto-Free-Docs-Chinese',
        docsRepo: 'Smart-Chou/Chevereto-Free-Docs-Chinese',
        docsDir: 'docs',
        editLink: true,
        locales: {
            '/': {
                navbar: [
                    { text: '主页', link: '/get-started/' },
                    {
                        text: '安装',
                        children: [
                            {
                                text: '系统',
                                children: ['/setup/system/requirements.md', '/setup/system/environment.md'],
                            },
                            {
                                text: '服务器',
                                children: ['/setup/server/requirements.md', '/setup/server/installation.md', '/setup/server/cpanel.md', '/setup/server/settings-file.md', '/setup/server/updating.md', '/setup/server/upgrading.md'],
                            },
                            {
                                text: '容器',
                                children: ['/setup/container/requirements.md', '/setup/container/registry.md', '/setup/container/running.md', '/setup/container/bootstrapped.md'],
                            },
                        ],
                    },
                    {
                        text: '手册',
                        children: [
                            {
                                text: '第一步',
                                children: ['/manual/first-steps/initial-setup.md', '/manual/first-steps/setup-cron.md', '/manual/first-steps/setup-email.md'],
                            },
                            {
                                text: '故障排除',
                                children: ['/manual/troubleshooting/debug.md', '/manual/troubleshooting/errors.md', '/manual/troubleshooting/server-issues.md'],
                            },
                        ],
                    },
                    {
                        text: '特点',
                        children: [
                            { text: '内容', children: ['/features/content/bulk-content-importer.md'] },
                            {
                                text: '自定义',
                                children: ['/features/customization/language.md', '/features/customization/routes.md', '/features/customization/theme.md'],
                            },
                            {
                                text: '集成',
                                children: ['/features/integrations/external-storage.md', '/features/integrations/pup.md', '/features/integrations/sharex.md', '/features/integrations/social-login.md'],
                            },
                            { text: '参考', children: ['/features/reference/security.md'] },
                        ],
                    },
                    { text: 'API', link: '/api/' },
                    { text: '设置', link: '/settings/' },
                ],
                sidebar: {
                    '/get-started/': [
                        {
                            text: '主页',
                            children: ['/get-started/README.md', '/get-started/introduction.md', '/get-started/status.md', '/get-started/deploy.md'],
                        },
                    ],
                    '/setup/': [
                        {
                            text: '系统',
                            collapsible: true,
                            children: ['/setup/system/requirements.md', '/setup/system/environment.md'],
                        },
                        {
                            text: '服务器',
                            collapsible: true,
                            children: ['/setup/server/requirements.md', '/setup/server/installation.md', '/setup/server/cpanel.md', '/setup/server/settings-file.md', '/setup/server/updating.md', '/setup/server/upgrading.md'],
                        },
                        {
                            text: '容器',
                            collapsible: true,
                            children: ['/setup/container/requirements.md', '/setup/container/registry.md', '/setup/container/running.md', '/setup/container/bootstrapped.md'],
                        },
                    ],
                    '/manual/': [
                        {
                            text: '第一步',
                            collapsible: true,
                            children: ['/manual/first-steps/initial-setup.md', '/manual/first-steps/setup-cron.md', '/manual/first-steps/setup-email.md'],
                        },
                        {
                            text: '故障排除',
                            collapsible: true,
                            children: ['/manual/troubleshooting/debug.md', '/manual/troubleshooting/errors.md', '/manual/troubleshooting/server-issues.md'],
                        },
                    ],
                    '/features/': [
                        { text: '内容', collapsible: true, children: ['/features/content/bulk-content-importer.md'] },
                        {
                            text: '自定义',
                            collapsible: true,
                            children: ['/features/customization/language.md', '/features/customization/routes.md', '/features/customization/theme.md'],
                        },
                        {
                            text: '集成',
                            collapsible: true,
                            children: ['/features/integrations/external-storage.md', '/features/integrations/pup.md', '/features/integrations/sharex.md', '/features/integrations/social-login.md'],
                        },
                        { text: '参考', collapsible: true, children: ['/features/reference/security.md'] },
                    ],
                    '/api/': [
                        {
                            text: 'API',
                            children: ['/api/README.md'],
                        },
                    ],
                    '/settings/': [
                        {
                            text: '设置',
                            children: ['/settings/README.md', '/settings/website.md', '/settings/content.md', '/settings/pages.md', '/settings/listings.md', '/settings/image-upload.md', '/settings/categories.md', '/settings/users.md', '/settings/consent-screen.md', '/settings/flood-protection.md', '/settings/theme.md', '/settings/homepage.md', '/settings/banners.md', '/settings/system.md', '/settings/routing.md', '/settings/languages.md', '/settings/external-storage.md', '/settings/email.md', '/settings/social-networks.md', '/settings/external-services.md', '/settings/ip-bans.md', '/settings/api.md', '/settings/additional-settings.md', '/settings/tools.md'],
                        },
                    ],
                },
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                selectLanguageAriaLabel: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdatedText: '上次更新',
                contributorsText: '贡献者',
                tip: '提示',
                warning: '注意',
                danger: '警告',
                notFound: ['这里什么都没有', '我们怎么到这来了？', '这是一个 404 页面', '看起来我们进入了错误的链接'],
                backToHome: '返回首页',
                openInNewWindow: '在新窗口打开',
                toggleDarkMode: '切换夜间模式',
                toggleSidebar: '切换侧边栏',
                backToHome: '返回首页',
            },
            '/en/': {
                navbar: [
                    { text: 'Get Started', link: '/en/get-started/' },
                    {
                        text: 'Setup',
                        children: [
                            {
                                text: 'System',
                                children: ['/en/setup/system/requirements.md', '/en/setup/system/environment.md'],
                            },
                            {
                                text: 'Server',
                                children: ['/en/setup/server/requirements.md', '/en/setup/server/installation.md', '/en/setup/server/cpanel.md', '/en/setup/server/settings-file.md', '/en/setup/server/updating.md', '/en/setup/server/upgrading.md'],
                            },
                            {
                                text: 'Container',
                                children: ['/en/setup/container/requirements.md', '/en/setup/container/registry.md', '/en/setup/container/running.md', '/en/setup/container/bootstrapped.md'],
                            },
                        ],
                    },
                    {
                        text: 'Manual',
                        children: [
                            {
                                text: 'First Steps',
                                children: ['/en/manual/first-steps/initial-setup.md', '/en/manual/first-steps/setup-cron.md', '/en/manual/first-steps/setup-email.md'],
                            },
                            {
                                text: 'Troubleshooting',
                                children: ['/en/manual/troubleshooting/debug.md', '/en/manual/troubleshooting/errors.md', '/en/manual/troubleshooting/server-issues.md'],
                            },
                        ],
                    },
                    {
                        text: 'Features',
                        children: [
                            { text: 'Content', children: ['/en/features/content/bulk-content-importer.md'] },
                            {
                                text: 'Customization',
                                children: ['/en/features/customization/language.md', '/en/features/customization/routes.md', '/en/features/customization/theme.md'],
                            },
                            {
                                text: 'Integrations',
                                children: ['/en/features/integrations/external-storage.md', '/en/features/integrations/pup.md', '/en/features/integrations/sharex.md', '/en/features/integrations/social-login.md'],
                            },
                            { text: 'Reference', children: ['/en/features/reference/security.md'] },
                        ],
                    },
                    { text: 'API', link: '/en/api/' },
                    { text: 'Dashboard', link: '/settings/' },
                ],
                sidebar: {
                    '/en/get-started/': [
                        {
                            text: 'Get Started',
                            children: ['/en/get-started/README.md', '/en/get-started/introduction.md', '/en/get-started/status.md', '/en/get-started/deploy.md'],
                        },
                    ],
                    '/en/setup/': [
                        {
                            text: 'System',
                            collapsible: true,
                            children: ['/en/setup/system/requirements.md', '/en/setup/system/environment.md'],
                        },
                        {
                            text: 'Server',
                            collapsible: true,
                            children: ['/en/setup/server/requirements.md', '/en/setup/server/installation.md', '/en/setup/server/cpanel.md', '/en/setup/server/settings-file.md', '/en/setup/server/updating.md', '/en/setup/server/upgrading.md'],
                        },
                        {
                            text: 'Container',
                            collapsible: true,
                            children: ['/en/setup/container/requirements.md', '/en/setup/container/registry.md', '/en/setup/container/running.md', '/en/setup/container/bootstrapped.md'],
                        },
                    ],
                    '/en/manual/': [
                        {
                            text: 'First Steps',
                            collapsible: true,
                            children: ['/en/manual/first-steps/initial-setup.md', '/en/manual/first-steps/setup-cron.md', '/en/manual/first-steps/setup-email.md'],
                        },
                        {
                            text: 'Troubleshooting',
                            collapsible: true,
                            children: ['/en/manual/troubleshooting/debug.md', '/en/manual/troubleshooting/errors.md', '/en/manual/troubleshooting/server-issues.md'],
                        },
                    ],
                    '/en/features/': [
                        { text: 'Content', collapsible: true, children: ['/en/features/content/bulk-content-importer.md'] },
                        {
                            text: 'Customization',
                            collapsible: true,
                            children: ['/en/features/customization/language.md', '/en/features/customization/routes.md', '/en/features/customization/theme.md'],
                        },
                        {
                            text: 'Integrations',
                            collapsible: true,
                            children: ['/en/features/integrations/external-storage.md', '/en/features/integrations/pup.md', '/en/features/integrations/sharex.md', '/en/features/integrations/social-login.md'],
                        },
                        { text: 'Reference', collapsible: true, children: ['/en/features/reference/security.md'] },
                    ],
                    '/en/api/': [
                        {
                            text: 'API',
                            children: ['/en/api/README.md'],
                        },
                    ],
                    '/en/settings/': [
                        {
                            text: 'Dashboard',
                            children: ['/en/settings/README.md', '/en/settings/website.md', '/en/settings/content.md', '/en/settings/pages.md', '/en/settings/listings.md', '/en/settings/image-upload.md', '/en/settings/categories.md', '/en/settings/users.md', '/en/settings/consent-screen.md', '/en/settings/flood-protection.md', '/en/settings/theme.md', '/en/settings/homepage.md', '/en/settings/banners.md', '/en/settings/system.md', '/en/settings/routing.md', '/en/settings/languages.md', '/en/settings/external-storage.md', '/en/settings/email.md', '/en/settings/social-networks.md', '/en/settings/external-services.md', '/en/settings/ip-bans.md', '/en/settings/api.md', '/en/settings/additional-settings.md', '/en/settings/tools.md'],
                        },
                    ],
                },
                editLinkText: 'Edit this page on GitHub',
                selectLanguageName: 'English',
            },
        },
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                isSearchable: page => page.path !== '/',
                locales: {
                    '/': {
                        placeholder: '搜索',
                    },
                    '/en/': {
                        placeholder: 'Search',
                    },
                },
            },
        ],
        [
            '@vuepress/pwa',
            {
                skipWaiting: true,
            },
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    },
                    '/en/': {
                        message: 'New content is available.',
                        buttonText: 'Refresh',
                    },
                },
            },
        ],
    ],
};
