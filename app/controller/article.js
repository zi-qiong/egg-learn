const Controller = require('egg').Controller;

class ArtcleController extends Controller {
    async index() {
        const menu = 'article'
        const dataList = {
            list: [
              { id: 1, title: 'this is news 1', url: '/article/1',desc:'这是文章1',time:'2018-2-3',author:'www'  },
              { id: 2, title: 'this is news 2', url: '/article/2',desc:'这是文章2',time:'2018-2-3',author:'www' }
            ]
        };
        await this.ctx.render('article/index.tpl', {menu,dataList})
    }
    async detail() {
        const name = `hello ${this.ctx.params.id}`
        console.log('this',this.ctx.params)
        await this.ctx.render('article/detail.tpl', {name})
    }
}

module.exports = ArtcleController;