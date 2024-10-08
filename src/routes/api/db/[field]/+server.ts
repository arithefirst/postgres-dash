import {json} from "@sveltejs/kit";

export async function GET({ params }) {
    const err = {"error": "you must make a query to /api/db/$COL/$QUERY"}
    return json(err);
}
