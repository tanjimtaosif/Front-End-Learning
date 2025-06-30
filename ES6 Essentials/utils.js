// Sorting based on Publish year
export function sortPublisher(arr) {
    return arr.sort((a, b) => a.publish - b.publish);
}

// Filter based on genre

export function filtergenre(arr, genre) {
    return arr.filter((arr) => arr.genre === genre);
}


// export const names = "Emon";
// const name = "Emon"; 