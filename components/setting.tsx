
import { BackgroundColor } from "../components/backgroundColor";

type AppProps = {
  backgroundColorList: BackgroundColor[];
  currentBackgroundColor: BackgroundColor;
  setBackgroundColor: Function
}

function Setting({backgroundColorList, currentBackgroundColor , setBackgroundColor}: AppProps) {

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
                                                 
                                                 checked={color == currentBackgroundColor}
                                                 onChange={handleChangeBGColor}>
                                          </input> {color.display_name}</li> 
              )}
            </ul>
          </form>
    )
}

export default Setting;