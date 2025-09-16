# Project Startup (Codex + PAI)

Use this file in a project to align with your PAI system.

## Load PAI
- Read: `AGENT_STARTUP.md` (in your PAI repo)
- Or, if this file sits inside the PAI repo, follow the relative paths below.

## Read First (relative when inside PAI repo)
- `context/CLAUDE.md`
- `context/projects/personal/CLAUDE.md`
- `context/tools/mcp/servers.md`

## Pointing to Your PAI
- If this file is in a different project, Codex needs a way to locate your PAI repo.
- Recommended (submodule): add your PAI repo as a submodule at `pai/` and reference paths like `pai/context/...` in your local `AGENT_STARTUP.md`.
- Alternative: keep a local PAI at `~/.claude` and reference absolute paths there (works if the agent session opens in that directory).
- Optional: include a one-line note in this project’s `AGENT_STARTUP.md` that says where PAI lives (e.g., `PAI_ROOT=./pai`).

### Submodule Setup (recommended)
```bash
# inside your project
git init                               # if not already a repo
git submodule add https://github.com/joshua-lossner/PAI.git pai
cp pai/CODEX-template.md AGENT_STARTUP.md
echo "PAI_ROOT=./pai" >> AGENT_STARTUP.md  # optional hint for humans
```
Now point Codex to `AGENT_STARTUP.md` in this project. It references files under `pai/`.

## Confirm Loaded
- ✅ UFC system loaded — I understand the context architecture
- ✅ Personal context loaded — I know your preferences
- ✅ Tools overview loaded — I see available tools
- ✅ Commands scanned — I see available commands
- ✅ Methodologies scanned — I see available processes

## Project Context
- Describe the project’s goals, constraints, and links.

## Relevant Commands
- List commands in `commands/` that apply here.
