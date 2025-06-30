// Sorting based on Publish year
function sortPublisher(arr){
    return arr.sort((a,b) => a.publish - b.publish);
}

// Filter based on genre

function filtergenre(arr){
    return arr.filter(books.genre === genre);
}

module.exports ={
    sortPublisher,
    filtergenre
}