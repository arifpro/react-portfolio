import React from 'react';

const Portfolio = ({ data }) => {

    if(data){
      var projects = data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage}  style={{ width: '250px', height: '150px'}}/>
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })


      var blogs = data.blogs.map(function(blog){
        const image = "images/blogs/" + blog.image
        return (
          <div className="boxBlogs">
            <img alt={blog.title} src={image} />
            <hr/>
            <p>{blog.category}</p>
            <a className="link has-text-primary button" style={{border: 'none', padding: '0', height: '27px'}}></a>
            <a style={{borderRadius: '35px', padding: '2px 15px'}} className="button is-primary is-outlined is-rounded is-medium" href="https://medium.com/@proarif/getting-started-with-react-router-fbf10e402c26">View</a>
          </div>
        )
        // return <div key={blog.title} className="columns portfolio-item">
        //    <div className="item-wrap">
        //     <a href={blog.url} title={blog.title}>
        //        <img alt={blog.title} src={blog.image}  style={{ width: '250px', height: '150px'}}/>
        //        <div className="overlay">
        //           <div className="portfolio-item-meta">
        //          <h5>{blog.title}</h5>
        //              <p>{blog.category}</p>
        //           </div>
        //         </div>
        //       <div className="link-icon"><i className="fa fa-link"></i></div>
        //     </a>
        //   </div>
        // </div>
      })
    }

    return (
      <section id="portfolio">

          <div className="row">
            <div className="twelve columns collapsed">
                <h1>Check Out Some of My Works.</h1>
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {projects}
                </div>
              </div>
          </div>
          <br/>
          <br/>
          <br/>


          <div className="row">
            <div className="twelve columns collapsed">
                <h1>Check Out Some of My Blogs.</h1>
                {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    {blogs}
                </div> */}
                <div>
                    {blogs}
                </div>
              </div>
          </div>
      </section>
    );
}

export default Portfolio;
