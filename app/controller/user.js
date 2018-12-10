const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const dataList = await this.service.user.findAll();
        this.ctx.body = dataList
    }
}

module.exports = UserController;
