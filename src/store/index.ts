import { reactive, inject, computed } from 'vue'
import data from './data.fixture'
import { Plant } from '@/types'
const state = reactive({
  plants: data,
})

const actions = {
  getPlants() {
    state.plants = data
  },
  setState(searchInput: string){
    if(searchInput.length){
      state.plants = state.plants.filter(plant => plant["commonName"].toLowerCase().startsWith(searchInput.toLowerCase()))
    }else{
      state.plants = data;
    }
  }
}

const getters = {
  searchResult: computed(() => filterSearch(Array.from(new Set([...state.plants]))))
}

function filterSearch(unfilteredResult: Plant[]){
  return unfilteredResult
}
export const store = {
  state,
  ...actions,
  ...getters
}