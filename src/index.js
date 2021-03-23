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
  }
  .fullinsta-link:hover {
    background-color: #88b1d8;
  }
`
const styleNode = document.createElement('style')
styleNode.innerText = theStyle

targetNode.appendChild(styleNode)

const theObserver = new MutationObserver((list, observer) => {
    list.forEach((mutation) => {
        if (mutation.type === 'childList') {
            const articles = document.getElementsByTagName('article')
            for (var i=0; i < articles.length; i++) {                
                const article = articles[i]
                if (article.getAttribute('role') ==='presentation') {
                    const buttons = article.getElementsByClassName('fullinsta-link')
                    if (buttons.length === 0) {
                        let id = ''
                        const splittedPath = window.location.pathname.split('/')
                        if (splittedPath[1] === 'p') {
                            id = splittedPath[2]
                        } else {
                            const timeLink = article.getElementsByTagName('time')[0]
                            if (timeLink) {
                                id = timeLink.parentElement?.href.split('/')[4]
                            }

                        }

                        if (id !== undefined && id !== '') {                            
                            const a = document.createElement('a')
                            a.innerText = 'Full'
                            a.setAttribute('target', '_blank')
                            a.setAttribute('href', `https://www.instagram.com/p/${id}/media?size=l`)
                            a.className = 'fullinsta-link'
                            article.appendChild(a)
                        }

                        
                    }
                }
            }
        }
    })
});
theObserver.observe(targetNode, config);