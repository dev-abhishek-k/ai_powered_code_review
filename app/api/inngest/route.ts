import { inngest } from "@/features/inngest/client";
import { reviewPullRequest } from "@/features/reviews/server/review-pr-funciton";
import { serve } from "inngest/next";
import { processTask } from "./function";
import { syncRepoCodebaseFunction } from "@/features/repo-sync/server/repo-sync-fucntion";


export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [processTask, reviewPullRequest , syncRepoCodebaseFunction],
});