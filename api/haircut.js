import { getByJSON,postByJSON} from '../utils/request';
import { WX_API} from '../config/env';

/**
 * 获取首页门店列表
 * @param code
 * @returns {*}
 */
const selectStoreList = function(data,success){
  return postByJSON(WX_API+'/storeApi/storeList',{success},data,'加载中...');
}

module.exports ={selectStoreList}
