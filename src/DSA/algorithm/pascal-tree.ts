function pascalTree(rowNum: number): number[][] {
    if(!rowNum) return []
    const tree: number[][] = []
    tree.push([1]);
    tree.push([1,1]);

    for (let index = 2; index < rowNum; index++) {
        const SOT = tree[index-1]
        const nextLineToEntre: number[] = [1];
        
        for (let fill = 1; fill <= SOT.length; fill++) {
            if(SOT[fill]) {
                nextLineToEntre.push(SOT[fill] + SOT[fill-1])
            }else {
                nextLineToEntre.push(SOT[fill-1])
            }
        }
        tree.push(nextLineToEntre)
    }

    return tree
}


export {
    pascalTree
}