import { createCn } from 'cn/engine'
import tables from './cn-tables'

// Tabelas geradas no build pelo plugin cn/vite a partir de cn.config.mjs (issue #31).
export const cn = createCn(tables)
