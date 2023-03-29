import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  // pre-defined fields in store
  const firstName = ref("")
  const lastName = ref("")
  const streetAddr = ref("")
  const city = ref("")
  const state = ref("")
  const zip = ref(Infinity)
 

  return { firstName, lastName, streetAddr, city, state, zip }
})
