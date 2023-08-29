import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,discription,imgurl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="card my-3 mx-3 ">
          <img src={!imgurl?"https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/09/image-url-15.jpg":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text my-2" style={{height: "20px"}}>{discription}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {date}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-info" style={{ color: "white" }}>
            Read more 
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
