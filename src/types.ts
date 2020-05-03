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

export type Plant = {
  id: string
  commonName: string
  latinName: string
  water: ValueOf<Water>
  shade: ValueOf<Shade>
  sun: ValueOf<Sun>
}