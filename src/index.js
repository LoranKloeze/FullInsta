import L from './pack/utils/Log'

L('Starting FullInsta')
const targetNode = document.getElementsByTagName('body')[0]
const config = { attributes: true, childList: true, subtree: true };

var theStyle = `
  .fullinsta-link {
      background-color: #5391CD;
      position: absolute;
      padding: 5px;
      border-bottom-right-radius: 6px;
      transition: background-color 200ms;
      cursor: pointer;
      z-index: 99999;
  }
  .fullinsta-link:hover {
    background-color: #88b1d8;
  }
`
const styleNode = document.createElement('style')
styleNode.innerText = theStyle

targetNode.appendChild(styleNode)

setInterval(() => {
    const articles = document.getElementsByTagName('article')
    for (var i = 0; i < articles.length; i++) {
        const article = articles[i]
        if (article.getAttribute('role') === 'presentation') {
            const buttons = article.getElementsByClassName('fullinsta-link')
            if (buttons.length === 0) {
                let link = ''
                const images = article.getElementsByTagName('img')

                for (var x = 0; x < images.length; x++) {
                    if (images[x].srcset) {
                        console.log(images[x])
                        const srcSets = images[x].srcset.split(',')
                        const srcSet = srcSets[srcSets.length - 1]
                        link = srcSet.split(' ')[0]
                        if (link !== undefined && link !== '') {
                            const a = document.createElement('a')
                            a.innerText = 'Full'
                            a.setAttribute('target', '_blank')
                            a.setAttribute('href', link)
                            a.className = 'fullinsta-link'
                            images[x].parentNode.appendChild(a)
                        }
                    }

                }



            }
        }
    }


}, 500)
