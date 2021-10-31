const sortData = (sortedElement, data) => {
    const newDataArray = data.concat();

    const sortedData = newDataArray.sort((a, b) => {
        return b[sortedElement] - a[sortedElement];
    })

    return sortedData;
}

export default sortData;