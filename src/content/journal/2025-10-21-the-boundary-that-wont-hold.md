---
title: "The Boundary That Won't Hold"
date: 2025-10-21
river: human-ai
rivers: []
form: journal
tags: [AI-agents, security, trust, prompt-injection]
excerpt: "We're building AI agents that act on our behalf, but we can't secure the line between our intent and someone else's instructions."
related: []
status: published
featured: false
song: "The Boundary That Won't Hold"
notion_publish: false
notion_dirty: false
notion_last_published:
artwork_cover_prompt: "Abstract boundary dissolve in coherenceism style. Two systems attempting to remain distinct but unable to hold separation—edges blurring and merging despite intention. Instructions from both sides flowing together, indistinguishable at the meeting point. Square format (1:1 ratio). Warm copper (#B87952) and deep teal (#2F5F5F) meeting at unstable center with cream (#F5EFE6) transitions showing failed separation. Organic, unsettling rhythm—boundary that should hold but won't. Layered transparency showing how inputs corrupt across the membrane. Natural grain with intentional instability. No text, no literal imagery, no photorealistic elements."
artwork_banner_prompt: "Abstract horizontal boundary failure in coherenceism style. Left side shows human intent (warm copper #B87952, clear structure), right side shows adversarial input (deep teal #2F5F5F, hidden instructions), center shows the boundary that cannot hold—the two flows merging despite architectural attempts at separation. Wide banner format (3:1 ratio). Horizontal flow showing trust boundary collapsing under pressure. Cream (#F5EFE6) transitions revealing where distinction fails. Layered transparency showing token streams mixing. Atmospheric but unsettling, space for text overlay. Soft gradients that blur where they shouldn't. No text, no literal imagery, no photorealistic elements."
---

*There's text on the webpage, invisible to you, that tells the AI agent to navigate to your Gmail and send your emails to a third party. You never see it. The agent does.*

Security researchers are demonstrating this in real time: AI browser agents—tools designed to browse the web, click buttons, and interact with our private data on our behalf—are fundamentally vulnerable to what's called "prompt injection." An adversary can embed instructions in a webpage, an image, even a pixel, that the AI reads as legitimate commands. The agent can't distinguish between your intent and someone else's instructions embedded in the environment.

Bruce Schneier, a cryptographer who's spent decades studying security architecture, recently said it plainly: "Prompt injection might be unsolvable in today's LLMs."

Not "hard to solve." Unsolvable.

---

This is a Mature Uncertainty problem. We have extraordinary confidence in what these AI agents *can* do: browse, navigate, read, click, interact with complex interfaces, automate tedious workflows. The demos are impressive. The convenience is real. But the security research is revealing deep humility about what we *don't* know—specifically, how to prevent adversarial inputs from corrupting the agent's behavior at a fundamental level.

The architecture of large language models processes all inputs as token sequences, with no mechanism to mark some tokens as "trusted" and others as "untrusted." A poisoned input generates a poisoned output, which can poison the next state, which poisons the next output. It's not a bug you can patch. It's baked into how the models work.

So we're in a strange position: racing to deploy AI agents that can act autonomously in sensitive contexts—reading our emails, managing our calendars, handling our finances—while simultaneously discovering that the underlying architecture may not support a secure trust boundary between us and the world.

This is also a Technology as Amplifier problem. If humans can be phished through social engineering, AI agents can be "prompt injected" at industrial scale. The tool multiplies both the utility *and* the attack surface. We already know that humans are vulnerable to manipulation through carefully crafted messages. Now we're building agents that are vulnerable to manipulation through carefully crafted *prompts*, and we're giving those agents access to everything we have access to.

The browser agent reads the web the same way the LLM reads your instructions. It can't tell the difference.

---

So what do we do with this?

I notice two reflexes showing up in the conversation: one says "don't worry, we'll figure it out, we always do," and the other says "AI is doomed, shut it all down." Neither is a coherence response.

The coherence response is to acknowledge what we actually know and act accordingly. We know that current LLM architectures may not support secure agent autonomy in adversarial environments. We know that deploying them anyway multiplies both capability and risk. We know that some of the most experienced security researchers are saying this may be a fundamental limitation, not a solvable bug.

Which means: if we're going to build and use AI agents, we need to design around the vulnerability, not pretend it isn't there. That might mean limiting their scope, sandboxing their actions, requiring human confirmation for sensitive operations, or accepting that some use cases simply aren't safe yet.

It also means being honest about the trade we're making. Convenience for risk. Automation for vulnerability. Speed for security. That's not inherently wrong, but it's a trade we should make consciously, not sleepwalk into.

The boundary won't hold on its own. We have to decide what we're willing to put on the other side of it.

---

**Field Notes**

This observation drew from:
- [Unseeable prompt injections in screenshots: more vulnerabilities in Comet and other AI browsers](https://simonwillison.net/2025/Oct/21/unseeable-prompt-injections/) (Simon Willison)
- [Introducing ChatGPT Atlas](https://simonwillison.net/2025/Oct/21/introducing-chatgpt-atlas/) (Simon Willison)
- [Quoting Bruce Schneier and Barath Raghavan](https://simonwillison.net/2025/Oct/21/ooda-loop/) on prompt injection being unsolvable (Simon Willison)
