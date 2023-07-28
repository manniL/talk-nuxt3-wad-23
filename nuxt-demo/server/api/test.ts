export default defineEventHandler(async (event) => {
  await useStorage('kv').setItem('wearedevs', 'hello')
  return await useStorage('kv').getItem('wearedevs')
})