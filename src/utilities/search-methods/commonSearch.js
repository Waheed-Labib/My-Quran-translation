export const commonSearch = (searchText) => {
    if (isNaN(searchText)) return 'string'
    else return searchWithChapterNumber(searchText)
}

const searchWithChapterNumber = (number) => {

    if (number < 1 || number > 114) return {
        searchType: 'error'
    }

    const chapter = {};

    return {
        searchType: 'chapter',
        searchResult: chapter
    }
}

