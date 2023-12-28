import React, { Component } from "react";
import css from "./css/Content.module.css";
import { savedPosts } from "../../../challenges/src/posts.json";
import PostItem from "./PostItem";
import Loader from "./Loader";

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        };
    }

    componentDidMount() {
        // Use setTimeout to set isLoaded to true after 2 seconds
        setTimeout(() => {
            this.setState({ isLoaded: true });
        }, 2000);
    }

    render() {
        return (
            <div className={css.Content}>

                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>

                <div className={css.SearchResults}>
                    {this.state.isLoaded ? (
                        // If isLoaded is true, render the PostItem
                        <PostItem savedPosts={savedPosts} />
                    ) : (
                        // If isLoaded is false, render the Loader
                        <Loader />
                    )}
                </div>
            </div>
        );
    }
}

export default Content;
