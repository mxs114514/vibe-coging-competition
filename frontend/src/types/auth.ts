// 认证相关类型定义

/**
 * 获取验证码请求
 */
export interface CaptchaRequest {
  phone: string
}

/**
 * 获取验证码响应
 */
export interface CaptchaResponse {
  verifyCode: string // 开发环境返回
}

/**
 * 登录请求
 */
export interface LoginRequest {
  phone: string
  code: string
}

/**
 * 用户信息
 */
export interface UserInfo {
  id: number
  username: string
  phone: string
  createdAt?: string
}

/**
 * 登录响应
 */
export interface LoginResponse {
  token: string
  expiresIn: number
  user: UserInfo
}
