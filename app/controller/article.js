const Controller = require('egg').Controller;

class ArtcleController extends Controller {
    async index() {
        const menu = 'article'
        await this.ctx.render('article/index.tpl', {menu})
    }
}

module.exports = ArtcleController;