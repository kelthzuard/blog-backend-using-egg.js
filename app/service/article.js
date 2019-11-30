const Service = require('egg').Service

class articleService extends Service {
    async getData () {
        const data = await this.app.mysql.get('article')
        return { data }
    }
}

module.exports = articleService