import {json} from "@sveltejs/kit";
import sql from "../../sql";

export async function GET({ params }) {
    const db = await sql`SELECT * FROM ${sql(params.relation)}`;
    return json(db);
}
