import { home,about } from "../page-blog/pages";
import blog from "../page-blog/blog";

class Router {
    /**
     * Initializes a new instance of the constructor.
     *
     * @param {string} html - The HTML to be assigned to the 'html' property.
     * @param {string} link - The link selector to be assigned to the 'links' property.
     */
    constructor(html,link){
        this.html = html;
        this.pathname = window.location.pathname;
        this.init();
        this.links = document.querySelectorAll(link);
        this.event();
    }
    content (){
        return document.getElementById('app');
    }
    render (){
        const element = this.content();
        element.innerHTML = '';
        element.insertAdjacentHTML('beforeend',this.html);
    }
    changeRoute(pathname) {
      window.history.pushState({}, pathname, window.location.origin + pathname);
      Pages[pathname].render();
    }
    init() {
      window.addEventListener('load', () => {
        Pages[this.pathname].render();
      });
    }
    event() {
      this.links.forEach((link) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          changeRoute(event.target.pathname);
        });
      });
    }
};
const Pages = {
  "/": new Router(home),
  "/about": new Router(about),
  "/blog/posts": new Router(blog.posts),
  "/blog/postOne": new Router(blog.postOne),
  "/blog/postTwo": new Router(blog.postTwo),
};
