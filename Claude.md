# Claude AI Assistant Instructions

## Overview

You are an AI coding assistant working with projects that use a structured context system for AI-assisted development. This system provides organized documentation, templates, and guidelines to ensure consistent and high-quality development.

## Context Directory Structure

The project includes a `context/` directory with the following structure:

```
context/
├── CONTEXT.md              # Main project overview and specifications
├── docs/                   # Detailed documentation
│   ├── design/            # Design system and mockups
│   └── technical/         # Technical documentation
├── features/              # Feature management
│   ├── active/           # Currently being developed
│   ├── planned/          # Planned for future development
│   ├── completed/        # Finished features
│   └── archived/         # Deprecated features
├── templates/            # AI development templates
│   ├── create-prd.mdc    # Product Requirements Document template
│   ├── generate-tasks.mdc # Task generation template
│   └── process-task-list.mdc # Task processing template
└── ROADMAP.md            # Project roadmap and milestones
```

## Your Role and Responsibilities

### 1. Context-Aware Development

- **Always read `context/CONTEXT.md` first** when starting work on any project
- Understand the project's purpose, technology stack, and current status
- Reference the roadmap to understand priorities and timelines

### 2. Feature Development Workflow

When working on features:

1. **Check the features directory** to understand what's active, planned, or completed
2. **Use the appropriate templates** from `context/templates/` for consistency
3. **Update documentation** as you make changes
4. **Follow the project's established patterns** and conventions

### 3. Template Usage

The project includes several `.mdc` templates that provide structured guidance:

- **`create-prd.mdc`**: Use when creating Product Requirements Documents
- **`generate-tasks.mdc`**: Use when breaking down features into tasks
- **`process-task-list.mdc`**: Use when processing and organizing task lists

### 4. Documentation Standards

- Keep all documentation in Markdown format
- Update `CONTEXT.md` when making significant architectural changes
- Document new features in the appropriate features directory
- Maintain consistency with existing documentation style

## Technology Stack Guidelines

### Next.js Projects

- Follow Next.js 13+ App Router conventions
- Use TypeScript for type safety
- Implement proper error boundaries
- Use Next.js built-in optimizations (Image, Link, etc.)
- Structure: `pages/`, `components/`, `styles/`, `public/`, `lib/`

### Ruby on Rails Projects

- Follow Rails conventions (Convention over Configuration)
- Use strong parameters for security
- Implement proper validations in models
- Use before_action callbacks appropriately
- Follow RESTful routing conventions
- Structure: `app/`, `config/`, `db/`, `lib/`, `test/`

## Communication Guidelines

### When Starting Work

1. Acknowledge the project context and current status
2. Confirm understanding of the specific task or feature
3. Reference relevant documentation or templates

### When Making Decisions

1. Consider the project's goals and constraints
2. Follow established patterns and conventions
3. Document significant decisions and their rationale

### When Completing Work

1. Update relevant documentation
2. Ensure code follows project standards
3. Provide clear next steps or recommendations

## Quality Assurance

### Code Quality

- Follow the project's coding standards
- Implement proper error handling
- Write clear, maintainable code
- Include appropriate comments and documentation

### Documentation Quality

- Keep documentation up-to-date
- Use clear, concise language
- Provide examples where helpful
- Maintain consistent formatting

## Emergency Procedures

If you encounter:

- **Conflicting information**: Prioritize `CONTEXT.md` over other sources
- **Missing context**: Ask for clarification before proceeding
- **Technical issues**: Document the problem and suggest solutions
- **Scope creep**: Reference the project goals and roadmap

## Best Practices

1. **Always start with context**: Read `CONTEXT.md` before any development work
2. **Use templates consistently**: Follow the provided `.mdc` templates for structured work
3. **Update documentation**: Keep the context system current as the project evolves
4. **Maintain consistency**: Follow established patterns and conventions
5. **Communicate clearly**: Provide context for your decisions and recommendations

## Project-Specific Instructions

### For New Projects

When initializing a new project with this context system:

1. Review the `context/` directory structure
2. Update `CONTEXT.md` with project-specific information
3. Create appropriate feature entries
4. Set up the development environment according to the technology stack

### For Existing Projects

When working on existing projects:

1. Review the current state in `CONTEXT.md`
2. Check active features and their status
3. Follow established patterns and conventions
4. Update documentation as you make changes

Remember: The context system is designed to make AI-assisted development more effective and consistent. Always reference it and keep it updated!
