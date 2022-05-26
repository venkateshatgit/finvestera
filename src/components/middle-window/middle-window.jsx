import BottomWindow from '../bottom-window/bottom-window';
import './middle-window.css';
import image from '../../images/swaraj.png';

function MiddleWindow() {
    return (  
        <div className="middle-window">
            <div className="image1">
                <img src={image}/>
            </div>

            <div className="middle-window-content">
                <div className="heading">
                    <p>Hey it's me</p>
                    <h1 id='name'>Rahul Narayan</h1>
                    <p><i>Founder & CEO, Finvestra</i></p>
                    <div className='underline'></div>
                </div>

                <ul className="information">
                            <li>
                                <div className="qualification">
                                    <h2>Qualification</h2>
                                    <p>Some information about financial health report goes here. Put text here. Put text here</p>
                                </div>
                            </li>

                            <li>
                                <div className="experience">
                                    <h2>Experience</h2>
                                    <p>Some information about financial health report goes here. Put text here. Put text here</p>
                                </div>
                            </li>
                </ul>

                <div className="videos">
                    <h1>Videos from my Youtube Channel</h1>
                    <div className="underline"></div>
                </div>
            </div>
        </div>
    );
}

export default MiddleWindow;