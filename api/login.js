import { getByJSON,postByJSON} from '../utils/request';
import { WX_API} from '../config/env';

/**
 * 获取openId
 * @param code
 * @returns {*}
 */
const getOpenId = function(code,success){
  
  return getByJSON(WX_API+'/mp/openId/get/'+code,{success},null,'正在加载数据');

}


module.exports ={getOpenId}
