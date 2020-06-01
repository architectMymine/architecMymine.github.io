var ap = new APlayer({
    element: document.getElementById('player'),
    narrow: false,
    autoplay: false,
    showlrc: true,
    volume: 0.4,
    theme: '#F5F5F5',
    music: [
        {
            title: '嚣张',
            author: 'en',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/en - 嚣张.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/xiaozhang.jpg',
            lrc: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/lrc/en - 嚣张.lrc'
        },
        {
            title: '自己',
            author: '刘亦菲',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/刘亦菲 - 自己.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/ziji.jpg'
        },
        {
            title: '无人之岛',
            author: '任然',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/任然 - 无人之岛.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/wurenzhidao.jpg'
        },
        {
            title: '侧脸',
            author: '于果',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/于果 - 侧脸.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/celian.jpg'
        },
        {
            title: 'Sold Out',
            author: 'Hawk Nelson',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/Hawk Nelson - Sold Out.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/SoldOut.jpg'
        },
        {
            title: 'Enchanted',
            author: 'Taylor Swift',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/Taylor Swift - Enchanted.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/Enchanted.jpg'
        },
        {
            title: 'Last Christmas',
            author: 'Taylor Swift',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/Taylor Swift - Last Christmas.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/LastChristmas.jpg'
        },
        {
            title: 'Burning Bright',
            author: '英雄联盟',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/英雄联盟 - Burning Bright.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/BurningBright.jpg'
        },
        {
            title: 'Dizzy',
            author: 'Ours',
            url: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/music/Ours - Dizzy.mp3',
            pic: 'https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/images/Dizzy.jpg'
        },
    ]
});