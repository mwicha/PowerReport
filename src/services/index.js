import { default as service } from './service'
import { default as mockService } from './mockService'

const isMock = process.env.NODE_ENV === 'mock'

export default {
  // base mock must be first order then override by other
  ...isMock ? mockService : service
}
