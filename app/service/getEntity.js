const Service = require('egg').Service
const execSync = require('child_process').execSync;
const iconv = require('iconv-lite');

class getEntityService extends Service {
    async find(articleInfo) {
        let result = execSync('python ./model/test.py 啊啊啊', {encoding: 'utf8'})
        console.log(result.toString())
        console.log(iconv.decode(result, 'UTF-8'))
        return 'ok'
    }
}

module.exports = getEntityService