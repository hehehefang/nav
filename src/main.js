$('.addButton').on('click', () => {
    let url = window.prompt('请输入url')
    if (url.indexOf('http') !== 0) {
        url = 'https://' + url
        console.log(url)
    }
    const $siteList = $('.siteList')//找到sitelist
    console.log($siteList)
    const $lastLi = $siteList.find('li.last')//在sitelist里面找到last
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
