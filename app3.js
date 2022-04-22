let user = [[2], [4, 6], [78, 76, 25]]
function joinList(arry){
    let newArray = [];
    arry.forEach(element => {
    newArray=[...newArray,...element];
    });
    console.log(newArray);
}
joinList(user);