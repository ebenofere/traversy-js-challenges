function titleCase(arr) {
    let newArray = arr.toLowerCase().split(" ");
    newArray.forEach((item) => {
        let newItem = item.charAt(0).toUpperCase() + item.slice(1);
        
        let newArray = newItem.push(36)

        // console.log(newArray2);


        
    })
    
}

// charAt(0).toUpperCase()
module.exports = titleCase;
