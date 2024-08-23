import { define, html, router } from "hybrids";

import Home from "./views/Home.js";
import About from "./views/About.js";
import Help from "./views/Help.js";

define({
  tag: "my-app",
  views: router([Home, About, Help]),
  render: ({ views }) => {

    return html`
      <template>
        <nav>
          <a href="${router.url(Home, { name: 'Gustavo'})}">Home</a>
          <a href="${router.url(About, { hint: 'Hybrid is nice!'})}">About</a>
          <a href="${router.url(Help, { user: "Daniel" })}">Help</a>
        </nav>
        <div>
          ${views}
        </div>
      </template>
    `;

  }
});
