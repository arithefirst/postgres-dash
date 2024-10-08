import {json} from "@sveltejs/kit";
import sql from "../../../sql";

export async function GET({ params }) {
    const db = await sql`SELECT * FROM users WHERE ${sql(params.field)} = ${params.query}`;
    return json(db);
}
