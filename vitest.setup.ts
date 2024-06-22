import { server } from '@/test/msw/server'
import '@testing-library/jest-dom/vitest'
import { afterAll, beforeAll, afterEach } from 'vitest'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())