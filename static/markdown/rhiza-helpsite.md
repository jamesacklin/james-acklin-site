::: content
# Rhiza Help Documentation

<span class="gray">Making Rhiza's help documentation process more collaborative</span>

---

## Problem Definition

The current Rhiza documentation site was authored and deployed by a single author as a stopgap solution during a time of rapid development in the company, which metastasized into a semi-permanent archive of all things Rhiza. Upon Nielsen's acquisition of Rhiza, the site developed multiple audiences—Nielsen clients and internal folks both needed access to the same level of detailed documentation.

In order ensure Rhiza's documentation remained up-to-date for all users, I helped form a group of contributors who agreed to help our users by proactively documenting Rhiza's user interface as it changes. However, the single-authorship publishing model posed a significant hurdle to contributors.

The site was developed in an expensive Windows documentation software solution, and all of Rhiza's documentation was locked away in a proprietary format. Training a team of 5 to use this documentation software posed an expensive and time-consuming challenge—not only would it be costly to license the software itself, each contributor would need to run a Windows Virtual Machine on their computer.

:::

::: figure
## Existing Workflow Diagram

![](/images/helpsite-process-single.png)
:::

::: content
Not only was the authorship model a challenge, preserving the existing order required each contributor to follow a detailed checklist of fairly technical steps with a large penalty for error. Furthermore, ultimately deploying the built site was beholden to an dev/ops engineer's schedule and interest.

Ultimately, this complex process was a non-starter for most of the team, blocking them from accomplishing their primary goal of writing and publishing Rhiza's documentation.

## Proposed Workflow

The team and I worked some positive statements that would guide our work and give us some goals to work toward.

* Using a Contributor model, everyone is responsible and can contribute
* People should only need to learn what they need to know to contribute
* We should eliminate platform-specific tooling or proprietary commercial solutions
* Migrate locked-format content to open, plain-text document format
* Keep the entire project web-based—no desktop tooling
* Use free or low-cost tools to avoid contract lock-in
* Abstract or automate as much technical plumbing as possible
* Keep the project "in-house:" anyone on the team can deploy
* Train contributors on the basic Github Pull Request workflow, which is extensible to other career paths
:::

::: figure
![](/images/helpsite-process-multi.png)
:::

::: content
## Solution Auditing

The team and I conducted a survey of a few static site generators and CMS-as-a-service offerings. We ultimately decided to maintain our own build infrastructure and host our code on Github, along with the main Rhiza source code.
:::

::: figure
![](/images/helpsite-generators.png)
![](/images/helpsite-deploys.png)
:::

::: content
## Implementation

Transforming a flat list of ~150 articles in a proprietary format to a nested hierarchy of Markdown files was tedious, but `pandoc` was my close friend. Once the content was in order, [Vuepress](https://vuepress.vuejs.org/) was relatively easy to get up and running, and the [default theme configuration](https://vuepress.vuejs.org/default-theme-config/) is straightforward and was perfectly adaptable to our needs.

The only real difficulty was engineering a Jenkins solution using Docker, but since there's no database per se, the site builds stably and reliably, triggered by checkin on the help site's `master` branch.
:::

::: content
## Result

As a result, Rhiza now has an up-to-date documentation site, built atop open formats, and generated using open-source tools on our own infrastructure. Team members regularly update the site with each release, and clients can find help articles relating to their specific issue.
:::

::: figure
<img src="/images/help-screenshot-home.png" class="shadow-2 w-80-m w-80-l" />
:::

::: content
## Future Work

Our data and development teams are slowly building more automated content integrations into their processes, such that as the application changes, the documentation automatically evolves along with it. Examples of such integrations include using [Storybook](https://storybook.js.org/)-authored components with docstrings, and updating data documentation files during ETL workflows.
:::
