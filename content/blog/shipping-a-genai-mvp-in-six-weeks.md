---
title: "Shipping a GenAI MVP in six weeks"
excerpt: "What I cut, what I kept, and how I kept a document-automation tool honest under a tight deadline."
date: 2026-03-02
tags: ["AI", "MVP", "Case notes"]
---

Six weeks is enough time to build a real GenAI product if you are ruthless about what it is *not*. Here are the notes from doing exactly that on a document workflow tool, where teams upload files and get reviewable, ready-to-run actions back.

## Start from the question, not the feature list

The product had to answer one thing on load: what needs my attention right now? Everything else was secondary. So the first screen became a command center, a handful of status tiles and two recent-activity lists, and that constraint did a lot of design work for free. When you know the one question, you know what to cut.

## Grounding before generation

The temptation with any AI MVP is to ship the impressive demo, the open-ended chat that does anything. I went the other way. Every answer is retrieved against the user's own uploaded documents, so the system is useful and honest from day one instead of dazzling and unreliable. Narrow and trustworthy beats broad and hand-wavy, especially in week one.

## Put a human in the loop on purpose

Automations generate a preview and then stop, waiting for a person to approve. This was not a limitation I apologized for, it was the feature. It is what makes an ops team comfortable letting software touch their work at all. Designing the approval surface well mattered more than adding a fifth capability.

## What got cut

Plenty, and on purpose:

- Bulk ingestion. The architecture allows it; the MVP did not need it.
- Role-based permissions. Real for v2, noise for v1.
- Anything that looked like a settings maze.

Every one of those was a real request. Saying "not yet" to good ideas is most of what shipping on time actually is.

## The result

A tool that takes a stack of files and returns reviewed, ready-to-run actions in a single session, built in six weeks because the scope stayed honest. The fastest way to ship is to be clear about the smallest thing that is genuinely useful, then build that thing properly.
