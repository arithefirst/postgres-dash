import postgres from "postgres";
import {json} from "@sveltejs/kit";
import sql from "../sql"

let db: postgres.RowList<postgres.Row[]>
export async function GET() {
    try{
        db = await sql`SELECT table_name FROM information_schema.tables 
        WHERE table_schema != 'pg_catalog' AND table_schema != 'information_schema'`
        return json( {"error": null, "data": db.map(db => db.table_name)} )
    }

    catch(error) {
        return json( {"error": {error}, "data": null} )
    }
}