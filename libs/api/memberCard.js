const config = require('../config')
const errors = require('../utils/errors')
const request = require('../utils/request')

/**
 *  拉取会员信息（积分查询）接口
 *  @param cardId {string} 查询会员卡的cardid         
 *  @param code {string}  所查询用户领取到的code值 
 */
exports.getMemberInfo = (cardId, code) => {
  return request.post(config.api.GET_MEMBER_INFO, {
    form: JSON.stringify({ cardid: cardId, code })
  })
}

/**
 * 设置测试白名单
 * 由于卡券有审核要求，为方便公众号调试，可以设置一些测试帐号，这些帐号可领取未通过审核的卡券，体验整个流程
 * @param  {Array} openid ['o1Pj9jmZvwSyyyyyyBa4aULW2mA']
 * @param  {Array} username ['邱实']
 * 开发者注意事项
    1.同时支持“openid”、“username”两种字段设置白名单，总数上限为10个。
    2.设置测试白名单接口为全量设置，即测试名单发生变化时需调用该接口重新传入所有测试人员的ID.
    3.白名单用户领取该卡券时将无视卡券失效状态，请开发者注意。
 */
exports.setTestWhiteList = (openid, username) => {
  console.log(openid)
  return request.post(config.api.SET_TEST_WHITE_LIST, {
    form: JSON.stringify({ openid })
  })
}

/**
 * 激活会员卡
 * 激活会员卡方式： 1、接口激活 2、一键激活 3、自动激活 
 * 
 */
exports.setActivate = (options) => {
  return request.post(config.api.SET_ACTIVATE, {
    form: JSON.stringify({ options })
  })
}

/**
 * 更新会员卡券细信息
 */
exports.updateMember = (json) => {
  return request.post(config.api.UPDATE_MEMBER, {
    form: JSON.stringify(json)
  })
}
/**
 * 开发者在创建时填入wx_activate字段后，需要调用该接口设置用户激活时需要填写的选项，否则一键开卡设置不生效
 */
exports.setActivateUserform = (json) => {
  return request.post(config.api.SET_ACTIVATE_USERFORM, {
    form: JSON.stringify(json)
  })
}








