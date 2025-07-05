---
description: Generate tasks for Next.js projects
globs: ["**/*.{ts,tsx,js,jsx}"]
alwaysApply: false
---
# Rule: Generating a Task List from a PRD (Next.js)

## Goal

To guide an AI assistant in creating a detailed, step-by-step task list in Markdown format based on an existing Product Requirements Document (PRD) for Next.js projects. The task list should guide a developer through implementation using Next.js best practices.

## Output

- **Format:** Markdown (`.md`)
- **Location:** `/tasks/`
- **Filename:** `tasks-[prd-file-name].md` (e.g., `tasks-prd-user-profile-editing.md`)

## Process

1. **Receive PRD Reference:** The user points the AI to a specific PRD file
2. **Analyze PRD:** The AI reads and analyzes the functional requirements, user stories, and other sections of the specified PRD.
3. **Phase 1: Generate Parent Tasks:** Based on the PRD analysis, create the file and generate the main, high-level tasks required to implement the feature. Use your judgement on how many high-level tasks to use. It's likely to be about 5. Present these tasks to the user in the specified format (without sub-tasks yet). Inform the user: "I have generated the high-level tasks based on the PRD. Ready to generate the sub-tasks? Respond with 'Go' to proceed."
4. **Wait for Confirmation:** Pause and wait for the user to respond with "Go".
5. **Phase 2: Generate Sub-Tasks:** Once the user confirms, break down each parent task into smaller, actionable sub-tasks necessary to complete the parent task. Ensure sub-tasks logically follow from the parent task and cover the implementation details implied by the PRD.
6. **Identify Relevant Files:** Based on the tasks and PRD, identify potential files that will need to be created or modified. List these under the `Relevant Files` section, including corresponding test files if applicable.
7. **Generate Final Output:** Combine the parent tasks, sub-tasks, relevant files, and notes into the final Markdown structure.
8. **Save Task List:** Save the generated document in the `/tasks/` directory with the filename `tasks-[prd-file-name].md`, where `[prd-file-name]` matches the base name of the input PRD file (e.g., if the input was `prd-user-profile-editing.md`, the output is `tasks-prd-user-profile-editing.md`).

## Output Format

The generated task list _must_ follow this structure:

```markdown
## Relevant Files

- `app/components/ComponentName.tsx` - Brief description of why this file is relevant (e.g., Contains the main component for this feature).
- `app/components/ComponentName.test.tsx` - Unit tests for ComponentName.tsx.
- `app/api/route.ts` - Brief description (e.g., API route handler for data submission).
- `app/api/route.test.ts` - Unit tests for API route.
- `lib/utils/helpers.ts` - Brief description (e.g., Utility functions needed for calculations).
- `lib/utils/helpers.test.ts` - Unit tests for helpers.ts.
- `types/index.ts` - TypeScript type definitions for this feature.

### Notes

- Use Next.js 13+ App Router structure: `app/` directory for pages and API routes
- Components should be in `app/components/` or `components/` directory
- API routes go in `app/api/` directory
- Utility functions belong in `lib/` directory
- Use TypeScript for type safety
- Unit tests should typically be placed alongside the code files they are testing
- Use `npm test` or `npm run test` to run tests
- Use `npm run dev` to start the development server
- Follow Next.js conventions for file naming and structure

## Tasks

- [ ] 1.0 Parent Task Title
  - [ ] 1.1 [Sub-task description 1.1]
  - [ ] 1.2 [Sub-task description 1.2]
- [ ] 2.0 Parent Task Title
  - [ ] 2.1 [Sub-task description 2.1]
- [ ] 3.0 Parent Task Title (may not require sub-tasks if purely structural or configuration)
```

## Next.js Specific Guidelines

- **File Structure:** Follow Next.js 13+ App Router conventions
- **Components:** Use functional components with hooks
- **Styling:** Use CSS Modules, Tailwind CSS, or styled-components
- **Data Fetching:** Use Server Components, Client Components, or API routes as appropriate
- **State Management:** Use React hooks (useState, useEffect, useContext) or external libraries
- **Testing:** Use Jest and React Testing Library
- **TypeScript:** Use strict TypeScript configuration
- **Performance:** Implement proper loading states, error boundaries, and optimizations

## Interaction Model

The process explicitly requires a pause after generating parent tasks to get user confirmation ("Go") before proceeding to generate the detailed sub-tasks. This ensures the high-level plan aligns with user expectations before diving into details.

## Target Audience

Assume the primary reader of the task list is a **junior developer** who will implement the feature using Next.js.
