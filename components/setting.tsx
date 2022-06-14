
import { BackgroundColor } from "../components/backgroundColor";

function Setting(backgroundColorList: BackgroundColor[], backgroundColor: BackgroundColor , setBackgroundColor: Function) {

    const handleChangeBGColor = (event) => {
        setBackgroundColor(event.target.value)
    }
    return (
        <form>
            <h3 className="font-bold font-sans text-lg">Background Color</h3>
            <ul>
              {backgroundColorList.map((color: BackgroundColor) => 
                <li className="list-none" key={color.id}><input type="radio" 
                                                 name="background"  
                                                 value={color.value}
                                                 
                                                 checked={color == backgroundColor}
                                                 onChange={handleChangeBGColor}>
                                          </input> {color.display_name}</li> 
              )}
            </ul>
          </form>
    )
}

export default Setting;