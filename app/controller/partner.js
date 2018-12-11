const Controller = require('egg').Controller;

class PartnerController extends Controller {
    async index() {
        const menu = 'partner'
        const partnerList = [{cover: "/public/pic/qiong.jpg", name: "谢子琼"}, {cover: '/public/pic/lei.jpg', name: "雷媛媛"}, {cover: '/public/pic/yang.jpg', name: "杨萍"}]
        await this.ctx.render('partner/list.tpl', {menu, partnerList})
    }
}

module.exports = PartnerController;