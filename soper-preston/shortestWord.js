function findShort(s){
    // Split each word from the sentance using the .split method
    // convert the words from the array to the length of each word using the map method (researched on w3schools)
    // put in a math.min method to return the smallest number in the array that was split and converted
    // Use the spread operator to clean up the code a bit by using it to let each element in the array be iterated?
        return Math.min(...s.split(" ").map(word => word.length));
    }