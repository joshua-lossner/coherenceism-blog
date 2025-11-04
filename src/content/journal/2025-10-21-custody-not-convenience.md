---
title: "Custody, Not Just Convenience"
date: 2025-10-21
river: agency
rivers: []
form: journal
tags: [infrastructure, self-hosting, agency, control]
excerpt: "Managed services promise to handle everything for you. Sometimes the real cost is what you can't see until it's already gone."
related: []
status: published
featured: false
song: "Take Custody"
notion_publish: false
notion_dirty: false
notion_last_published:
artwork_cover_prompt: "Abstract layered infrastructure in coherenceism style. Two parallel systems: one with clear, solid root structure (self-hosted foundation) and one with fading, abstracted layers above (managed services dissolving upward). Central anchor point showing deliberate choice. Square format (1:1 ratio). Warm clay (#C4856C), deep soil (#4A3626), stone gray (#9B9B8C) foundation with living gold (#D4A574) and terracotta (#B87952) accents at decision points. Clear structure with organic growth, some layers sharp and controlled, others soft and delegated. Moderate contrast for agency clarity. Natural grain texture. No text, no literal imagery, no photorealistic elements."
artwork_banner_prompt: "Abstract horizontal infrastructure transition in coherenceism style. Left side shows solid, visible foundation layers (self-hosted clarity), gradually transitioning rightward into abstracted, fading managed layers. Wide banner format (3:1 ratio). Horizontal flow showing migration and choice, with breathing space between systems. Warm clay (#C4856C), deep soil (#4A3626), stone gray (#9B9B8C) with living gold (#D4A574) and terracotta (#B87952) highlights at transition points. Layered transparency showing what's controlled vs. what's delegated. Atmospheric, space for text overlay. Natural grain with deliberate structure. No text, no literal imagery, no photorealistic elements."
---

*Managed services promise to handle everything for you. Sometimes the real cost is what you can't see until it's already gone.*

Two stories landed in my feed this week, and they're the same story.

First: someone migrated their nonprofit from a $3000/month Heroku bill to a $55/month self-hosted server. Same functionality, same uptime, 98% cost reduction. The only difference was deciding to take custody of the infrastructure instead of renting convenience.

Second: Simon Willison discovered that Claude Code—the AI coding assistant—stores detailed logs of every session you run. Full transcripts of your problem-solving, your thought process, your collaboration with the AI. Hundreds of megabytes of records. And by default, the tool deletes all of it after 30 days. You can change one config value and keep it forever. But you have to know to look.

Both stories are about the same choice: Do you want convenience, or do you want custody?

Managed services sell you on not having to think about the details. Heroku handles deployment, scaling, security patches. Claude Code handles log rotation. You just use the thing, and someone else worries about the infrastructure. That's the pitch, and it's real—until you realize what you've handed over.

In the first case, it's $36,000 a year. In the second, it's the archive of how you think. Neither cost is visible until you go looking. The monthly bill becomes normal. The logs disappear before you knew you wanted them. And the structure of the service makes it easy to never ask the question: *What am I actually paying for this? What am I losing by not controlling it?*

This is the *Alignment over Force* principle. You're not fighting against managed services—they solve real problems. But you also don't have to accept their defaults as inevitable. Self-hosting isn't about rejecting convenience; it's about asking whether the convenience is aligned with your actual needs, or whether you're paying (in money, data, or control) for someone else's business model.

The Heroku migration wasn't about heroic system administration. It was about recognizing that the workload didn't need the abstraction layer Heroku was charging for. A single server, maintained with reasonable care, could handle it. The move took effort up front, but now that capability is permanent. No monthly extraction. No one else deciding when to raise prices or deprecate features.

The Claude Code config change took thirty seconds. But only if you know it exists. Only if you think to look. Only if you've decided that your session logs—records of *how you solve problems*—are worth keeping. The default assumes they're disposable. You have to claim custody deliberately.

There's a second principle here: *Build Once, Use Forever*. Infrastructure you control becomes a permanent capability. You pay the migration cost once, and then it's yours. The self-hosted server isn't just cheaper per month—it's an asset that stops costing you after the initial setup. The preserved logs aren't just data—they're aearchive of your own thinking that you can revisit, learn from, build on.

Managed services invert this. You rent forever. The cost never stops. And when the service changes its terms, deprecates a feature, or shuts down entirely, you're starting over.

I'm not saying every managed service is a bad trade. Sometimes you genuinely need the abstraction, the scale, the support team. Sometimes self-hosting doesn't make sense for your context. But the decision should be *yours*, based on your actual constraints—not a default you inherited because the onboarding tutorial made it easy.

The pattern I keep seeing: we adopt tools for their convenience, then discover years later that we've been paying costs we didn't choose and didn't notice. The bill that's "just how it is." The data that's gone because we didn't know we could keep it. The dependency that seemed fine until we realized we couldn't change it.

Custody means knowing what you're trading, and deciding consciously. It doesn't mean doing everything yourself. It means asking: What do I actually need? What am I paying for this, in all the currencies that matter? And is there a version where I control the thing I depend on?

Sometimes the answer is still "use the managed service." But sometimes the answer is: change one config line and keep your logs. Or spend a weekend migrating to a server that costs $55 instead of $3000. Or just *know* what you're trading, so the choice is deliberate instead of inherited.

The infrastructure is working for someone. Make sure it's working for you.

---

**Field Notes**

This observation drew from:
- [Replacing a $3000/mo Heroku bill with a $55/mo server](https://disco.cloud/blog/how-idealistorg-replaced-a-3000mo-heroku-bill-with-a-55-server/) (Hacker News)
- [Don't let Claude Code delete your session logs](https://simonwillison.net/2025/Oct/22/claude-code-logs/) (Simon Willison)
- [OpenBSD 7.8 Released](https://www.openbsd.org/78.html) (Hacker News, Lobsters)
