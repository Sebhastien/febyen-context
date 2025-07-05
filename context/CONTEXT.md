# Project Context

## Project Overview

- **Project Name**: febyen-context
- **Version**: 1.0.0
- **Last Updated**: 2024-07-05
- **Status**: Active Development

## Purpose & Vision

febyen-context is a CLI tool designed to initialize project context for AI-assisted development. The tool creates a structured context system that helps AI assistants understand projects and provide more effective development support. It supports multiple frameworks including Next.js and Ruby on Rails, with framework-specific templates, rules, and guidelines.

## Key Stakeholders

- **Product Owner**: Sebastien
- **Technical Lead**: Sebastien
- **Target Users**:
  - Developers using AI assistants for development
  - Teams working on Next.js projects
  - Teams working on Ruby on Rails projects
  - Developers seeking structured project context

## Technology Stack

- **CLI Framework**: Node.js with Commander.js
- **Package Manager**: npm
- **Dependencies**:
  - commander (CLI argument parsing)
  - chalk (colored console output)
  - inquirer (interactive prompts)
  - fs-extra (enhanced file system operations)
- **Testing**: Jest (planned)
- **Documentation**: Markdown

## Architecture Overview

The CLI tool follows a modular architecture with:

- **Core CLI Logic**: Command parsing and execution
- **Template System**: Framework-specific templates and rules
- **Context Generation**: Dynamic project context creation
- **File Management**: Structured directory and file creation

## Project Structure

```
febyen-context/
├── bin/
│   └── febyen-context.js          # CLI entry point
├── context/                       # Template context system
│   ├── CONTEXT.md                 # This file
│   ├── docs/                      # Documentation
│   │   └── design/               # Design assets
│   ├── features/                  # Feature management
│   │   ├── active/               # Currently developing
│   │   ├── planned/              # Planned features
│   │   ├── completed/            # Completed features
│   │   ├── archived/             # Archived features
│   │   └── ROADMAP.md            # Project roadmap
│   └── rules/                     # Development rules
│       ├── create-prd.md         # PRD creation guidelines
│       ├── generate-tasks.md     # Task generation (generic)
│       ├── generate-tasks-nextjs.md # Task generation (Next.js)
│       ├── generate-tasks-rails.md # Task generation (Rails)
│       ├── process-task-list.md  # Task processing (generic)
│       ├── process-task-list-nextjs.md # Task processing (Next.js)
│       └── process-task-list-rails.md # Task processing (Rails)
├── package.json                   # npm package configuration
├── README.md                      # Project documentation
├── Claude.md                      # AI assistant instructions
└── LICENSE                        # MIT License
```

## Development Workflow

- **Branch Strategy**: Git Flow (main, develop, feature branches)
- **Code Review**: Pull request required for all changes
- **Testing**: Unit tests for CLI functionality
- **Publishing**: npm publish for distribution

## Current Status

- **Active Features**:
  - CLI tool with Next.js and Rails support
  - Framework-specific templates and rules
  - Dynamic context generation
  - Interactive project setup
- **Completed Features**:
  - Basic CLI functionality
  - Template system
  - Framework detection
- **Known Issues**: None currently identified

## Framework Support

### Next.js Projects

- App Router structure support
- TypeScript guidelines
- React Testing Library integration
- Next.js best practices

### Ruby on Rails Projects

- MVC architecture support
- Rails conventions
- RSpec testing integration
- Rails best practices

### Generic Projects

- Flexible structure for other frameworks
- Basic development guidelines
- Extensible template system

## Related Documents

- [Roadmap](./features/ROADMAP.md)
- [README](../README.md) - Main project documentation
- [Claude.md](../Claude.md) - AI assistant instructions

## Next Steps

1. Add unit tests for CLI functionality
2. Add support for additional frameworks (React, Vue, etc.)
3. Implement template customization options
4. Add validation for project names and paths
5. Create documentation for extending the tool
6. Publish to npm registry
