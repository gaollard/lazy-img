const os = require('os');

exports.getLocalIp = function () {
    let localhost = 'localhost';
    let network = os.networkInterfaces();
    try {
        localhost = network.en0[1].address;
    } catch (e) {
        if (network['本地连接']) {
            localhost = network['本地连接'][1]['address']
        }
    }
    return localhost;
}