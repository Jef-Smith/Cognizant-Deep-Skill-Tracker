import React from "react";
import Post from "./Post";

class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();

            const postObjects = data.map((item) => new Post(item.id, item.title, item.body));

            this.setState({ posts: postObjects });
        } catch (error) {
            this.componentDidCatch(error, { componentStack: 'In loadPosts()' });
        }
    };

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Error occurred: " + error.message);
        console.error("Component Error:", error, info);
    }

    render() {
        return (
            <div>
                <h2>All Posts</h2>
                {this.state.posts.map((post) => (
                    <div key={post.id} style={{ marginBottom: "1.5rem" }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
