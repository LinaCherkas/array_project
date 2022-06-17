export const isSuperset = (set, subset) => {
    subset.forEach((elem) => {
        if (!set.has(elem)) {
            return false
        }
    })
    return true
}

export const union = (firstSet, secondSet) => {
    let Union = new Set(firstSet)
    secondSet.forEach((elem) => {
        Union.add(elem)
    })
    return Union
}

export const intersection = (firstSet, secondSet) => {
    let Intersection = new Set()
    secondSet.forEach((elem) => {
        if (firstSet.has(elem)) {
            Intersection.add(elem)
        }
    })
    return Intersection
}

export const difference = (firstSet, secondSet) => {
    let Difference = new Set(firstSet)
    secondSet.forEach((elem) => {
        Difference.delete(elem)
    })
    return Difference
}
