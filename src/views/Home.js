import { define, html, router } from 'hybrids';

export const Home = define({
  tag: "home-view",
  name: 'my friend', // property default value. Parameter that is passed in the tag or by the router
  render: ({ name }) => html`
    <h1>Home</h1>
    <p>Hello ${name}!</p>
  `,
});

export default Home;
