import postgres from 'postgres'

const sql = postgres({
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'example',
})

export default sql