function binarySearch(list, element) {
    //set high and low to encompass entire array 
    var low = 0; 
    var high = list.length - 1; 

    //loop through while there is one or more elements to check 
    while (high >= low) {
        var mid = low + Math.floor((high - low) / 2); 
        //return index when element is found 
        if (list[mid] == element) {
            return mid; 
        } 
        //search the left or right half of the array 
        if (list[mid] < element) {
            low = mid + 1; 
        } else {
            high = mid - 1; 
        } 
    //return -1 if element is not found 
    return -1;
}
