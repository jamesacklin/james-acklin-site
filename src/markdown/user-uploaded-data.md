---
title: User-Uploaded Data in Rhiza
description: Enabling new use-cases for Rhiza at Nielsen
company: The Nielsen Company
role: UX Designer, Protoype Developer, Front-End Developer
time: 3 months
team: 3-person engineering team + product leadership
tools: Sketch, Vue.js (prototype), Angular (implementation)
image: rhiza_user_data.png
order: 2
---

One of Rhiza's early key differentiators was that users could bring their own datasets and analyse them alongside bigger, syndicated datasets using the same tools. These datasets could be from private collection, exports from other tools, or really anything that fit in a CSV file. This feature proved to be useful for Nielsen Media Analytics analysts, as they frequently used Rhiza as a central clearinghouse for frequently-updated, custom data delivery for clients. These user-contributed datasets were represented as single tables, generated from a single CSV file.

As Rhiza's importance in the Media Analytics offering suite grew, analysts needed to conduct rolling updates to datasets in Rhiza without duplicative visualization work. As a result, we introduced a "dataset" structure, composed of multiple underlying files. We designed several rules for the system to produce a composite dataset of several files, and allowed users to manage datasets they created.

User-contributed data was always a focus area for usability and feature improvements, but usually took a backseat to more pressing issues of technical debt. I had investigated improving the usability of the feature several times—once in March 2015, then again in February 2016.

<div>
  <Figure src="rhiza_user_data_preamble.png" 
          alt="Diagram outlining usability improvements to user-uploaded dataset interface in Rhiza." 
          caption="→ Began as exploratory concept in March 2015, revisited in February 2016." />
</div>

Based on some interviews with Media Analytics analysts, I constructed a few diagrams outlinign how the system should behave from a user-interaction perspective.

<div>
  <Figure src="rhiza_user_data_flow.png" 
          alt="" 
          caption="→ Quickly diagrammed interface to test model and validate overall physics." />
</div>

I then collaborated directly with engineering to create operational diagrams of several usage scenarios to better design an interface aligned with users' mental models. We also outlined exactly how the system should behave in each of these given scenarios with the explicit understanding that the interface should abstract atop these operations and provide a seamless experience. These scenarios eventually became implementation stories and test cases.

<div>
  <Figure src="rhiza_user_data_operation.png" 
          alt="" 
          caption="→ Generated a detailed abstract talking through each scenario and articulating how the system should respond. This proved to be later useful for quality assurance, generating training and onboarding materials, and writing tests for the new feature." />
</div>

With the technical underpinnings in place, I mocked up the new dataset editor in the browser using Vue.js. We wanted to move quickly, so it was easy to lay out the interface, add styling and animations, and define component states directly in the browser. We then validated this prototype with users, stakeholders, and anyone who wanted to give their input to the feature's development.

Prototyping in the browser also made it easy to define design requirements directly on element DOM nodes and display them with a guided walkthrough. This effectively described the relationship between various component states and communicated the interface's intent, reducing friction and surprise later in the development process.

<div>
  <Figure src="rhiza_user_data_prototype.png" 
          alt="" 
          caption="→ Prototyped interface in JS to communicate and test interaction." />
</div>

<div>
  <Figure src="rhiza_user_data_meta.png" 
          alt="" 
          caption="→ Added meta-markup layer in later versions of prototype to demonstrate and clarify design requirements in situ." />
</div>


### Outcome

With this feature, Media Analytics analysts constructed and delivered on-the-fly updates to dashboards for Nike, Facebook, and other high-profile, high-value clients. Thanks to our design-in-code approach, we cut implementation time nearly in half, beating our sprint estimates and making our product managers very happy.

This feature also opened new use-cases for Rhiza within Nielsen as a general-purpose analytics delivery platform and began some strategic conversations about programmatic addressability.