/*write a small web ap that:
    - defines an array of items (numbers, strings, etc.).
    - finds and prints the most frequent item in the array.
    - examples:
        * [4, "g", 4, "test", 5, 6, "g", 4]: most frequent item is 4.*/
       //caching length in len variable*/
   
      const listOfItems= [33, 'flower', 'dog', 'flower', 741, 854, 'flower', 841, 'banana', 185, 'orange', 8529, 'flower'];
      const print = val => document.write(val);
      
      const uniqueValuesArrays = [...new Set(listOfItems)].map( value =>
        listOfItems.filter( element => element === value)
      )
      
      const mostFrequent = uniqueValuesArrays.reduce( (biggest, item) => {
      return biggest.length > item.length ? biggest : item
      })
      
      print(`${mostFrequent[0]} ( ${mostFrequent.length} times )`)