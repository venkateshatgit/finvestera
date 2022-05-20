import Button from '../button/button';
import Navbar from '../navbar/navbar';
import './top-window.css'

function TopWindow() {
    return (  
        <div className="top-window">
            <Navbar/>
            <div className="top-window-content">
                <div>
                    <h1>
                        Planning your Finances, <br/> worried?
                    </h1>
                    <p>Some information about financial health report goes here. Put text here. Put text here</p>

                    <Button text={"Check Your Financial Health"} />
                </div>

                <div>
                    <img src=''/>
                </div>
            </div>
        </div>
    );
}

export default TopWindow;