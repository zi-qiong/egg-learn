const Controller = require('egg').Controller;

class PartnerController extends Controller {
    async index() {
        const menu = 'partner'
        const partnerList = [{cover: "/public/pic/qiong.jpg", name: "谢子琼", slug: "1"}, {cover: '/public/pic/lei.jpg', name: "雷媛媛", slug: "2"}, {cover: '/public/pic/yang.jpg', name: "杨萍", slug: "3"}]
        // const partnerList = await this.service.partner.findAll();
        await this.ctx.render('partner/list.tpl', {menu, partnerList})
    }
    
    async detail() {
        await this.ctx.render('partner/detail.tpl')
    }
}

module.exports = PartnerController;