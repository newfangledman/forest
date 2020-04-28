import { reactive, inject, computed } from 'vue'
import data from './data.fixture'
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
  searchResult: computed(() => Array.from(new Set([...state.plants])))
}

export const store = {
  state,
  ...actions,
  ...getters
}