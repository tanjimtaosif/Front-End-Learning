let student = {
    name: "Tanjim Mahtab",
    age: 23,
    cgpa: 3.40,
    isPass: true
}

for (let key in student) {
    console.log("keys =", key, "Values= ", student[key]);
}
