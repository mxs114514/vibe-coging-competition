// 表单验证工具函数

/**
 * 验证手机号格式
 * 规则: 11位数字，以1开头，第二位为3-9
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}

/**
 * 验证验证码格式
 * 规则: 6位数字
 */
export function validateCode(code: string): boolean {
  const codeRegex = /^\d{6}$/
  return codeRegex.test(code)
}

/**
 * 获取手机号验证错误提示
 */
export function getPhoneErrorMessage(phone: string): string {
  if (!phone) return '请输入手机号'
  if (!validatePhone(phone)) return '请输入正确的手机号格式'
  return ''
}

/**
 * 获取验证码验证错误提示
 */
export function getCodeErrorMessage(code: string): string {
  if (!code) return '请输入验证码'
  if (!validateCode(code)) return '验证码格式不正确'
  return ''
}
