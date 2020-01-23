'use strict';

const Controller = require('egg').Controller;

class GalleryController extends Controller {
  async getGalleryList () {
    const ctx = this.ctx
    const query = this.ctx.query
    const galleryList = await ctx.service.gallery.getData(query)
    ctx.body = galleryList
  }
  async writeGallery () {
    const ctx = this.ctx
    const galleryInfo = this.ctx.request.body
    const result = await ctx.service.gallery.writeData(galleryInfo)
    ctx.body =  { result }
  }
}

module.exports = GalleryController;
