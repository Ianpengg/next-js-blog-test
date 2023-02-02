import fs from 'fs'
import matter from 'gray-matter'
// import md from 'markdown-it'
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) {}
        }
        return ''; // use external default escaping
    }
});



export async function getStaticPaths() {
    //Retrieve all the files in the posts directory
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName)=>({
        params: {
            slug: fileName.replace('.md', '')
        } 
        
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const {data: frontmatter, content} = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    }
}

export default function PostPage({frontmatter, content}) {
    return (
        <div className='prose md:prose-lg mx-10 md:mx-auto dark:prose-invert font-semibold '>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: md.render(content)}}/>
        </div>
        )

}