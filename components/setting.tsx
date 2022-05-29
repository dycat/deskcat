
function Setting({backgroundColorList, backgroundColor ,setBackgroundColor}) {

    const handleChangeBGColor = (event) => {
        setBackgroundColor(event.target.value)
    }
    return (
        <form>
            <h3 className="font-bold font-sans text-lg">Background Color</h3>
            <div>
              {backgroundColorList.map((color: string) => 
                <li className="list-none"><input type="radio" 
                                                 name="background"  
                                                 value={color}
                                                 checked={color == backgroundColor}
                                                 onChange={handleChangeBGColor}>
                                          </input> {color}</li> 
              )}
            </div>
          </form>
    )
}

export default Setting;