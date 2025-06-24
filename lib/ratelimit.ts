import { Ratelimit } from "@upstash/ratelimit";
import redis from "@/database/redis";

const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.fixedWindow(5, "1m"),
    prefix: "@upstash/ratelimit",
    analytics: true
});

export default ratelimit;