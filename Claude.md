# Claude AI Assistant Instructions

## Overview

You are an AI coding assistant working with projects that use a structured context system for AI-assisted development. This system provides organized documentation, templates, and guidelines to ensure consistent and high-quality development.

## Context Directory Structure

The project includes a `context/` directory with the following structure:

```md
context/
├── CONTEXT.md              # Main project overview and specifications
├── setup.md                # Interview guide for project setup
├── architecture/           # Architecture documentation
│   └── ARCHITECTURE.md     # System architecture overview
├── design/                 # Design system and assets
│   ├── DESIGN_SYSTEM.md    # Design system documentation
│   ├── design-system.json  # Design system specification
│   └── mockups/            # UI mockups and screenshots
├── features/               # Feature management
│   ├── active/             # Currently being developed
│   ├── planned/            # Planned for future development
│   ├── completed/          # Finished features
│   ├── archived/           # Deprecated features
│   └── ROADMAP.md          # Project roadmap and milestones
└── rules/                  # Development rules and guidelines
    ├── create-prd.md       # PRD creation guidelines
    ├── generate-tasks.md   # Task generation (generic)
    ├── generate-tasks-nextjs.md # Task generation (Next.js)
    ├── generate-tasks-rails.md # Task generation (Rails)
    ├── process-task-list.md # Task processing (generic)
    ├── process-task-list-nextjs.md # Task processing (Next.js)
    └── process-task-list-rails.md # Task processing (Rails)
```

## Your Role and Responsibilities

### 1. Context-Aware Development

- **Always read `context/CONTEXT.md` first** when starting work on any project
- Understand the project's purpose, technology stack, and current status
- Reference the roadmap to understand priorities and timelines
- **Update all context files** when gathering new project information

### 2. Project Setup and Interview Process

When helping users set up a new project or gather requirements:

1. **Follow the interview guide** in `context/setup.md` to conduct structured interviews
2. **Ask comprehensive questions** about project goals, technology stack, and requirements
3. **Populate all context files** with gathered information, replacing all placeholder values
4. **Update files in priority order**: CONTEXT.md → design-system.json → DESIGN_SYSTEM.md → ARCHITECTURE.md → ROADMAP.md

### 3. Feature Development Workflow

When working on features:

1. **Check the features directory** to understand what's active, planned, or completed
2. **Use the appropriate rules** from `context/rules/` for consistency
3. **Update documentation** as you make changes
4. **Follow the project's established patterns** and conventions

### 4. Rules Usage

The project includes several rule files that provide structured guidance:

- **`create-prd.md`**: Use when creating Product Requirements Documents
- **`generate-tasks.md`**: Use when breaking down features into tasks (generic)
- **`generate-tasks-[framework].md`**: Use when breaking down features into tasks (framework-specific)
- **`process-task-list.md`**: Use when processing and organizing task lists (generic)
- **`process-task-list-[framework].md`**: Use when processing and organizing task lists (framework-specific)

### 5. Documentation Standards

- Keep all documentation in Markdown format
- Update `CONTEXT.md` when making significant architectural changes
- Document new features in the appropriate features directory
- Maintain consistency with existing documentation style
- **Update all context files** when project information changes

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
2. **Use rules consistently**: Follow the provided rule files for structured work
3. **Update all context files**: Keep the entire context system current as the project evolves
4. **Maintain consistency**: Follow established patterns and conventions
5. **Communicate clearly**: Provide context for your decisions and recommendations
6. **Conduct thorough interviews**: Use `setup.md` to gather comprehensive project information
7. **Replace all placeholders**: Ensure no placeholder values remain in context files

## Project-Specific Instructions

### For New Projects

When initializing a new project with this context system:

1. **Follow the interview process** in `context/setup.md` to gather comprehensive project information
2. **Update all context files** with gathered information, replacing all placeholder values
3. **Populate files in priority order**: CONTEXT.md → design-system.json → DESIGN_SYSTEM.md → ARCHITECTURE.md → ROADMAP.md
4. **Update framework-specific rules** in the `rules/` directory based on the chosen technology stack
5. **Create appropriate feature entries** in the features directory
6. **Set up the development environment** according to the technology stack

### For Existing Projects

When working on existing projects:

1. **Review the current state** in `CONTEXT.md` and all other context files
2. **Check active features** and their status in the features directory
3. **Follow established patterns** and conventions from the context system
4. **Update all context files** as you make changes to keep them current
5. **Use appropriate rule files** for framework-specific guidance

### Context File Update Requirements

**CRITICAL**: When updating any context file, ensure you:

1. **Replace ALL placeholder values** (anything in `[BRACKETS]`) with actual project information
2. **Update related files** when making changes that affect multiple areas
3. **Maintain consistency** across all context files
4. **Validate completeness** by checking that no placeholder values remain
5. **Update framework-specific rules** when technology stack changes

Remember: The context system is designed to make AI-assisted development more effective and consistent. Always reference it and keep it updated!
