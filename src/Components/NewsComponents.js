import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

class NewsComponents extends Component {
  static defaultProps = {
    country : "in",
    pageSize : 8,
    category : 'general',
  }
  static Propstypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3529ffd2565d48e4a83808e73f7552d5&page=1&pageSize=${this.props.pageSize}`;
    try {
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      this.setState({ articles: parsedata.articles,totalResults:parsedata.totalResults,loading:false });
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  }
  handleprevclick = async()=>{
    console.log("previous click")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3529ffd2565d48e4a83808e73f7552d5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({ 
      page : this.state.page - 1,
      articles : parsedata.articles,
      loading : false
    });
}
  handlenexclick = async()=>{
    console.log("next click")
    if( !(this.state.page +1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3529ffd2565d48e4a83808e73f7552d5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true});
    let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      this.setState({ 
        page : this.state.page + 1,
        articles : parsedata.articles,
        loading : false
      });
    }
}

  
  
  render(){
    return (
      <div className="container my-3">
        <h2 className="text-center">Newser - Top Headlines</h2>
        {this.state.loading &&<Spinner/>}
        <div className="row">
          {!this.state.loading &&  this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                imgurl={element.urlToImage}
                newsUrl={element.url}
                author = {element.author}
                date = {element.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" className="btn btn-info" onClick={this.handleprevclick} style={{ color: "white" }}>&larr; Previous</button>
        <button disabled={(this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-info" onClick={this.handlenexclick} style={{ color: "white" }}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}


export default NewsComponents;
