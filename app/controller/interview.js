const Controller = require('egg').Controller;

class InterviewController extends Controller {
    async index() {
        await this.ctx.render('interview/index.tpl')
    }
}

module.exports = InterviewController;