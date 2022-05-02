import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center'>

            <h1>Difference between javascript and nodejs</h1>
            <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use</p>

            <h1>When should you use nodejs and when should you use mongodb</h1>
            <p> <strong>node js:</strong> Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.
                <br />
                <strong> Mongodb :-</strong>  SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
            </p>

            <h1> Differences between sql and nosql databases</h1>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

        </div>
    );
};

export default Blogs;