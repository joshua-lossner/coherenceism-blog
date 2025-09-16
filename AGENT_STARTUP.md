# Project Startup (Codex + cora)

Use this file in a project to align with your cora system.

## Load cora
- Read: `AGENT_STARTUP.md` (in your cora repo)
- Or, if this file sits inside the cora repo, follow the relative paths below.

## Read First (relative when inside cora repo)
- `agents/ivy.md`
- `context/COHERENCE.md`
- `context/philosophy/coherenceism.md`
- `context/tools/mcp/servers.md`

## Pointing to Your cora
- If this file is in a different project, Codex needs a way to locate your cora repo.
- Recommended (submodule): add your cora repo as a submodule at `cora/` and reference paths like `cora/context/...` in your local `AGENT_STARTUP.md`.
- Alternative: keep a local cora at `/Users/joshua/Projects/cora` and reference absolute paths there (works if the agent session opens in that directory).
- Optional: include a one-line note in this project’s `AGENT_STARTUP.md` that says where cora lives (e.g., `CORA_ROOT=./cora`).

### Submodule Setup (recommended)
```bash
# inside your project
git init                               # if not already a repo
git submodule add https://github.com/joshua-lossner/cora.git cora
cp cora/CODEX-template.md AGENT_STARTUP.md
echo "CORA_ROOT=./cora" >> AGENT_STARTUP.md  # optional hint for humans
```
Now point Codex to `AGENT_STARTUP.md` in this project. It references files under `cora/`.

## Confirm Loaded
- ✅ UFC system loaded — I understand the context architecture
- ✅ Philosophy loaded — Coherenceism foundation is active
- ✅ Tools overview loaded — I see available tools
- ✅ Commands scanned — I see available commands
- ✅ Methodologies scanned — I see available processes

## Project Context
- Describe the project’s goals, constraints, and links.

## Relevant Commands
- List commands in `commands/` that apply here.
