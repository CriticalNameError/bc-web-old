import { useApollo, client } from "../src/helpers/apolloClient";
import {GET_POSTS} from "../src/helpers/ListBlogPosts"
// export const getServerSideProps = async (ctx) => {
//   // let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//   // posts = await posts.json();
//   let posts = []
//   client.query({GET_POST_PAGES}).then((results, data)=>{
//     results.map(item=>{return item.slug})
//   })
//   const newsSitemaps = posts.map((item) => ({
//     loc: `https://berghauscie.de/${slug}`,
//     lastmod: new Date().toISOString(),
//   }));

//   const fields = [...newsSitemaps];

//   return getServerSideSitemap(ctx, fields);
// };

const BASE_URL = 'https://berghauscie.de';
const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${`${BASE_URL}`}</loc>
     </url>
     <url>
       <loc>${`${BASE_URL}/blog`}</loc>
     </url>
     <url>
       <loc>${`${BASE_URL}/wein-investments`}</loc>
     </url>
     <url>
       <loc>${`${BASE_URL}/faq`}</loc>
     </url>
     <url>
       <loc>${`${BASE_URL}/legal/datenschutz`}</loc>
     </url>
     <url>
       <loc>${`${BASE_URL}/legal/allgemeine-geschaeftsbedingungen`}</loc>
     </url>
     <url>
       <loc>${`${BASE_URL}/ueber-uns`}</loc>
     </url>
     <url>
       <loc>${`${BASE_URL}/legal/impressum`}</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${BASE_URL}/blog/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  let posts = []
  await client.query({query:GET_POSTS,variables:{skip:0, first:1000}}).then((result, data)=>{
    
    result.data.allPostPages.map(item=>{console.log(item.slug); posts.push(item)})
  })
//   const request = await fetch(EXTERNAL_DATA_URL);
//   const posts = await request.json();

 //We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;