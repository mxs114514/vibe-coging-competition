// API 通用响应类型

/**
 * 统一响应结构
 */
export interface ApiResponse<T = any> {
  code: number
  message: string
  data: T
}

/**
 * 错误响应
 */
export interface ApiError {
  code: number
  message: string
  data?: any
}
