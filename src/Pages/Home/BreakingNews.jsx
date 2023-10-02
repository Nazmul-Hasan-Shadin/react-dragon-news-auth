import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div>
          <button className="btn-secondary">Breaking News</button>  
          <Marquee pauseOnHover={true}>
          I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>
    );
};

export default BreakingNews;