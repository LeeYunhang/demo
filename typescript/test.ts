type Readonly1<T> = {
    readonly [P in keyof T]: T[P];
}
type Partial1<T> = {
    [P in keyof T]?: T[P];
}

let a: Readonly1<{ name: string | null }> = { name: 'mrcode' }  


type Keys = 'number' | 'name'

type readOnlyFlags = { readonly [key in Keys]: boolean }  