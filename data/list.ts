

type Compound = {
  [key : string] : Compound | List | string | number
}

type CompoundInList = {
  '' :
    | List
    | string
    | number

  [key : string] : 
    | Compound
    | List
    | string
    | number
}
export type List = string[] | number[] | List[] | CompoundInList[]
