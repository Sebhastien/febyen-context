# febyen-context

A CLI tool to initialize project context for AI-assisted development. This tool creates a structured context system that helps AI assistants understand your project and provide more effective development support.

## Features

- 🚀 **Quick Setup**: Initialize project context with a single command
- 🎯 **Framework Support**: Built-in support for Next.js and Ruby on Rails
- 📋 **Structured Templates**: Pre-built templates for PRDs, task generation, and more
- 🤖 **AI-Optimized**: Designed specifically for AI-assisted development workflows
- 📚 **Comprehensive Documentation**: Organized context system with clear structure
- 🧠 **AI Instructions**: Includes Claude.md with project-specific AI assistant instructions

## Installation

```bash
npx febyen-context@latest
```

## Usage

### Basic Usage

```bash
# Interactive setup
npx febyen-context

# With project name
npx febyen-context my-awesome-project

# Skip prompts and use defaults
npx febyen-context my-project --yes
```

### Framework-Specific Setup

```bash
# Next.js project
npx febyen-context my-nextjs-app --next

# Ruby on Rails project
npx febyen-context my-rails-app --rails

# Generic project (default)
npx febyen-context my-generic-app
```

### Command Options

- `-n, --next`: Initialize context for Next.js project
- `-r, --rails`: Initialize context for Ruby on Rails project
- `-y, --yes`: Skip prompts and use defaults
- `-h, --help`: Show help information
- `-V, --version`: Show version information

## What Gets Created

When you run `febyen-context`, it creates a structured project with the following context system:

```md
my-project/
├── context/
│   ├── CONTEXT.md              # Main project overview
│   ├── architecture/           # Architecture documentation
│   │   └── ARCHITECTURE.md     # System architecture overview
│   ├── design/                 # Design system and assets
│   │   ├── DESIGN_SYSTEM.md    # Design system documentation
│   │   ├── design-system.json  # Design system specification
│   │   └── mockups/            # UI mockups and screenshots
│   ├── features/               # Feature management
│   │   ├── active/             # Currently being developed
│   │   ├── planned/            # Planned for future development
│   │   ├── completed/          # Finished features
│   │   ├── archived/           # Deprecated features
│   │   └── ROADMAP.md          # Project roadmap
│   └── rules/                  # Framework-specific development rules
│       ├── create-prd.md       # PRD creation guidelines
│       ├── generate-tasks.md   # Task generation rules (generic)
│       ├── generate-tasks-nextjs.md # Task generation rules (Next.js)
│       ├── generate-tasks-rails.md # Task generation rules (Rails)
│       ├── process-task-list.md # Task processing rules (generic)
│       ├── process-task-list-nextjs.md # Task processing rules (Next.js)
│       └── process-task-list-rails.md # Task processing rules (Rails)
├── Claude.md                   # AI assistant instructions
└── README.md                  # Project-specific README
```

## Context System Benefits

### For Developers

- Consistent Structure: Every project follows the same organized pattern
- AI-Ready: Templates and documentation optimized for AI assistants
- Scalable: Easy to add new features and maintain documentation
- Collaborative: Clear structure for team collaboration

### For AI Assistants

- Context Awareness: AI can understand project goals and constraints
- Template Usage: Structured templates for consistent development
- Feature Tracking: Clear visibility into what's being built
- Documentation Standards: Consistent formatting and organization

## Templates Included

### Framework-Specific Rules

- **`generate-tasks-nextjs.md`**: Next.js task generation guidelines and best practices
- **`generate-tasks-rails.md`**: Ruby on Rails task generation guidelines and best practices
- **`process-task-list-nextjs.md`**: Next.js task processing guidelines and best practices
- **`process-task-list-rails.md`**: Ruby on Rails task processing guidelines and best practices

### Rules System

The rules system provides framework-specific development guidelines:

- **`create-prd.md`**: Guidelines for creating Product Requirements Documents
- **`generate-tasks.md`**: Generic task generation rules
- **`generate-tasks-nextjs.md`**: Next.js-specific task generation rules with appropriate file paths and commands
- **`generate-tasks-rails.md`**: Rails-specific task generation rules with appropriate file paths and commands
- **`process-task-list.md`**: Generic task processing rules
- **`process-task-list-nextjs.md`**: Next.js-specific task processing rules with testing and development commands
- **`process-task-list-rails.md`**: Rails-specific task processing rules with testing and development commands

Each framework has optimized rules that include:

- Correct file structure and naming conventions
- Framework-specific testing commands (`npm test` vs `bin/rails test`)
- Development server commands (`npm run dev` vs `bin/rails server`)
- Best practices and patterns for each technology stack

### Design System

- **Design System JSON**: Framework-specific design tokens and component patterns
- **Design Documentation**: Comprehensive guidelines for AI-assisted design
- **Mockups Directory**: Organized structure for UI mockups and screenshots
- **AI Integration**: Optimized prompts for design system generation

## Workflow Integration

### 1. Project Initialization

```bash
npx febyen-context my-project --next
cd my-project
```

### 2. Context Review

- Read `context/CONTEXT.md` to understand project goals
- Review `context/ROADMAP.md` for project timeline
- Check `context/features/` for current development status

### 3. AI-Assisted Development

- Use rules in `context/rules/` for structured work
- Update documentation as you develop
- Keep the context system current with project changes

### 4. Feature Management

- Add new features to `context/features/planned/`
- Move features to `context/features/active/` when starting development
- Move completed features to `context/features/completed/`

## Examples

### Next.js Project Setup

```bash
npx febyen-context my-nextjs-app --next
cd my-nextjs-app
npx create-next-app@latest . --typescript --tailwind --eslint
npm run dev
```

### Rails Project Setup

```bash
npx febyen-context my-rails-app --rails
cd my-rails-app
rails new . --database=postgresql
bundle install
rails db:create
rails server
```

## Development Status

### Current Version: 1.0.0

**✅ Completed Features:**

- CLI tool with interactive setup
- Next.js and Rails framework support
- Framework-specific templates and rules
- Dynamic context generation
- Project-specific Claude.md instructions

**🚧 In Development:**

- Unit tests for CLI functionality
- Additional framework support (React, Vue, etc.)
- Template customization options

**📋 Planned Features:**

- Validation for project names and paths
- Custom template support
- Plugin system for extending functionality
- Integration with popular IDEs

## Contributing

This tool is designed to be extensible. You can:

1. **Add New Rules**: Create new rule files in the `context/rules/` directory
2. **Customize Context Structure**: Modify the context directory structure to fit your needs
3. **Add Framework Support**: Extend the CLI to support additional frameworks
4. **Improve Rules**: Enhance framework-specific rules and guidelines

## License

MIT License - see LICENSE file for details.

## Support

If you encounter any issues or have questions:

1. Check the generated `context/CONTEXT.md` for project-specific information
2. Review the templates in `context/templates/` for guidance
3. Open an issue on the GitHub repository

---
