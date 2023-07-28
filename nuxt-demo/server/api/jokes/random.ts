//@ts-nocheck
export default defineEventHandler(async (event) => {
  const data = await $fetch<any>('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })

  const jokes = await useStorage('kv').getItem<any[]>('jokes') || []
  jokes.push(data)

  await useStorage('kv').setItem('jokes', jokes.slice(0, 9))

  return data
})