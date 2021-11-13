const sortData = (sortedElement, data, sortingDirection = 'desc') => {
    const newDataArray = data.concat();
    
    const sortedData = newDataArray.sort((a, b) => {
        console.log('sortData sortingDirection: ' + sortingDirection)

        if (sortingDirection === 'desc') {
            return b[sortedElement] - a[sortedElement];
        } else if (sortingDirection === 'asc') {
            return a[sortedElement] - b[sortedElement];
        } else {
            return null;
        }
    })

    return sortedData;
}

export default sortData;