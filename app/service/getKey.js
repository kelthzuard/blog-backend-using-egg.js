const Service = require('egg').Service
const qiniu = require('qiniu')

class getKeyService extends Service {
    async index () {
        const accessKey = 'LydLyg_hplaALgdPKm-s0rGMIt2YPwoj33a5SWlP'
        const secretKey = 'P_C0gaJ1sQloOuR9z-InK3sJs7QaxDzRNeftLbQI'
        const mac  = new qiniu.auth.digest.Mac(accessKey, secretKey) 
        const options = {
            scope: 'kelthzuard-blog'
        }
        const putPolicy = new qiniu.rs.PutPolicy(options)
        const uploadToken = putPolicy.uploadToken(mac)
        return { uploadToken }
    }
}

module.exports = getKeyService