import postgres from 'postgres'

const sql = postgres({
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'example',
    debug: true,
})

export default sql