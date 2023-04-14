import { getDB } from "@/lib/db";
import Router from "@ootiq/next-api-router";
import { joinParams } from "@tbdsux/js-utils-mini";

const router = new Router()
  .all((req, res) => {
    res.status(405).json({ error: true, message: "Method not allowed" });
  })

  .get(async (req, res) => {
    const k = joinParams(req.query.key);

    const db = getDB(k);

    let { items: data, last } = await db.fetch({}, { limit: 100 });
    while (last) {
      const { items, last: newLast } = await db.fetch(
        {},
        { limit: 100, last: last }
      );

      last = newLast;

      data = [...data, ...items];
    }

    res.json({ error: false, data });
  })

  .handle();

export default router;
