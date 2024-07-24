import pg from 'pg'
import config from '../database/config.mjs'

const { Pool } = pg

export const pool = new Pool(config)