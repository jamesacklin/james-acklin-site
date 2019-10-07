---
title: Rhiza User Bifurcation
description: Adapting a general-purpose research toolkit to new users and markets
company: The Nielsen Company
role: UX Designer, Protoype Developer
time: 3 months
team: Broad organizational support
tools: Sketch, Principle, Vue.js
image: rhiza_explore_present_day.jpg
order: 1
---

Upon acquisition in 2017, Rhiza's general-purpose analytics product needed to serve the research needs of local TV & radio stations and networks. Nielsen wished to aggressively protect against revenue erosion to lower-priced competitors and turned to the newly-acquired Rhiza team for help. Our goal was to bring the simplicity of repeatable market research tools to local markets using the system we had built.

We proposed targeting two different groups of users, introducing "Creator" and "Consumer" roles. The objective was to mask off just enough complexity and provide a refined workflow for "Consumer" users, while enhancing expressive power and publishing capabilities for "Creator" users. Along the way, we would develop a syndication model of pre-built research stories for "Consumer" users to subscribe to—thus creating a new revenue stream for Nielsen in local markets.

<div>
  <Figure src="rhiza_bifurcation_scale.png" 
          alt="A diagram showing users' familiarity with Rhiza and the anticipated uses for Templates" 
          caption="→ Based on stakeholder interviews and early feedback with existing Nielsen customers, we proposed introducing two primary roles, which would give us adequate coverage for many different personas." />
</div>

<div>
  <Figure src="rhiza_template_improvements.png" 
          alt="Research findings and several proposed features to provide backfill support for new user personas" 
          caption="→ Summarized research findings and proposed a suite of features for validation. These features were designed to gear the system to users without time or budget to invest in a technical research workflow.<br><br>These features expanded the capabilities of the existing &ldquo;Template&rdquo; infrastruture to enable the creation of simple, custom interfaces." />
</div>

We wanted to validate both the positioning of the product and this new, bifurcated user model. I created a few diagrams quickly showing the feature surface area each user class would cover. I validated this with potential users and subject-matter experts.

<div>
  <Figure src="rhiza_user_capabilities.png" 
          alt="Diagrams depicting two different user flows through the Rhiza system" 
          caption="→ Created user-focused capability diagrams for socializing the bifrucation concept and laying out the template publishing / consumption model.<br><br>→ Mocked up an extremely low-fidelity cartoon prototype and validated this workflow with potential users." />
</div>

I also conducted an academic exercise exploring various ways people tend to browse feeds of information, and proposed several ways of "chunking" the interface up to avoid both nesting menu options to excessive depths  _and_ presenting users with a wall of indiscernable chaos.

This was an important step for developing our pre-fabricated research stories. Rhiza needed carefully manage a curated feed, which was new territory for both us and our acquiring Nielsen team.

<div>
  <Figure src="rhiza_explorer_ia.png" 
          alt="A slide deck from a review of information architecture approach for browsing a feed of like bits of content" 
          caption="→ Researched and applied an approach enabling discovery and recognition in a feed of published Templates, dubbed the &ldquo;Explorer.&rdquo;" />
</div>

<div>
  <Figure src="rhiza_ia_test.png" 
          alt="A screenshot showing an interactive feed prototype in Principle." 
          caption="→ Tested information architecture and interaction model with several user proxies." /> 
</div>

I supported implementation by first prototyping the interface in the browser using Vue.js, then passing the prototype off to engineering when product leaders were satisfied with both visual and interactive elements. I then pivoted to creating traditional interaction design artifacts such as flow diagrams and wireframes.

<div>
  <Figure src="rhiza_explorer_phases.png"
          alt="Screenshots of various stages of the Rhiza Explorer."
          caption="→ Constructed initial in-browser  prototypes with Vue.js.<br><br>→ Iterated with visual designer and product owners to land on a non-standard, uniquely non-corporate visual style.<br><br>→ Assisted with final implementation in production Angular application." />
</div>

<div>
  <Figure src="rhiza_template_interfaces.png" 
          alt="Wireframes and diagrams depicting Template cards, sharing interactions, and publishing workflow." 
          caption="→ Developed information design diagrams, interface mockups, and visual guidelines for Template &ldquo;Cards.&rdquo;<br><br>→ Created system architecture drawings to illustrate Creator-to-Consumer publishing mechanism." />
</div>

### Outcomes

The newly-adapted Rhiza product generated $5m annual recurring revenue for Nielsen with ~100 local TV & radio clients (~1,200 individual users). Rhiza's Template creation and publishing model led to formation of Media Analytics' Dashboard team, a team of 5 analysts creating valuable custom end-solutions for clients. These efforts also began critical conversations within Media Analytics about "always-on" solutions and the value of delivering software over services.