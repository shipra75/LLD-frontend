const data = [
    "Apple", "Banana", "Blueberry", "Cherry", "Coconut",
    "Grape", "Kiwi", "Lemon", "Mango", "Orange", "Papaya", "Pineapple",
    "Strawberry", "Watermelon"
  ];
  export const fetchSuggestions =(query)=> {
    return new Promise((Resolve)=> {
        setTimeout(()=> {
            const result = data.filter(i=> i.toLowerCase().includes(query.toLowerCase()))
            Resolve(result)
        }, 100 )
    })
  }