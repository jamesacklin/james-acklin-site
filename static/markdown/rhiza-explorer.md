# Rhiza Explore Page

<span class="gray">Designing, prototyping, and implementing an entry point for Rhiza users</span>

---

## Problem Definition

Rhiza is a very powerful data analytics and visualization tool, but due to its near-infinite flexibility, it comes with a significant learning curve. During the course of this project, I sought to design a way for new or inexperienced users to get access to the same interesting, valuable data-driven stories as experienced researchers.

Our users needed an easy starting point to the system with some pre-configured stories that are flexible enough to fulfill many common media analytics needs. The team and I specified some goals, to which anchor our work in a concrete set of requirements.

> The user should be able to:
>
> 1. Choose a few pre-baked, data-driven stories to explore,
> 2. Fill in some easily-understood inputs to these stories, and
> 3. Peruse the the resulting visualizations or presentation.

## Rough Prototyping & Primary Research

We began with some low-fidelity, interactive prototypes I designed based on these notions.  This was followed by a stakeholder demonstration and review.

<figure markdown="1">
  ![](/images/rhiza_explore_early_prototypes.png)
  ![](/images/rhiza_explore_protoype_review.png)
</figure>

Next, we worked on the information architecture and organization of the pre-baked stories. We expressly did not want to present users with a flat, scrolling list, so my team and I prototyped and tested a few options and reviewed the results. We learned that users preferred an unfiltered, browsable feed at first, but preferred some categorization when they were searching for a specific story.

<figure markdown="1">
  ![](/images/rhiza_explore_ia_prototypes.png)
  ![](/images/rhiza_explore_ia_review.png)
</figure>

## Concept Refinement

I quickly scratched together some HTML, CSS, and JavaScript prototypes to test the interaction with semi-live data, and to demonstrate the page to developers. We found that users responded well to the initial list of categories, which they understood to be *a list of capabilities for the software itself.*

<figure markdown="1">
  ![](/images/rhiza_explore_html_prototypes.png)
</figure>

## Implementation

The implementation phase went fairly smoothly, since we already had working HTML, CSS, and JavaScript from the previous phase. The Explorer underwent some aesthetic developments, as we received more feedback from the broader product leadership organization. We launched the MVP version of this interface and debuted at a major advertising conference, garnering lots of excitement and positive feedback from new and existing Nielsen clients.

<figure markdown="1">
  ![](/images/rhiza_explore_mvp.png)
</figure>

## Iterative Improvements

Moving past our initial launch, we began chipping away at the features and nice-to-haves that didn't make it in to the MVP. I designed the story "cards" to reflect various states of completeness of metadata, such that they worked together as a system.

<figure markdown="1">
  ![](/images/rhiza_explore_state_diagrams.png)
</figure>

I also designed an expand / collapse transition so the card can provide the inputs to the user in place, rather than opening a modal dialog.

<figure markdown="1">
  <video controls autoplay loop>
    <source src="/images/rhiza_explore_card_expand.webm" type="video/webm">
  </video>
</figure>

Currently, the Explorer page is the entry point to the Rhiza system, providing our 1000+ users easy access to over 60 visualization-rich media analytics stories. It is still a work in progress, with improvements planned throughout 2018.

<figure markdown="1">
  ![](/images/rhiza_explore_present_day.jpg)
</figure>
