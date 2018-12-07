const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const menu = 'home'
    await this.ctx.render('home/index.tpl', {menu});
  }
}

module.exports = HomeController;