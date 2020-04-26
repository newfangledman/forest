import { reactive } from 'vue'

export function useDeconstructAttrs(attrs: {[key: string]: any}) {
  const boundObject = reactive(attrs)
  return { ...boundObject }
}
