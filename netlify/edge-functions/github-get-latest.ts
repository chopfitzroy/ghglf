import { urlParse } from "https://deno.land/x/url_parse/mod.ts";
import { Octokit } from "https://cdn.skypack.dev/@octokit/core?dts";

const apiToken = Deno.env.get("GITHUB_API_TOKEN");

const octokit = new Octokit({
  auth: apiToken;
});

export default async (req: Request) => {
  try {
    const uri = urlParse(req.url);
    // Strip off the `/api/` prefx
    const stripped = uri.pathname.substring(5);
    const segments = stripped.split("/");    
    const fragments = segments.slice(4);
    const file = fragments.join('/');

    const [owner, repo] = segments;
        
    const {data} = await octokit.request('GET /repos/{owner}/{repo}/releases', {
      owner,
      repo
    });
    
    const [latest] = data || [];
    
    if (latest === undefined) {
      return new Response('Could not find latest release', { status: 404 });
    }
    
    const tag = latest.tag_name;
    const target = `https://raw.githubusercontent.com/${owner}/${repo}/${tag}/${file}`;

    return Response.redirect(target, 302);
  } catch (err) {
    if (err instanceof Error) {
       return new Response(err.message, { status: 500 })
    }
    return new Response('Failed to retrieve repo', { status: 500 })
  }
}