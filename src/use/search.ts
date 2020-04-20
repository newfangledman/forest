import { ref, computed } from "vue"

interface IUseSearch<T> {
    query: string,
    searchOnAttribute: keyof T,
    toSearch: Array<T>,
}

export default function useSearch(props: IUseSearch<any>){
    const toSearch = ref(props.toSearch)
    const result = computed(() => toSearch.value.filter((item) => item[props.searchOnAttribute].startsWith(props.query)))
    return {
        result
    }
}