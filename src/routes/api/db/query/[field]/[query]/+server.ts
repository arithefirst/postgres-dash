import {json} from "@sveltejs/kit";
import sql from "../../../sql";
import postgres from "postgres";

let db: postgres.RowList<postgres.Row[]>
export async function GET({ params }) {
    try {
        db = await sql`SELECT * FROM users WHERE ${sql(params.field)} = ${params.query}`;
        return json({"error": null, "data": db});
    }

    catch(error) {
        return json( {"error": error, "data": null} )
    }
}