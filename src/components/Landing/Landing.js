
import tiktokIcon from '../images/tiktok.gif'; // Assuming the images directory is located in the same directory as this file

function LandingPage() {
  return (
    <section className="vh-100 gradient-custom-2">    
        <div className="container-fluid h-100">
        <div className="row h-100">
            <div className="col-sm-6 p-5 d-flex align-items-center">
            <p className="text-white">
            <h1 class="display-1">Welcome to ManageTok</h1>
                <h2> Get more done in less time</h2>
            {/* Welcome to ManageTok, the ultimate tool for managing your TikTok accounts!

            With ManageTok, you can easily manage all of your TikTok accounts from one convenient dashboard. No more logging in and out of multiple accounts, or trying to keep track of everything on your own. ManageTok lets you view all of your TikTok accounts in one place, and make changes to your account settings and content with just a few clicks.
            <br></br>
            <br></br>
            Features of ManageTok include:
            <br></br>
            <ul>
                <li>Easy account switching: Switch between all of your TikTok accounts with just a click.</li>
                <li>Content management: Create and schedule posts, edit captions and tags, and manage comments and messages.</li>
                <li>Analytics: Track your account growth and engagement with detailed analytics and insights.</li>
                
            </ul>
            Our app is designed to be simple, intuitive, and user-friendly, so you can focus on creating amazing content and growing your TikTok following.

            Sign up for ManageTok today and take your TikTok management to the next level! */}
            </p>
            </div>
            <div className="col-sm-6 p-5 d-flex justify-content-center align-items-center">
            <img src={tiktokIcon} alt="TikTok Icon" className="img-fluid" />
            </div>
        </div>
        </div>
    </section>
  );
}

export default LandingPage;
