import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const articleArray = posts.map((post) => {
        return(
            <Article
            key = {post.id}
            title = {post.title}
            date= {post.date}
            preview = {post.preview}
            minutes = {post.minutes}
            />
        )
    })
    // when there is an array list user map 
    // if there is a component needed inside; return the whole component element
    return <main>{articleArray}</main>
}

export default ArticleList; 