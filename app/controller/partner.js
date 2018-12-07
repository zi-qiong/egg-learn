const Controller = require('egg').Controller;

class PartnerController extends Controller {
    async index() {
        const menu = 'partner'
        await this.ctx.render('partner/index.tpl', {menu})
    }
}

module.exports = PartnerController;