---
description: Generate tasks for Rails projects
globs: ["**/*.{rb,erb,rake}"]
alwaysApply: false
---
# Rule: Generating a Task List from a PRD (Rails)

## Goal

To guide an AI assistant in creating a detailed, step-by-step task list in Markdown format based on an existing Product Requirements Document (PRD) for Ruby on Rails projects. The task list should guide a developer through implementation using Rails best practices.

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

- `app/models/model_name.rb` - Brief description of why this file is relevant (e.g., Contains the model for this feature).
- `app/models/model_name_test.rb` - Unit tests for model_name.rb.
- `app/controllers/controller_name_controller.rb` - Brief description (e.g., Controller for handling user actions).
- `app/controllers/controller_name_controller_test.rb` - Unit tests for controller.
- `app/views/controller_name/action.html.erb` - Brief description (e.g., View template for displaying data).
- `app/helpers/application_helper.rb` - Brief description (e.g., Helper methods for views).
- `db/migrate/YYYYMMDDHHMMSS_create_table_name.rb` - Database migration for this feature.
- `config/routes.rb` - Route definitions for this feature.

### Notes

- Follow Rails conventions: Convention over Configuration
- Models go in `app/models/` directory
- Controllers go in `app/controllers/` directory
- Views go in `app/views/` directory
- Helpers go in `app/helpers/` directory
- Migrations go in `db/migrate/` directory
- Unit tests should typically be placed alongside the code files they are testing
- Use `bin/rails test` to run tests
- Use `bin/rails server` to start the development server
- Use `bin/rails console` to access Rails console
- Follow RESTful routing conventions

## Tasks

- [ ] 1.0 Parent Task Title
  - [ ] 1.1 [Sub-task description 1.1]
  - [ ] 1.2 [Sub-task description 1.2]
- [ ] 2.0 Parent Task Title
  - [ ] 2.1 [Sub-task description 2.1]
- [ ] 3.0 Parent Task Title (may not require sub-tasks if purely structural or configuration)
```

## Rails Specific Guidelines

- **File Structure:** Follow Rails MVC architecture
- **Models:** Use ActiveRecord associations and validations
- **Controllers:** Use strong parameters and before_action callbacks
- **Views:** Use ERB templates with proper partials
- **Routing:** Follow RESTful conventions
- **Testing:** Use Rails built-in testing framework or RSpec
- **Database:** Use migrations for schema changes
- **Security:** Implement proper authentication and authorization
- **Performance:** Use proper database queries and caching

## Interaction Model

The process explicitly requires a pause after generating parent tasks to get user confirmation ("Go") before proceeding to generate the detailed sub-tasks. This ensures the high-level plan aligns with user expectations before diving into details.

## Target Audience

Assume the primary reader of the task list is a **junior developer** who will implement the feature using Ruby on Rails.
