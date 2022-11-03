const Content = () => {
 return (
    <div class="container">
      <p>Welcome to GitHub Get Latest File <b>GHGLF</b> for short.</p>
      <p>Have you ever needed a single file from GitHub? But you don't just want any version of that file you want the <i>latest</i> version of that file?</p>
      <p>Yeah me to! Well that's what this tool tries to solve.</p>
      <p>It's also super simple, head over to the file you want on GitHub, for example:</p>
      <pre>https://github.com/facebook/react/blob/main/CHANGELOG.md</pre>
      <p>Now replace <code>github.com</code> with <code>ghglf.com</code></p>
      <p>And that's it! You should have been redirected to the raw version of that file at it's latest tag.</p>
      <p>Now obviously this example is a bit useless so let's try that again with <code>curl</code>.</p>
      <pre>curl -L https://ghglf.com/facebook/react/blob/main/CHANGELOG.md</pre> 
      <p>Now you can use it for whatever you want! In my case it was fetch Zsh completions for my dotfiles.</p>
    </div>
  )
}

export { Content };