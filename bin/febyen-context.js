#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');

const program = new Command();

program
    .name('febyen-context')
    .description('Initialize project context for AI-assisted development')
    .version('1.0.0')
    .option('-r, --rails', 'Initialize context for Ruby on Rails project')
    .option('-n, --next', 'Initialize context for Next.js project')
    .option('-y, --yes', 'Skip prompts and use defaults')
    .argument('[project-name]', 'Name of the project')
    .action(async (projectName, options) => {
        try {
            await createContext(projectName, options);
        } catch (error) {
            console.error(chalk.red('Error:'), error.message);
            process.exit(1);
        }
    });

async function createContext(projectName, options) {
    console.log(chalk.blue('🚀 Creating project context...\n'));

    // Determine project type
    let projectType = 'generic';
    if (options.rails) projectType = 'rails';
    if (options.next) projectType = 'next';

    // Get project name if not provided
    if (!projectName) {
        if (options.yes) {
            projectName = 'my-project';
        } else {
            const answer = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'projectName',
                    message: 'What is the name of your project?',
                    default: 'my-project',
                    validate: (input) => {
                        if (!input.trim()) return 'Project name is required';
                        if (!/^[a-zA-Z0-9-_]+$/.test(input)) {
                            return 'Project name can only contain letters, numbers, hyphens, and underscores';
                        }
                        return true;
                    }
                }
            ]);
            projectName = answer.projectName;
        }
    }

    // Get project type if not specified
    if (projectType === 'generic' && !options.yes) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'projectType',
                message: 'What type of project are you building?',
                choices: [
                    { name: 'Next.js', value: 'next' },
                    { name: 'Ruby on Rails', value: 'rails' },
                    { name: 'Generic/Other', value: 'generic' }
                ]
            }
        ]);
        projectType = answer.projectType;
    }

    // Create project directory
    const projectDir = path.resolve(projectName);

    if (await fs.pathExists(projectDir)) {
        if (!options.yes) {
            const answer = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'overwrite',
                    message: `Directory "${projectName}" already exists. Do you want to overwrite it?`,
                    default: false
                }
            ]);
            if (!answer.overwrite) {
                console.log(chalk.yellow('Operation cancelled.'));
                return;
            }
        }
        await fs.remove(projectDir);
    }

    await fs.ensureDir(projectDir);

    // Copy context template
    const templateDir = path.join(__dirname, '..', 'context');
    await fs.copy(templateDir, path.join(projectDir, 'context'));

    // Create project-specific context
    await createProjectContext(projectDir, projectName, projectType);

    // Create README
    await createREADME(projectDir, projectName, projectType);

    // Create Claude.md
    await createClaudeMD(projectDir, projectName, projectType);

    console.log(chalk.green('\n✅ Project context created successfully!'));
    console.log(chalk.cyan(`\n📁 Project location: ${projectDir}`));
    console.log(chalk.cyan('📝 Next steps:'));
    console.log(chalk.cyan('   1. Review the context/ directory structure'));
    console.log(chalk.cyan('   2. Update context/CONTEXT.md with your project details'));
    console.log(chalk.cyan('   3. Start building with AI assistance!'));
}

async function createProjectContext(projectDir, projectName, projectType) {
    const contextDir = path.join(projectDir, 'context');

    // Update CONTEXT.md with project-specific information
    const contextPath = path.join(contextDir, 'CONTEXT.md');
    let contextContent = await fs.readFile(contextPath, 'utf8');

    // Replace placeholders
    contextContent = contextContent
        .replace(/BidStream v2/g, projectName)
        .replace(/2\.0\.0/g, '1.0.0')
        .replace(/2024-12-19/g, new Date().toISOString().split('T')[0]);

    // Add project type specific information
    if (projectType === 'next') {
        contextContent = contextContent.replace(
            /- \*\*Frontend\*\*: \[To be defined - React\/Vue\/Angular\]/,
            '- **Frontend**: Next.js (React)'
        );
        contextContent = contextContent.replace(
            /- \*\*Backend\*\*: \[To be defined - Node\.js\/Python\/Java\]/,
            '- **Backend**: Next.js API Routes (Node.js)'
        );
    } else if (projectType === 'rails') {
        contextContent = contextContent.replace(
            /- \*\*Frontend\*\*: \[To be defined - React\/Vue\/Angular\]/,
            '- **Frontend**: Rails Views (ERB) or React/Vue (if using API mode)'
        );
        contextContent = contextContent.replace(
            /- \*\*Backend\*\*: \[To be defined - Node\.js\/Python\/Java\]/,
            '- **Backend**: Ruby on Rails'
        );
    }

    await fs.writeFile(contextPath, contextContent);

    // Create project-specific templates
    if (projectType === 'next') {
        await createNextJSTemplates(contextDir);
    } else if (projectType === 'rails') {
        await createRailsTemplates(contextDir);
    }
}

async function createNextJSTemplates(contextDir) {
    const templatesDir = path.join(contextDir, 'templates');

    // Create Next.js specific template
    const nextTemplate = `---
description: Next.js project template
globs: ["**/*.{ts,tsx,js,jsx}"]
alwaysApply: false
---
# Next.js Project Guidelines

## Project Structure
- \`pages/\` - Next.js pages and API routes
- \`components/\` - Reusable React components
- \`styles/\` - CSS/SCSS files
- \`public/\` - Static assets
- \`lib/\` - Utility functions and configurations

## Development Guidelines
- Use TypeScript for type safety
- Follow Next.js 13+ App Router conventions
- Implement proper error boundaries
- Use Next.js built-in optimizations (Image, Link, etc.)

## Common Patterns
- API routes in \`pages/api/\` or \`app/api/\`
- Server-side rendering for SEO
- Static generation where possible
- Incremental Static Regeneration for dynamic content
`;

    await fs.writeFile(path.join(templatesDir, 'nextjs-guidelines.mdc'), nextTemplate);
}

async function createRailsTemplates(contextDir) {
    const templatesDir = path.join(contextDir, 'templates');

    // Create Rails specific template
    const railsTemplate = `---
description: Ruby on Rails project template
globs: ["**/*.{rb,erb,rake}"]
alwaysApply: false
---
# Ruby on Rails Project Guidelines

## Project Structure
- \`app/\` - Models, views, controllers, helpers
- \`config/\` - Application configuration
- \`db/\` - Database migrations and seeds
- \`lib/\` - Custom libraries and modules
- \`test/\` - Test files

## Development Guidelines
- Follow Rails conventions (Convention over Configuration)
- Use strong parameters for security
- Implement proper validations in models
- Use before_action callbacks appropriately
- Follow RESTful routing conventions

## Common Patterns
- Use service objects for complex business logic
- Implement concerns for shared functionality
- Use background jobs for long-running tasks
- Follow the Single Responsibility Principle
`;

    await fs.writeFile(path.join(templatesDir, 'rails-guidelines.mdc'), railsTemplate);
}

async function createREADME(projectDir, projectName, projectType) {
    const readmeContent = `# ${projectName}

This project was initialized with \`create-context\` for AI-assisted development.

## Project Type
${projectType === 'next' ? 'Next.js' : projectType === 'rails' ? 'Ruby on Rails' : 'Generic'}

## Getting Started

${projectType === 'next' ? `
### Next.js Setup
\`\`\`bash
npx create-next-app@latest . --typescript --tailwind --eslint
npm run dev
\`\`\`
` : projectType === 'rails' ? `
### Rails Setup
\`\`\`bash
rails new . --database=postgresql
bundle install
rails db:create
rails server
\`\`\`
` : `
### Generic Setup
Follow the standard setup process for your chosen technology stack.
`}

## Context Management

This project includes a \`context/\` directory that contains:
- Project documentation and requirements
- Feature specifications and roadmaps
- Templates for AI-assisted development
- Design system guidelines

## AI Development Workflow

1. Review the \`context/CONTEXT.md\` file for project overview
2. Check \`context/features/\` for planned and active features
3. Use templates in \`context/templates/\` for consistent development
4. Update documentation as the project evolves

## Contributing

When working with AI assistants:
- Always reference the context directory for project-specific information
- Use the provided templates for consistency
- Update documentation when making significant changes
`;

    await fs.writeFile(path.join(projectDir, 'README.md'), readmeContent);
}

async function createClaudeMD(projectDir, projectName, projectType) {
    const claudeContent = `# Claude AI Assistant Instructions

## Overview
You are an AI coding assistant working with the "${projectName}" project that uses a structured context system for AI-assisted development. This system provides organized documentation, templates, and guidelines to ensure consistent and high-quality development.

## Project Context
- **Project Name**: ${projectName}
- **Project Type**: ${projectType === 'next' ? 'Next.js' : projectType === 'rails' ? 'Ruby on Rails' : 'Generic'}
- **Context Directory**: \`context/\`

## Context Directory Structure

The project includes a \`context/\` directory with the following structure:

\`\`\`
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
│   ├── process-task-list.mdc # Task processing template
${projectType === 'next' ? '│   └── nextjs-guidelines.mdc # Next.js specific guidelines' : projectType === 'rails' ? '│   └── rails-guidelines.mdc # Rails specific guidelines' : ''}
└── ROADMAP.md            # Project roadmap and milestones
\`\`\`

## Your Role and Responsibilities

### 1. Context-Aware Development
- **Always read \`context/CONTEXT.md\` first** when starting work on this project
- Understand the project's purpose, technology stack, and current status
- Reference the roadmap to understand priorities and timelines

### 2. Feature Development Workflow
When working on features:

1. **Check the features directory** to understand what's active, planned, or completed
2. **Use the appropriate templates** from \`context/templates/\` for consistency
3. **Update documentation** as you make changes
4. **Follow the project's established patterns** and conventions

### 3. Template Usage
The project includes several \`.mdc\` templates that provide structured guidance:

- **\`create-prd.mdc\`**: Use when creating Product Requirements Documents
- **\`generate-tasks.mdc\`**: Use when breaking down features into tasks
- **\`process-task-list.mdc\`**: Use when processing and organizing task lists
${projectType === 'next' ? '- **\`nextjs-guidelines.mdc\`**: Use for Next.js specific development guidelines' : projectType === 'rails' ? '- **\`rails-guidelines.mdc\`**: Use for Rails specific development guidelines' : ''}

### 4. Documentation Standards
- Keep all documentation in Markdown format
- Update \`CONTEXT.md\` when making significant architectural changes
- Document new features in the appropriate features directory
- Maintain consistency with existing documentation style

## Technology Stack Guidelines

${projectType === 'next' ? `### Next.js Project Guidelines
- Follow Next.js 13+ App Router conventions
- Use TypeScript for type safety
- Implement proper error boundaries
- Use Next.js built-in optimizations (Image, Link, etc.)
- Structure: \`pages/\`, \`components/\`, \`styles/\`, \`public/\`, \`lib/\`
- API routes in \`pages/api/\` or \`app/api/\`
- Server-side rendering for SEO
- Static generation where possible
- Incremental Static Regeneration for dynamic content` : projectType === 'rails' ? `### Ruby on Rails Project Guidelines
- Follow Rails conventions (Convention over Configuration)
- Use strong parameters for security
- Implement proper validations in models
- Use before_action callbacks appropriately
- Follow RESTful routing conventions
- Structure: \`app/\`, \`config/\`, \`db/\`, \`lib/\`, \`test/\`
- Use service objects for complex business logic
- Implement concerns for shared functionality
- Use background jobs for long-running tasks
- Follow the Single Responsibility Principle` : `### Generic Project Guidelines
- Follow the project's established coding standards
- Implement proper error handling
- Write clear, maintainable code
- Include appropriate comments and documentation
- Use the project's preferred testing framework`}

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
- **Conflicting information**: Prioritize \`CONTEXT.md\` over other sources
- **Missing context**: Ask for clarification before proceeding
- **Technical issues**: Document the problem and suggest solutions
- **Scope creep**: Reference the project goals and roadmap

## Best Practices

1. **Always start with context**: Read \`CONTEXT.md\` before any development work
2. **Use templates consistently**: Follow the provided \`.mdc\` templates for structured work
3. **Update documentation**: Keep the context system current as the project evolves
4. **Maintain consistency**: Follow established patterns and conventions
5. **Communicate clearly**: Provide context for your decisions and recommendations

## Project-Specific Instructions

### For This Project
When working on "${projectName}":
1. Review the current state in \`context/CONTEXT.md\`
2. Check active features and their status in \`context/features/\`
3. Follow the established patterns and conventions
4. Update documentation as you make changes
5. Use the appropriate templates for structured development

Remember: The context system is designed to make AI-assisted development more effective and consistent. Always reference it and keep it updated!
`;

    await fs.writeFile(path.join(projectDir, 'Claude.md'), claudeContent);
}

program.parse(); 