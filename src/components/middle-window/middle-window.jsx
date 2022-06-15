import BottomWindow from '../bottom-window/bottom-window';
import './middle-window.css';
import image from '../../images/swaraj.png';

function MiddleWindow(){

    const moveLeft = (list) => {
        console.log(list[0].scrollLeft-=300)
    }

    const moveRight = (list) => {
        console.log(list[0].scrollLeft+=300)
    }


    const handleVideoButton = (e) => {
        console.log(e.target.id)
        let list = document.getElementsByClassName('video-list');
        console.log(list)
        if(e.target.id === "left-press")
            moveLeft(list)
        else
            moveRight(list)
    }

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

                    <div className="video-content">
                        <button id='left-press' className='video-button' onClick={handleVideoButton}>Left </button>
                        <div className="video-list">
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/nZ6R9fFK6qY"></iframe>
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/SvFuvUbmaxs"></iframe>
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/jbNi7aXEcJk"></iframe>
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/Trw6PS7QqQk"></iframe>
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/t6BQ1Wle8c4"></iframe>
                            <iframe width="300" height="200" src="https://www.youtube.com/embed/m81ihLG1ZWg"></iframe>
                        </div>
                        <button id='right-press' className='video-button' onClick={handleVideoButton}>Right</button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default MiddleWindow;