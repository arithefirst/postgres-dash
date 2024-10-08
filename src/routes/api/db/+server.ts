import {json} from "@sveltejs/kit";
import sql from "./sql";

export async function GET() {
    const db = await sql`SELECT * FROM users`;
    return json(db);
}
