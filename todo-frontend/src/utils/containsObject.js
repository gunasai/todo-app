export function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            console.log(true);
            return true;
        }
    }
    console.log(true);
    return false;
}
