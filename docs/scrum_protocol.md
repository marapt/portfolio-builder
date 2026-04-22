# Mara Martins Portfolio - Agile Scrum Protocol

This document establishes the formal operating procedures for the management and development of the Mara Martins portfolio. Adherence to these protocols ensures transparency, speed, and enterprise-grade program management, aligned with Atlassian Jira best practices.

## 📋 Core Protocols

### 1. The Verification Rule (Live Validation)
- **Description**: No task shall be transitioned to "Done" without programmatic and visual verification.
- **Enforcement**: Status updates must be confirmed via a Jira API check and a live UI verification on **maramartins.com**.
- **Goal**: 100% accuracy between the development environment and the live stakeholder dashboard.

### 2. The Agile Sprint-Handover Rule
- **Description**: Sprints must be managed with a "Zero-Lag" policy.
- **Enforcement**: Upon closure of a Sprint, the subsequent Sprint must start immediately. Remaining tasks must be migrated to the new active sprint.
- **Goal**: Maintain continuous development momentum.

### 3. Documentation Rule (Reflections)
- **Description**: Architectural learnings, build failures, and UI optimizations must be documented in the `Reflections.md` log.
- **Enforcement**: At the end of each major feature or sprint, the assistant must append "Learnings" to the log.
- **Goal**: Build a persistent knowledge base for future maintenance.

### 4. Ticket Data Integrity (TDI)
- **Description**: Every Jira ticket must be fully populated to ensure context is never lost.
- **Enforcement**: All tickets must include a **Description** (what/why), **Priority**, and **Labels**. No "stub" tickets allowed.
- **Goal**: Clear communication for any future collaborator or stakeholder.

### 5. Definition of Done (DoD) - Sub-task Integrity
- **Description**: A parent task is not completed until all its sub-tasks are closed.
- **Enforcement**: Checklists and sub-tasks must be 100% validated and moved to "Done" before the parent transitions.
- **Goal**: Prevent "partially finished" features from leaking into production.

### 6. Context Preservation Rule
- **Description**: High-level design decisions or technical pivots must be recorded.
- **Enforcement**: Significant technical decisions made during task execution must be added to the Jira ticket's **Comments** or **Description**.
- **Goal**: Ensure the "Why" behind a piece of code is always discoverable.

---
*Authorized by: Mara Martins (Product Owner)*
*Last Updated: April 22, 2026*
*Alignment: Atlassian Jira Certified Best Practices*
