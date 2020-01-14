'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async getArticle() {
    const ctx = this.ctx
    const articleList = await ctx.service.article.getData()
    ctx.body = articleList
  }
}

module.exports = ArticleController;
