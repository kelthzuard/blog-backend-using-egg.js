const Service = require('egg').Service

class articleService extends Service {
    async getData (query) {
        const data = await this.app.mysql.select('article', {
            orders: [['id', 'desc']],
            limit: Number(query.size),
            offset: (query.page) * query.size
        })
        const total = await this.app.mysql.count('article')
        return { data, total}
    }
    async getArticle (query) {
        const result = await this.app.mysql.query('update article set watch = (watch + 1) where id = ?',[query.id]) 
        const data = await this.app.mysql.select('article', {
            where: {id: query.id}
        })
        return { data, result }
    }
    async writeData (articleInfo) {
       const date = new Date()
       const articleDate = date.getFullYear() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getDate()
       articleInfo.date = articleDate
       articleInfo.watch = 0
       articleInfo.like = 0
       const result = await this.app.mysql.insert('article', articleInfo)
       return result
    }
}

module.exports = articleService