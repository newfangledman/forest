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

export type Plant = {
  commonName: string
  latinName: string
  water: Water
  shade: Shade
  sun: Sun
}