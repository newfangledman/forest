import { ref, computed } from "vue";

  enum Shade {
    PERMANENT,
    PARTIAL,
    LIGHT,
    NONE
  }

  enum Sun {
    FULL,
    PARTIAL,
    LIGHT  
}

  enum Water {
    AQUATIC,
    HIGH,
    MODERATE,
    LOW
  }
interface UseSearch<T, E> {
  query: string;
  searchOnAttribute: keyof E;
  toSearch: Array<T>;
}

type PlantSearchable = {
  commonName: string
  latinName: string
}
type Plant = PlantSearchable & {
  water: Water
  shade: Shade
  sun: Sun
}
export default function useSearch(props: UseSearch<Plant, PlantSearchable>){
  const toSearch = ref(props.toSearch);
  const result = computed(() =>
    toSearch.value.filter(item =>
      item[props.searchOnAttribute].startsWith(props.query)
    )
  );
  return {
    result
  };
}
