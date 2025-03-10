import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import redis from '@/database/redis';
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1 s"),
  analytics: true,
  prefix: "@upstash/ratelimit",
});

export default ratelimit;