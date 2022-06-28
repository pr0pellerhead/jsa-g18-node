import fetch from 'node-fetch';

(async () => {
    try {
        let res = await fetch('https://wikipedia.org');
        let wikipediaContent = await res.text();
        console.log(wikipediaContent);

        let blogRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        let blogData = await blogRes.json();
        console.log(blogData);
    } catch(err) {
        console.log(err);
    }
})();

// API - Application Programming Interface

