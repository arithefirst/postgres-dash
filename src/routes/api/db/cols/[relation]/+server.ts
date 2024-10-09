import sql from "../../sql"
import {json} from "@sveltejs/kit";

export async function GET({ params }) {
    const db = await sql`SELECT column_name FROM information_schema.columns WHERE table_name = '${sql.unsafe(params.relation)}'`
    return json(db.map(db => db.column_name));
}