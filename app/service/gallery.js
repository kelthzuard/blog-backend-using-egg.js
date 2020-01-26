const Service = require('egg').Service

class galleryService extends Service {
    async getData (query) {
        const data = await this.app.mysql.select('gallery', {
            orders: [['id', 'desc']],
            limit: Number(query.size),
            offset: (query.page) * query.size
        })
        const total = await this.app.mysql.count('gallery')
        return { data, total}
    }
    async getArticle (query) {
        const result = await this.app.mysql.query('update gallery set watch = (watch + 1) where id = ?',[query.id]) 
        const data = await this.app.mysql.select('gallery', {
            where: {id: query.id}
        })
        return { result, data }
    }
    async writeData (galleryInfo) {
       const date = new Date()
       const galleryDate = date.getFullYear() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getDate()
       galleryInfo.date = galleryDate
       galleryInfo.watch = 0
       galleryInfo.like = 0
       const result = await this.app.mysql.insert('gallery', galleryInfo)
       return result
    }
}

module.exports = galleryService