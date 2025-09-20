import React from 'react'
const SearchComponent =({ searchCourse, courseSearchUserFunction
})=> {
    return (
        <header className="App-header">
            <h1>GeeksforGeeks</h1>
            <div className="search-bar">
                <input type="text"
                placeholder="Search for GFG Products..."
                value={searchCourse}
                onChange={courseSearchUserFunction}></input>
            </div>
        </header>
    )
}
export default SearchComponent