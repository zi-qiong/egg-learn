const Controller = require('egg').Controller;

class InterviewController extends Controller {
    async index() {
        const menu = 'interview'
        await this.ctx.render('interview/index.tpl', {menu})
    }
}

module.exports = InterviewController;