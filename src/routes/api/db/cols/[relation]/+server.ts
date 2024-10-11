import sql from "../../sql"
import {json} from "@sveltejs/kit";
import postgres from "postgres";

let db: postgres.RowList<postgres.Row[]>
export async function GET( { params } ) {
    try{
        db = await sql`SELECT column_name FROM information_schema.columns WHERE table_name = '${sql.unsafe(params.relation)}'`
        return json( {"error": null, "data": db.map(db => db.column_name)} )
    }

    catch(error) {
        return json( {"error": {error}, "data": null} )
    }
}