import { ISearch} from './search'
export class binarySearch implements ISearch<number>{

    /**
     * Find the index of the array. Should pass a sorted array
     * @param valueToFind 
     * @param searchContext 
     * @returns index of the array or undefined if not found
     */
    search(valueToFind: number, searchContext: number[]): number | undefined {
        if(searchContext.length <= 0) return undefined;

        const mid =  Math.floor(searchContext.length / 2);
        if(searchContext[mid] === valueToFind) return mid;
        
        const nextSearchContext = valueToFind > searchContext[mid] ? searchContext.slice(mid) : searchContext.slice(0, mid);
        return this.search(valueToFind, nextSearchContext);
    }
}