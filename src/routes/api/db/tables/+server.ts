import {json} from "@sveltejs/kit";
import sql from "../sql"

export async function GET() {
    const db = await sql`SELECT table_name FROM information_schema.tables 
    WHERE table_schema != 'pg_catalog' AND table_schema != 'information_schema';`

    return json(db.map(db => db.table_name))
}