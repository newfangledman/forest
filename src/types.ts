enum Shade {
    PERMANENT = "permanent",
    PARTIAL = "partial",
    LIGHT = "light",
    NO = "no"
}

enum Sun {    
    FULL = "full",
    PARTIAL = "partial" ,
    LIGHT  = "light"
}

enum Water {
    AQUATIC = "aquatic",
    HIGH = "high",
    MODERATE = "moderate",
    LOW = "low"
}

type ValueOf<T> = T[keyof T];

export type PlantSearchFilter = {
  water: ValueOf<Water>
  shade: ValueOf<Shade>
  sun: ValueOf<Sun>
}

export type PlantStringSearch = {
  id: string
  commonName: string
  latinName: string
}

export type Plant = PlantSearchFilter & PlantStringSearch