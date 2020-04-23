import { reactive, inject } from 'vue'
import data from './data.fixture'
const state = reactive({
  plants: [],
})

const actions = {
  getPlants() {
    state.plants = data
  },
}

export const store = {
  state,
  ...actions,
}

export function getState() {
  return inject(Symbol.for('PlantStore'))
}
