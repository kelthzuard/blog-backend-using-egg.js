'use strict';

const Controller = require('egg').Controller;

class getKeyController extends Controller {
  async index() {
    const ctx = this.ctx
    const key = await ctx.service.getKey.index()
    ctx.body = key
  }
}

module.exports = getKeyController;