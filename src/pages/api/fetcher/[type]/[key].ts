import { base64Decode } from "@/lib/b64";
import { getDB } from "@/lib/db";
import Router from "@ootiq/next-api-router";
import { joinParams } from "@tbdsux/js-utils-mini";

const router = new Router()
  .all((req, res) => {
    res.status(405).json({ error: true, message: "Method not allowed" });
  })

  .get(async (req, res) => {
    const { key, type } = req.query;
    const k = base64Decode(joinParams(key));
    const t = joinParams(type);

    const db = getDB(t);

    let { items: data, last } = await db.fetch({ url: k }, { limit: 100 });
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
