'use strict'

const Controller = require('egg').Controller

class singleArticleController extends Controller {
  async writeData() {
    const { ctx } = this
    const articleInfo = this.ctx.request.body
    const result = await ctx.service.getEntity.find(articleInfo)
    ctx.body = result
  }
}

module.exports = singleArticleController
