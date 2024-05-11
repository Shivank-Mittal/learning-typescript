import { binarySearch as binarySearchAlgo, binarySearchSortAgnostic as binaryAgnostic} from './binanry-search';

const binarySearch = (algoInput: [number[], number]) => binarySearchAlgo(algoInput[0], algoInput[1])
const binarySearchSortAgnostic = (algoInput: [number[], number]) => binaryAgnostic(algoInput[0], algoInput[1])

export {
    binarySearch,
    binarySearchSortAgnostic
}