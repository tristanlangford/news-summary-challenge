
window.addEventListener(`DOMContentLoaded`, function (event) {
    let controller 
    async function articles() {
        let data = await getResponse()
        controller = new ArticleController(data)
        controller.createArticleObjects()
        document.getElementById('app').innerHTML = controller.convertListToView()
    } 

    articles()

    window.addEventListener("hashchange", function(event) {
        var id = window.location.hash.slice('#')[1]
        if (id > 0) {
        singleArticle = new ArticleSummaryView(controller.getArrayOfArticles()[id])
        document.getElementById('app').innerHTML = singleArticle.singleArticleView()
        } else {
            controller.createArticleObjects()
            document.getElementById('app').innerHTML = controller.convertListToView()
        }
    })
})