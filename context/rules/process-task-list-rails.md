---
description: Process task lists for Rails projects
globs: ["**/*.{rb,erb,rake}"]
alwaysApply: false
---
# Task List Management (Rails)

Guidelines for managing task lists in markdown files to track progress on completing a PRD for Ruby on Rails projects

## Task Implementation

- **One sub-task at a time:** Do **NOT** start the next sub‑task until you ask the user for permission and they say "yes" or "y"
- **Completion protocol:**  
  1. When you finish a **sub‑task**, immediately mark it as completed by changing `[ ]` to `[x]`.
  2. If **all** subtasks underneath a parent task are now `[x]`, follow this sequence:
  - **First**: Run the full test suite (`bin/rails test` or `rspec`)
  - **Only if all tests pass**: Stage changes (`git add .`)
  - **Clean up**: Remove any temporary files and temporary code before committing
  - **Commit**: Use a descriptive commit message that:
    - Uses conventional commit format (`feat:`, `fix:`, `refactor:`, etc.)
    - Summarizes what was accomplished in the parent task
    - Lists key changes and additions
    - References the task number and PRD context
    - **Formats the message as a single-line command using `-m` flags**, e.g.:

        ```
        git commit -m "feat: add payment validation logic" -m "- Validates card type and expiry" -m "- Adds unit tests for edge cases" -m "Related to T123 in PRD"
        ```

  3. Once all the subtasks are marked completed and changes have been committed, mark the **parent task** as completed.
- Stop after each sub‑task and wait for the user's go‑ahead.

## Task List Maintenance

1. **Update the task list as you work:**
   - Mark tasks and subtasks as completed (`[x]`) per the protocol above.
   - Add new tasks as they emerge.

2. **Maintain the "Relevant Files" section:**
   - List every file created or modified.
   - Give each file a one‑line description of its purpose.

## Rails Specific Guidelines

### File Structure

- Follow Rails MVC architecture
- Models in `app/models/`
- Controllers in `app/controllers/`
- Views in `app/views/`
- Helpers in `app/helpers/`
- Migrations in `db/migrate/`

### Testing

- Use Rails built-in testing framework or RSpec
- Test files alongside source files (e.g., `model.rb` and `model_test.rb`)
- Run tests with `bin/rails test` or `rspec`
- Test models, controllers, and views separately

### Development Commands

- `bin/rails server` - Start development server
- `bin/rails console` - Access Rails console
- `bin/rails test` - Run tests
- `bin/rails routes` - View all routes
- `bin/rails db:migrate` - Run pending migrations

### Best Practices

- Follow Convention over Configuration
- Use strong parameters in controllers
- Implement proper validations in models
- Use before_action callbacks appropriately
- Follow RESTful routing conventions
- Use service objects for complex business logic

## AI Instructions

When working with task lists, the AI must:

1. Regularly update the task list file after finishing any significant work.
2. Follow the completion protocol:
   - Mark each finished **sub‑task** `[x]`.
   - Mark the **parent task** `[x]` once **all** its subtasks are `[x]`.
3. Add newly discovered tasks.
4. Keep "Relevant Files" accurate and up to date.
5. Before starting work, check which sub‑task is next.
6. After implementing a sub‑task, update the file and then pause for user approval.
7. Follow Rails conventions and best practices.
