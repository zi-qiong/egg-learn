const Controller = require('egg').Controller;

class ArtcleController extends Controller {
    async index() {
        await this.ctx.render('article/index.tpl')
    }
}

module.exports = ArtcleController;