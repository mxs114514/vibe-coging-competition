// 认证 API 服务

import api from './index'
import type { ApiResponse } from '@/types/api'
import type {
  CaptchaRequest,
  CaptchaResponse,
  LoginRequest,
  LoginResponse,
  UserInfo
} from '@/types/auth'

/**
 * 获取验证码
 */
export function getCaptcha(data: CaptchaRequest): Promise<ApiResponse<CaptchaResponse>> {
  return api.post('/auth/captcha', data)
}

/**
 * 用户登录
 */
export function login(data: LoginRequest): Promise<ApiResponse<LoginResponse>> {
  return api.post('/auth/login', data)
}

/**
 * 获取当前用户信息
 */
export function getCurrentUser(): Promise<ApiResponse<UserInfo>> {
  return api.get('/auth/me')
}
