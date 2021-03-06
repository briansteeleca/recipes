---
title: 'How is Sapper different from Next.js?'
slug: 'how-is-sapper-different-from-next'
---

[Next.js](https://github.com/zeit/next.js) is a React framework from [Zeit](https://zeit.co), and is the inspiration for Sapper. There are a few notable differences, however:

-*   It's powered by [Svelte](https://svelte.dev) instead of React, so it's faster and your apps are smaller
-*   Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is `src/routes/recipesblog/[slug].svelte`
-*   As well as pages (Svelte components, which render on server or client), you can create _server routes_ in your `routes` directory. These are just `.js` files that export functions corresponding to HTTP methods, and receive Express `request` and `response` objects as arguments. This makes it very easy to, for example, add a JSON API such as the one [powering this very page](recipesblog/how-is-sapper-different-from-next.json)
-*   Links are just `<a>` elements, rather than framework-specific `<Link>` components. That means, for example, that [this link right here](recipesblog/how-can-i-get-involved), despite being inside a blob of HTML, works with the router as you'd expect.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2NDU0ODkzNzNdfQ==
-->