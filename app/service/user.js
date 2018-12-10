const Service = require('egg').Service;
class UserService extends Service {
  async findAll() {
    return this.ctx.model.User.find();
  }
}

module.exports = UserService;