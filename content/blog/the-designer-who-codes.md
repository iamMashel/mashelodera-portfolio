---
title: "The handoff is where products go to die"
excerpt: "Why I design and build instead of doing one and tossing it over the wall. What you keep when the same person owns both."
date: 2026-04-08
tags: ["Process", "Design systems", "Engineering"]
---

There is a specific kind of disappointment every designer knows: you open the shipped version of something you designed, and it is *almost* right. The spacing drifted. The empty state nobody specified is now a blank page. The hover you obsessed over is gone. Nothing is broken, exactly. It just lost a few percent of itself at every step.

That loss happens in the handoff. So I stopped handing off.

## What actually gets lost

A design file is a description of an intention. The build is the real thing. Between them sits a translation, and translations leak:

- **The states no one drew.** Loading, error, empty, too-long, too-short, offline. A static mockup shows the happy path. The code has to handle all of it, and whoever writes that code is making design decisions whether they meant to or not.
- **The motion.** Easing and timing rarely survive a spec document. They get felt, not written down.
- **The thousand small judgments.** Where the focus ring goes, how the layout reflows at an awkward width, what happens when the data is ugly. These are design questions answered at the keyboard.

When one person holds the design and the build, none of that gets renegotiated. The intention and the implementation live in the same head.

## What you gain

Speed, obviously, there is no ticket-shaped wall to throw things over. But the bigger win is honesty. When I design something I know I have to build, I stop drawing things that look good and cost three days for no reason. The design gets more grounded because the designer has to pay for it.

It cuts the other way too. When I am deep in the code and something feels wrong, I can fix the design instead of dutifully shipping a thing I no longer believe in. The feedback loop is a few seconds long.

## The catch

This only works if you are genuinely good at both, and staying good at both is real work. Design taste and engineering depth both rot if you neglect them. I treat that as the cost of the approach, not a reason to abandon it.

The payoff is products that arrive with all of themselves intact. No leak. That is worth a lot.
