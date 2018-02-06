'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    var path = ctx.request.path.substring(1);
    await ctx.render(`${path}.json`, {});
  }
}

module.exports = HomeController;
