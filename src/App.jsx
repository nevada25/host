import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from "colorPicker/ColorPicker";
import ColorList from "colorList/ColorList";
import {useColor} from "colorPicker/useColors";

const App = () => {
    const {color, colorList, handleColorChange, handleSubmitSaveColor} = useColor();
    return <>
        <h1 className="text-center bg-dark text-white p-2">Color Picker</h1>

        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-4">
                    <ColorList  colorList={colorList}/>
                </div>
                <div className="col-12 col-md-8">
                    <ColorPicker color={color} colorList={colorList} handleColorChange={handleColorChange}
                                 handleSubmitSaveColor={handleSubmitSaveColor}/>
                </div>
            </div>
        </div>
    </>
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App/>)