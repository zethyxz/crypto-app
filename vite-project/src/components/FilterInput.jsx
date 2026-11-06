const FilterInput = () =>{
    return(
       <div className="filter">
        <input 
          type="text"
          value={filer}
          placeholder="filter coins by name or symbol"
          onChange={(e) => onFilterChange(e.target.value)}
          />
          </div>
    )

}

export default FilterInput