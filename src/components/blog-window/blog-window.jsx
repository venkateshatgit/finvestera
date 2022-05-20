import Button from '../button/button';
import './blog-window.css'

function BlogWindow({title, content}) {
    return (  
        <div className="blog-window">
            <div className="section1 image">
                <img src='https://miro.medium.com/max/1400/1*-GQSB4LpNRROIcsXjq4Cbg.jpeg'/>
            </div>

            <div className='section2'>
                <div className="content">
                    <h1>{title}</h1>

                    <div className="info">
                        <p>{content}</p>
                    </div>
                    
                </div>

                <Button text={'Read more'} />
            </div>
            
        </div>
    );
}

export default BlogWindow;