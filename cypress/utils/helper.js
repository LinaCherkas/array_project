export const isSuperset = (set, subset) => {
    subset.forEach((elem) => {
        if (!set.has(elem)) {
            return false
        }
    })
    return true
}

export const union = (setA, setB) => {
    let _union = new Set(setA)
    setB.forEach((elem) => {
        _union.add(elem)
    })
    return _union
}

export const intersection = (setA, setB) => {
    let _intersection = new Set()
    setB.forEach((elem) => {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    })
    return _intersection
}

export const difference = (setA, setB) => {
    let _difference = new Set(setA)
    setB.forEach((elem) => {
        _difference.delete(elem)
    })
    return _difference
}
