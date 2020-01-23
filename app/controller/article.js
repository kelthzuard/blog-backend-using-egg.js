'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getArticleList () {
    const ctx = this.ctx
    const query = this.ctx.query
    const articleList = await ctx.service.article.getData(query)
    ctx.body = articleList
  }
  async writeArticle () {
    const ctx = this.ctx
    const articleInfo = this.ctx.request.body
    const result = await ctx.service.article.writeData(articleInfo)
    ctx.body =  { result }
  }
  async getArticle () {
    const ctx = this.ctx
    const query = this.ctx.query 
    const result = await ctx.service.article.getArticle(query)
    ctx.body = {result}
  }
}

module.exports = ArticleController;
