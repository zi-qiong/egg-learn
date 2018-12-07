const Controller = require('egg').Controller;

class PartnerController extends Controller {
    async index() {
        await this.ctx.render('partner/index.tpl')
    }
}

module.exports = PartnerController;