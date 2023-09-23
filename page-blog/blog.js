const blog = {
    posts: `
    <ol>
    <li><a href="/blog/postOne"  accesskey = "p1" >Post One</a></li>
    <li><a href="/blog/postTwo" accesskey = "p2" >Post Two</a></li>
    <li><a href="/blog/md" accesskey = "p3" >Markdown Example Post</a></li>
    </ol>
    
    `,
    postOne: `
    <h3>Post One</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit. Quisque condimentum fermentum tellus at elementum. Morbi in dignissim sapien. Pellentesque interdum sem diam, in mattis lectus hendrerit vel. Nullam nibh diam, fringilla eget ultricies eget, porta eget sem. Praesent vulputate vestibulum felis, viverra interdum diam volutpat non. Aliquam at ligula nec mi gravida facilisis. Etiam tempor egestas mauris at suscipit. Etiam aliquam, lorem et tincidunt pharetra, odio erat vehicula dui, eu placerat lectus erat non elit. Duis interdum neque id neque accumsan, eu iaculis arcu venenatis. Integer orci lectus, finibus id aliquet eu, porttitor id ante.</p>


    `,
    postTwo: `
    <h3>Post Two</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. Maecenas maximus, ipsum et laoreet congue, diam massa aliquam libero, at pellentesque orci ipsum et velit. Quisque condimentum fermentum tellus at elementum. Morbi in dignissim sapien. Pellentesque interdum sem diam, in mattis lectus hendrerit vel. Nullam nibh diam, fringilla eget ultricies eget, porta eget sem. Praesent vulputate vestibulum felis, viverra interdum diam volutpat non. Aliquam at ligula nec mi gravida facilisis. Etiam tempor egestas mauris at suscipit. Etiam aliquam, lorem et tincidunt pharetra, odio erat vehicula dui, eu placerat lectus erat non elit. Duis interdum neque id neque accumsan, eu iaculis arcu venenatis. Integer orci lectus, finibus id aliquet eu, porttitor id ante.</p>


    `,
    // markdown example
    md:`
    <md-block>
    ##### Markdown Example

    Table

    | Emoji | Skin Tone | Decimal |
    | --- | --- | --- |
    | 👍 | Default | 128077 |
    | 👍🏻 | Light Skin Tone | 128077, 127995 |
    | 👍🏼 | Medium-Light Skin Tone | 128077, 127996 |
    | 👍🏽 | Medium Skin Tone | 128077, 127997 |
    | 👍🏾 | Medium-Dark Skin Tone | 128077, 127998 |
    | 👍🏿 | Dark Skin Tone | 128077, 127999 |

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lacus quis velit viverra iaculis. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus ipsum ex. 
    Curabitur elementum luctus augue, quis eleifend tortor feugiat vel. 
    

    Code

    \`\`\`html
    &lt;p&gt;&amp;#128077;&nbsp;No&nbsp;skin&nbsp;tone(default)&lt;/p&gt;&lt;!&#45;&#45;&nbsp;&nbsp;👍&nbsp;&#45;&#45;&gt;
    &lt;p&gt;&amp;#128077;&amp;#127999;&nbsp;Dark&nbsp;Skin&nbsp;Tone&lt;/p&gt;&lt;!&#45;&#45;&nbsp;&nbsp;👍🏿&nbsp;&#45;&#45;&gt;
    &lt;p&gt;&amp;#128077;&amp;#127997;&nbsp;Medium&nbsp;Skin&nbsp;Tone&lt;/p&gt;&lt;!&#45;&#45;&nbsp;&nbsp;👍🏽&nbsp;&#45;&#45;&gt;
    \`\`\`

    \`\`\`javascript

    import fs from 'fs';

    function fileCreatedDate (file) {  
        const {birthtime}  = fs.statSync(file)
    
        return birthtime
    };

    \`\`\`

Code SandBox iframe

<iframe
    src="https://codesandbox.io/embed/html-emoji-refence-k77ys7?fontsize=14&hidenavigation=1&theme=dark"
    width="81%"
    height="450px"
    title="Nyein Maung"
/>




    
</md-block>
   `,

};

export default blog