const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')//在sitelist里面找到last
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
    { logo: 'A', url: 'https://www.acfun.cn' },
    { logo: 'B', url: 'https://www.bilibili.com' }
]

const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '') // 删除 / 开头的内容
}

hasMap.forEach((node) => {
    $siteList.find('li:not(.last)').remove()
    const $li = $(`<li>  
    <a href="${node.url}">
        <div class="site">
            <div class="logo">${node.logo}</div>
            <div class="link">${simplifyUrl(node.url)}</div>
        </div>
    </a>
    </li>`).insertBefore($lastLi)
})


$('.addButton').on('click', () => {
    let url = window.prompt('请问你要添加的网址是什么？')
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
    console.log(url)
    hashMap.push({
        logo: simplifyUrl(url)[0].toUpperCase(),
        url: url
    })
    render()
})

//把li 插到  lastLi  前面
const $li = $(`<li>  
    <a href="${url}">
        <div class="site">
            <div class="logo">${url[0]}</div>
            <div class="link">${url}</div>
        </div>
    </a>
    </li>`).insertBefore($lastLi)
})
//点网站 进去回来就没了  怎么办


window.onbeforeunload = () => {
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)
}

$(document).on('keypress', (e) => {
    const { key } = e
    for (let i = 0; i < hashMap.length; i++) {
        if (hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url)
        }
    }
})
