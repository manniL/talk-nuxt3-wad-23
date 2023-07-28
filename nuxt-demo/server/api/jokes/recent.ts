//@ts-nocheck
export default defineEventHandler(async (event) => {
  const jokes = await useStorage('kv').getItem<any[]>('jokes') || []
  return jokes
})