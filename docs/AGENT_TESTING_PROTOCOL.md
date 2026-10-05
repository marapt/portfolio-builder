# Agentic Testing Protocol: Automated Browser Audits

## Overview
As part of the **Stellar Agentic QA Suite**, the AI Agent (Antigravity) utilizes a specialized **Browser Subagent** (often referred to as "Lucas" in our workflows) to perform end-to-end (E2E) functional testing. This document outlines how these automated audits are executed, where they run, and the technical architecture behind them.

---

## 1. Where the Testing Agents Run
The Browser Subagent does **not** run on your local machine, nor does it run on your production hosting environments (Vercel/Render). 

Instead, it operates within an **Isolated AI Sandbox Engine** provided by the Antigravity infrastructure. 
- **The Engine**: It spins up an ephemeral, headless (invisible) instance of Chromium.
- **The Network**: The sandbox accesses the public internet to reach your production URLs (e.g., `https://maramartins.com`).
- **The Execution**: Once the test is complete, the entire virtual browser environment is destroyed to maintain zero state and ensure a clean environment for the next audit.

---

## 2. How the Agent Executes a Test
When an automated browser audit is requested, the primary AI agent triggers a sub-process. The workflow follows these steps:

### Phase 1: Test Initialization
1. **Task Definition**: The primary AI agent writes a detailed, step-by-step instructional prompt (the "Test Plan"). Example: *"Navigate to /dashboard, click the Audit button, drag a selection box over the banner..."*
2. **Subagent Launch**: A `browser_subagent` tool call is executed, spinning up the headless Chromium instance in the AI Sandbox.

### Phase 2: Execution & Visual Processing
3. **DOM Parsing**: The subagent reads the webpage's Document Object Model (DOM) to understand the structure.
4. **Visual Mapping**: The subagent relies on internal accessibility trees and bounding boxes to "see" where elements are on the screen.
5. **Action Simulation**: The subagent dispatches actual hardware-level events (mouse clicks, drag-and-drop, keyboard typing) rather than just triggering JavaScript functions. This simulates a real human user.

### Phase 3: Reporting & Teardown
6. **Assertion**: The subagent checks if the expected outcome occurred (e.g., "Did the Jira success message appear?").
7. **Artifact Generation**: The subagent logs its findings and automatically records a `.webp` video of its session for debugging purposes.
8. **Teardown**: The Chromium process is terminated, and the final report is passed back to the primary AI agent.

---

## 3. Known Limitations & Troubleshooting
Because the Browser Subagent relies on a highly complex, ephemeral sandbox, infrastructure errors can occasionally occur.

### The "EOF / Protocol Padding" Error
**Error Log**: `target closed: could not read protocol padding: EOF`
**Meaning**: This is an infrastructure-level crash. It indicates that the headless Chromium browser within the AI Sandbox abruptly terminated or lost its debug connection before the webpage could finish loading.
**Resolution**: This is an internal environment failure, entirely disconnected from the quality or stability of the user's codebase. The only resolution is to wait for the sandbox resources to stabilize and re-run the test, or to fall back to standard code-based unit/integration tests.

---

## 4. Integration with Jira (PJM Workflow)
Whenever the subagent detects an anomaly that violates the expected behavior (e.g., a broken link or a failing annotation submission), the primary AI agent automatically translates that finding into a bug report and pushes it directly to the connected Jira Scrum Board via the backend Python API. 

This creates a seamless loop: **AI Tests -> AI Reports -> Jira Ticket -> Human/AI Resolution.**
