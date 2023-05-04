import { base64Decode } from "@/lib/b64";
import { getDB } from "@/lib/db";
import Router from "@ootiq/next-api-router";
import { joinParams } from "@tbdsux/js-utils-mini";

// 36 hours / 1 and 1/2 days
const duration = 129600;

const router = new Router()
  .all((req, res) => {
    res.status(405).json({ error: true, message: "Method not allowed" });
  })

  .get(async (req, res) => {
    const { key, type } = req.query;
    const k = base64Decode(joinParams(key));
    const t = joinParams(type);

    const db = getDB(t);
    const now = new Date().getTime() / 1000 - duration;

    let { items: data, last } = await db.fetch(
      { url: k, "date_time?gte": now },
      { limit: 100 }
    );
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
