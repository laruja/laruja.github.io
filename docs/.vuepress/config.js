module.exports = {
    title: "首页",
    description: "欢迎访问我的前端日志",
    // Google Analytics ID，
    // ga: "UA-121061441-1",
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: '/avatar.png' }]
    ],
    themeConfig: {
        repo: "laruja/laruja.github.io",
        nav: [{
            text: "知识点",
            link: "/blog/js-fundamental"
        }, {
            text: "basic",
            link: "/basic/as-hill"
        }, {
            text: "funny",
            link: "/funny/funny-home"
        },

        ],
        sidebar: {
            "/blog/": [{
                title: 'js',
                collapsable: true,
                children: [
                    "js-fundamental",
                    "js-structure",
                    "js-scope",
                    "js-this",
                    "js-object",
                    "js-prototype",
                    "js-function",
                    "js-es678910",
                    "js-promise",
                    "js-eventloop",
                    "js-node",

                ]
            },
            {
                title: 'Framework&Library',
                collapsable: true,
                children: [
                    "fl-vue-react-angular",
                    // "fl-react",
                    // "fl-angular",
                    // "fl-electron",

                ]
            },
            {
                title: '工程化',
                collapsable: true,
                children: [
                    "dev-web",
                    "dev-opt",
                    "dev-cicd",
                ]
            },
            {
                title: 'CSS',
                collapsable: true,
                children: [
                    "css-layout.md",
                    "css-coding.md",
                    "css-opt.md"
                    // "css",
                    // "css-modules",
                    // "css-next",
                    // "css-flex",
                    // "css-useful",
                    // "css-devicePixelRatio",
                    // "css-houdini-star",
                ]
            },],
            "/basic/": [{
                title: '数据结构&算法',
                collapsable: true,
                children: [
                    "as-hill",
                ]
            },
                // {
                //         title: '网络',
                //         collapsable: true,
                //         children: [
                //             "net-http",
                //             "net-https",
                //         ]
                //     },{
                //         title: '浏览器',
                //         collapsable: false,
                //         children: [
                //             "b-chrome",
                //             "b-webview",
                //         ]
                //     },
            ],
            "/funny/": [{
                title: 'funny',
                collapsable: false,
                children: [
                    "funny-home",
                ]
            },],

        },
        lastUpdated: "更新时间",
        docsDir: "docs",
        editLinks: true,
        editLinkText: "本文源码地址"
    },
    plugins: {
        '@vuepress/medium-zoom': {
            selector: 'img',
            options: {
                margin: 16
            }
        },
        '@vuepress/back-to-top': true
    },
    markdown: {
        anchor: {
            permalink: true
        },
        toc: {
            includeLevel: [1, 2]
        },
        config: md => {
            // 使用更多 markdown-it 插件！
            md.use(require('markdown-it-task-lists'))
                .use(require('markdown-it-imsize'), { autofill: true })
        }
    },
};