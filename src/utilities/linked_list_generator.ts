import LinkedList from "../DSA/DS/linked-list";

export default function getLinkedList(values: number[] | string[] | string): LinkedList<number | string> {

    if(!Array.isArray(values)) {
        values = [...values]
    }

    const newLinkedList = new LinkedList<number | string>();
    newLinkedList.add(values)
    return newLinkedList
    
}