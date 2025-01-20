export interface ISearch<T> {
    search(value: T, searchContext: T[]): number | undefined;
}