'use strict';

const alfy = require('alfy');
const { v4:uuid } = require('uuid');
const CryptoJS = require('crypto-js')
module.exports = {
    youDaoApi: 'https://openapi.youdao.com/api',
    getParams: function () {
        const salt = uuid();
        const curtime = Math.round(new Date().getTime()/1000);
        const key = '有道api 应用密钥'
        const appKey = "有道api 应用Id";
        const q = alfy.input
        const sign = CryptoJS.SHA256(`${appKey}${q}${salt}${curtime}${key}`).toString(CryptoJS.enc.Hex)
        return {
            query: {
                appKey,
                salt,
                curtime,
                sign,
                signType:'v3',
                q,
                from:'auto',
                to:'auto',
            }
        }
    },
    filter: {
        prep: [
            'and', 'or', 'the', 'a', 'at', 'of'
        ],
        prefix: [],
        suffix: [
            'ing', 'ed', 'ly'
        ],
        verb: [
            'was'
        ]
    }
};
