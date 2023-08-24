export enum Countries {
    Russia = 'russia',
    USA = 'usa'
}

export enum Scores {
    Big = '> 20',
    Small = '< 10'
}

export interface User {
    avatar: string
    name: string
    title: string
    subtitle: string
    country: Countries
    score: number,
    address: string
}

export interface FilterParams {
    country: null | Countries | string
    score: null | Scores | string
}
