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
│   ├── docs/                   # Detailed documentation
│   │   ├── design/            # Design system and mockups
│   │   └── technical/         # Technical documentation
│   ├── features/              # Feature management
│   │   ├── active/           # Currently being developed
│   │   ├── planned/          # Planned for future development
│   │   ├── completed/        # Finished features
│   │   └── archived/         # Deprecated features
│   ├── templates/            # AI development templates
│   │   ├── create-prd.mdc    # Product Requirements Document template
│   │   ├── generate-tasks.mdc # Task generation template
│   │   ├── process-task-list.mdc # Task processing template
│   │   ├── nextjs-guidelines.mdc # Next.js specific guidelines (if --next)
│   │   └── rails-guidelines.mdc # Rails specific guidelines (if --rails)
│   ├── rules/                # Framework-specific development rules
│   │   ├── create-prd.md     # PRD creation guidelines
│   │   ├── generate-tasks.md # Task generation rules (framework-specific)
│   │   └── process-task-list.md # Task processing rules (framework-specific)
│   └── ROADMAP.md            # Project roadmap
├── Claude.md                  # AI assistant instructions
└── README.md                 # Project-specific README
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

### Core Templates

- **`create-prd.mdc`**: Template for creating Product Requirements Documents
- **`generate-tasks.mdc`**: Template for breaking down features into tasks (framework-specific)
- **`process-task-list.mdc`**: Template for processing and organizing task lists (framework-specific)

### Framework-Specific Templates

- **`nextjs-guidelines.mdc`**: Next.js development guidelines and best practices
- **`rails-guidelines.mdc`**: Ruby on Rails development guidelines and best practices

### Framework-Specific Rules

- **Next.js Rules**: Optimized for Next.js 13+ App Router, TypeScript, and React best practices
- **Rails Rules**: Optimized for Rails MVC architecture, RESTful conventions, and Ruby best practices

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

- Use templates in `context/templates/` for structured work
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

## Contributing

This tool is designed to be extensible. You can:

1. **Add New Templates**: Create new `.mdc` templates in the `context/templates/` directory
2. **Customize Context Structure**: Modify the context directory structure to fit your needs
3. **Add Framework Support**: Extend the CLI to support additional frameworks

## License

MIT License - see LICENSE file for details.

## Support

If you encounter any issues or have questions:

1. Check the generated `context/CONTEXT.md` for project-specific information
2. Review the templates in `context/templates/` for guidance
3. Open an issue on the GitHub repository

---
