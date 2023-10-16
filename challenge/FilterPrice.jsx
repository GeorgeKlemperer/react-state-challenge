function FilterPrice (props) {

    function update(event) {
        props.setMax(Number(event.target.value))
    }
return <fieldset>
              <legend>Price</legend>
              <label htmlFor="max-price">
                Max price
                <input
                  type="range"
                  id="max-price"
                  min="0.5"
                  max="9"
                  step="0.25"
                  value={props.max}
                  onChange={update}
                />
              </label>
            </fieldset>
}

export default FilterPrice