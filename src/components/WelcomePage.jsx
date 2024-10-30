import './WelcomePage.css'

function WelcomePage({ onLoginClick, onRegisterClick }) {
    return (
    <div>

        <div className='welcomeHeader'>
            <h1>Markdown Editor</h1>
            <div className='welcomeButtons'>
                <button className='welcomeLogin' onClick={onLoginClick}>Login</button>
                
            </div>
        </div>

        <img className="welcomeImage" src="https://img.freepik.com/free-vector/professional-writer-typographic-header-author-writing-script-novel-bestseller-publishing-idea-creative-literature-profession-flat-vector-illustration_613284-2941.jpg?w=900&t=st=1704785075~exp=1704785675~hmac=2f05c3625d9f852b44290ee2c86e8ccdf1d26420e42400ca2c276b078784e758" alt="welcome Image" />
        
        <div className='content'>
            <h1>The Rich Text Editor for Every Use Case</h1>
            <h2>Allows users to create Markdown content in your application.</h2>
            <p className='contentPara'>Login to explore our Markdown Live Editor and Preview</p>
        </div>

        <div className='premiumFeatures'>
            <h1 className='premiumFeaturesHeading'>Markdown Editor with Premium Features</h1>
            <div className='collabContainer'>
                <div>
                <h1>Collaboration</h1>
                <br />
                <p className='collabPara'>Allow your users to collaboratively write, review and discuss right within your application.
                Let them use Track Changes, Comments and Revision History features - all of them are available either in real-time or in a standard mode.</p>
                <br />
                <p className='collabPara'>Allow your users to collaboratively write, review and discuss right within your application.
                Let them use Track Changes, Comments and Revision History features - all of them are available either in real-time or in a standard mode.</p>
                <br />
                <p className='collabPara'>Allow your users to collaboratively write, review and discuss right within your application.
                Let them use Track Changes, Comments and Revision History features - all of them are available either in real-time or in a standard mode.</p>
                <br />
                </div>
                <img className='collabImage' src="https://img.freepik.com/free-vector/mobile-app-development-online-service-platform-modern-technology-smartphone-interface-design-online-text-editor-vector-flat-illustration_613284-1791.jpg?w=740&t=st=1704803064~exp=1704803664~hmac=2372fa455230e343ef6eb30a7f39ac829c8e6e9258bd228781d5db22ee73b5c0" alt="" />
            </div>

            <div className='productivityContainer'>
                <img className='collabImage' src="https://img.freepik.com/free-vector/ux-ui-designer-concept-app-interface-improvement-user-interface-experience-modern-technology-concept-flat-vector-illustration_613284-3409.jpg?w=740&t=st=1704804613~exp=1704805213~hmac=3970970b123ae745b091e0813009532ef7db1ab44fbed4ea31989aa21361058d" alt="" />
                <div>
                    <h1>Productivity Pack</h1>
                    <br />
                    <p className='collabPara'>The Productivity Pack is a bundle of Premium plugins designed to enhance document editing and accelerate content creation for you and your team.</p>
                    <br />
                    <p className='collabPara'>The Productivity Pack is a bundle of Premium plugins designed to enhance document editing and accelerate content creation for you and your team.</p>
                    <br />
                    <p className='collabPara'>The Productivity Pack is a bundle of Premium plugins designed to enhance document editing and accelerate content creation for you and your team.</p>
                    <br />
                </div>                
            </div>
        </div>
            <div className='WhyMarkdownContainer'>                
                <div>
                    <h1>Why Markdown Editor?</h1>
                    <p className='whyMarkdownPara'>This gives us a solid foundation on which we can develop the editor.</p>
                    <div className='whyMarkDownContainerBox'>
                    <div className='whyMarkDownContainer'>
                        <h1>Quality</h1>
                        <p>Software quality is in our DNA. We spend over 50% of our time testing code and writing documentation.</p>
                    </div>
                    <div className='whyMarkDownContainer'>
                        <h1>Experience</h1>
                        <p>20+ years of experience in rich text editing. 50+ developers on board. 50M+ downloads and hundreds millions of users worldwide.'</p>
                    </div>
                    <div className='whyMarkDownContainer'>
                        <h1>Support</h1>
                        <p>Superb documentation, outstanding technical support and a huge Open Source community that helps us make the software better.</p>
                    </div>
                    </div>
                </div>                
            </div>

        <div className='developerContent'>
            <h1>Ready for developers’ favorite technologies</h1>
            <h2>Native integrations with the most popular libraries will save you time, money and effort.</h2>
        </div>
        
        <div className='footer'>
            <h3>Copyright 2024.</h3>
            <a href="">Privacy policy</a>
            <a href="">Terms of use</a>
            <a href="">Cookie preferences</a>
        </div>

    </div>
    );
  }

  export default WelcomePage;