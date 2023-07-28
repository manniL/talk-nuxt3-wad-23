import { getRecentJokes } from "../../../server/utils/jokes.js"

export default defineEventHandler(async (event) => {
  const jokes = await getRecentJokes()
  return jokes
})