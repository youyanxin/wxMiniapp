const current = "dev";

let profiles = {
 
  'dev':'http://yuyue.geeorange.com',
  'local':'http://192.168.0.108:16001',
  
}

const WX_HOST = profiles[current];
const WX_API = WX_HOST+"/yuyue";

module.exports = {WX_HOST,WX_API};
