const Service = require('egg').Service;

class PartnerService extends Service {
  async findAll() {
    return this.ctx.model.Partner.find();
  }
}

module.exports = PartnerService;