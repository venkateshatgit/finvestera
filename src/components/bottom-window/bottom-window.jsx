import BlogWindow from '../blog-window/blog-window';
import './bottom-window.css'

function BottomWindow() {
    return (  
        <div className='bottom-window-back'>
            <div className="bottom-window">
                <h1>Some Useful Blogs For Your Help</h1>
                <div className='underline'></div>
                <div className="blogs">
                    <BlogWindow title={"Blog 1"} content={"Some information about financial health report goes here. Put text here. Put text here"}/>
                    <BlogWindow title={"Blog 1"} content={"Some information about financial health report goes here. Put text here. Put text here"}/>
                    <BlogWindow title={"Blog 1"} content={"Some information about financial health report goes here. Put text here. Put text here"}/>
                </div>
            </div>
        </div>
        
    );
}

export default BottomWindow;