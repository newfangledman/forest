import { ref, watch } from "vue";
import { store } from "@/store"


export default function useSearchByCommonName(){
  const searchInput = ref("");
  watch(searchInput, (input) => store.setState(input))
  
  return {
    searchInput,
  };
}
