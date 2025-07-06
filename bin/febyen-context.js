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

    // Copy context template (excluding rules directory as we'll handle it separately)
    const templateDir = path.join(__dirname, '..', 'context');
    const projectContextDir = path.join(projectDir, 'context');

    // Copy everything except rules directory
    await fs.copy(templateDir, projectContextDir, {
        filter: (src) => {
            return !src.includes('rules');
        }
    });

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

    // Create project-specific rules
    await createProjectRules(contextDir, projectType);

    // Create design system files
    await createDesignSystem(contextDir, projectType);

    // Ensure features directory structure exists
    await ensureFeaturesStructure(contextDir);
}

async function createNextJSTemplates(contextDir) {
    const templatesDir = path.join(contextDir, 'templates');
    await fs.ensureDir(templatesDir);

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
    await fs.ensureDir(templatesDir);

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

async function createDesignSystem(contextDir, projectType) {
    const designDir = path.join(contextDir, 'design');
    await fs.ensureDir(designDir);
    await fs.ensureDir(path.join(designDir, 'mockups'));

    // Create design system documentation
    const designSystemContent = `# Design System Documentation

## Overview

This design system provides a comprehensive set of design tokens, component patterns, and guidelines for maintaining consistent UI design across your ${projectType === 'next' ? 'Next.js' : projectType === 'rails' ? 'Rails' : ''} project. The system is optimized for use with AI assistants and Tailwind CSS implementation.

## Structure

- \`design-system.json\` - Complete design system specification in JSON format
- \`mockups/\` - UI mockups and screenshots for reference
- \`design-system.md\` - This documentation file

## How to Use with AI Assistants

### 1. Initial Design System Creation

When creating a new project, use this prompt with your UI mockups:

\`\`\`
Create a comprehensive JSON design system based on these dashboard UI screenshots. The system should capture all visual patterns, component structures, and design tokens that would enable an AI assistant (like Cursor) to consistently replicate this design style using Tailwind CSS.

Context:
- The implementation will use Tailwind CSS for styling
- The JSON will be used as a reference document when instructing AI to build components
- The goal is to maintain perfect design consistency across all new components

Requirements:
1. Extract and organize all design tokens (colors, typography, spacing, shadows, etc.) with their Tailwind equivalents
2. Document component patterns and their structure (cards, buttons, inputs, charts, tables, etc.)
3. Include layout patterns and responsive grid systems
4. Capture interaction states (hover, active, focus) and animations

Do NOT include:
- Specific text content or data from the screenshots
- User-specific information

Format the output as a well-structured JSON that can be easily referenced and parsed, with clear naming conventions that map to Tailwind utility classes where applicable.
\`\`\`

### 2. Component Development

When building new components, reference the design system by:

1. **Review the design tokens** in \`design-system.json\`
2. **Check existing component patterns** for consistency
3. **Use the provided Tailwind classes** for styling
4. **Follow the established naming conventions**

### 3. AI Assistant Instructions

When working with AI assistants, include these instructions:

\`\`\`
Please reference the design system in context/design/design-system.json when building components. Follow these guidelines:

1. Use the exact color values and Tailwind classes specified in the design tokens
2. Follow the component patterns and structure documented in the system
3. Maintain consistent spacing using the defined spacing scale
4. Apply the documented interaction states and animations
5. Use the typography scale for all text elements
6. Follow the responsive breakpoints and grid system

The design system is the single source of truth for all visual design decisions.
\`\`\`

## Framework-Specific Guidelines

${projectType === 'next' ? `
### Next.js Implementation

- Use CSS Modules or styled-components for component styling
- Implement design tokens as CSS custom properties
- Follow Next.js 13+ App Router conventions
- Use TypeScript for type safety in component props
- Implement proper loading states and error boundaries

### File Structure
\`\`\`
src/
├── styles/
│   ├── design-tokens.css    # CSS custom properties
│   ├── components.css       # Component-specific styles
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # Reusable UI components
│   └── layout/              # Layout components
└── app/
    └── globals.css          # Tailwind imports
\`\`\`
` : projectType === 'rails' ? `
### Rails Implementation

- Use Tailwind CSS with Rails asset pipeline
- Implement design tokens in \`app/assets/stylesheets/\`
- Follow Rails conventions for component organization
- Use Stimulus for interactive components
- Implement proper form styling and validation states

### File Structure
\`\`\`
app/
├── assets/
│   └── stylesheets/
│       ├── design-tokens.css    # CSS custom properties
│       ├── components.css       # Component-specific styles
│       └── application.css      # Main stylesheet
├── javascript/
│   └── controllers/             # Stimulus controllers
└── views/
    ├── components/              # View components
    └── layouts/                 # Layout templates
\`\`\`
` : `
### Generic Implementation

- Use Tailwind CSS for styling
- Implement design tokens as CSS custom properties
- Follow component-based architecture
- Use modern CSS features for responsive design
- Implement proper accessibility features

### File Structure
\`\`\`
src/
├── styles/
│   ├── design-tokens.css    # CSS custom properties
│   ├── components.css       # Component-specific styles
│   └── utilities.css        # Utility classes
├── components/
│   ├── ui/                  # Reusable UI components
│   └── layout/              # Layout components
└── design-system/
    ├── design-system.json   # Design system specification
    └── mockups/             # Reference mockups
\`\`\`
`}

## Next Steps

1. **Add your UI mockups** to the \`mockups/\` directory
2. **Generate design system JSON** using the provided prompt
3. **Implement design tokens** in your CSS/styling system
4. **Create component library** following the documented patterns
5. **Test consistency** across all components and pages

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Design System Best Practices](https://www.designsystems.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
`;

    await fs.writeFile(path.join(designDir, 'design-system.md'), designSystemContent);

    // Create a placeholder design system JSON
    const designSystemJSON = {
        "name": `${projectType === 'next' ? 'Next.js' : projectType === 'rails' ? 'Rails' : 'Generic'} Design System`,
        "version": "1.0.0",
        "description": "Design system for consistent UI development",
        "framework": projectType === 'next' ? 'Next.js' : projectType === 'rails' ? 'Rails' : 'Generic',
        "styling": "Tailwind CSS",
        "designTokens": {
            "colors": {
                "primary": {
                    "50": "#eff6ff",
                    "500": "#3b82f6",
                    "900": "#1e3a8a"
                },
                "gray": {
                    "50": "#f9fafb",
                    "500": "#6b7280",
                    "900": "#111827"
                }
            },
            "typography": {
                "fontFamily": {
                    "sans": ["Inter", "system-ui", "sans-serif"],
                    "mono": ["JetBrains Mono", "monospace"]
                },
                "fontSize": {
                    "xs": "0.75rem",
                    "sm": "0.875rem",
                    "base": "1rem",
                    "lg": "1.125rem",
                    "xl": "1.25rem"
                }
            },
            "spacing": {
                "xs": "0.25rem",
                "sm": "0.5rem",
                "md": "1rem",
                "lg": "1.5rem",
                "xl": "2rem"
            }
        },
        "components": {
            "button": {
                "variants": ["primary", "secondary", "outline"],
                "sizes": ["sm", "md", "lg"]
            },
            "card": {
                "variants": ["default", "elevated", "outlined"]
            }
        },
        "layout": {
            "breakpoints": {
                "sm": "640px",
                "md": "768px",
                "lg": "1024px",
                "xl": "1280px"
            }
        }
    };

    await fs.writeFile(path.join(designDir, 'design-system.json'), JSON.stringify(designSystemJSON, null, 2));

    // Create a README for the mockups directory
    const mockupsReadme = `# Mockups Directory

This directory contains UI mockups and screenshots for your project.

## Usage

1. **Add your mockups** - Place UI screenshots, wireframes, and design mockups here
2. **Reference in development** - Use these as visual guides when building components
3. **Generate design system** - Use the mockups with the design system prompt to create \`design-system.json\`

## File Organization

- \`screenshots/\` - UI screenshots and mockups
- \`wireframes/\` - Low-fidelity wireframes
- \`components/\` - Individual component mockups
- \`layouts/\` - Page layout mockups

## Best Practices

- Use descriptive filenames (e.g., \`dashboard-overview.png\`, \`user-profile-form.png\`)
- Include multiple states (default, hover, active, error)
- Show responsive variations when applicable
- Keep files organized in subdirectories by feature or component type
`;

    await fs.writeFile(path.join(designDir, 'mockups', 'README.md'), mockupsReadme);
}

async function createProjectRules(contextDir, projectType) {
    const rulesDir = path.join(contextDir, 'rules');
    await fs.ensureDir(rulesDir);

    // Copy base rules
    const baseRulesDir = path.join(__dirname, '..', 'context', 'rules');

    // Copy create-prd.md (same for all project types)
    await fs.copy(
        path.join(baseRulesDir, 'create-prd.md'),
        path.join(rulesDir, 'create-prd.md')
    );

    // Copy framework-specific rules
    if (projectType === 'next') {
        await fs.copy(
            path.join(baseRulesDir, 'generate-tasks-nextjs.md'),
            path.join(rulesDir, 'generate-tasks.md')
        );
        await fs.copy(
            path.join(baseRulesDir, 'process-task-list-nextjs.md'),
            path.join(rulesDir, 'process-task-list.md')
        );
    } else if (projectType === 'rails') {
        await fs.copy(
            path.join(baseRulesDir, 'generate-tasks-rails.md'),
            path.join(rulesDir, 'generate-tasks.md')
        );
        await fs.copy(
            path.join(baseRulesDir, 'process-task-list-rails.md'),
            path.join(rulesDir, 'process-task-list.md')
        );
    } else {
        // Generic project - copy base rules
        await fs.copy(
            path.join(baseRulesDir, 'generate-tasks.md'),
            path.join(rulesDir, 'generate-tasks.md')
        );
        await fs.copy(
            path.join(baseRulesDir, 'process-task-list.md'),
            path.join(rulesDir, 'process-task-list.md')
        );
    }
}

async function ensureFeaturesStructure(contextDir) {
    const featuresDir = path.join(contextDir, 'features');

    // Ensure features directory exists
    await fs.ensureDir(featuresDir);

    // Ensure all subdirectories exist
    const subdirs = ['active', 'planned', 'completed', 'archived'];
    for (const subdir of subdirs) {
        await fs.ensureDir(path.join(featuresDir, subdir));

        // Create a README file in each subdirectory
        const readmeContent = `# ${subdir.charAt(0).toUpperCase() + subdir.slice(1)} Features

This directory contains ${subdir} features for the project.

## Usage

${subdir === 'active' ? `
- Place feature specifications for features currently being developed
- Include detailed requirements, acceptance criteria, and technical specifications
- Update status as development progresses
` : subdir === 'planned' ? `
- Place feature specifications for upcoming development
- Include priority levels, estimated effort, and dependencies
- Move to \`active/\` when development begins
` : subdir === 'completed' ? `
- Place completed feature documentation
- Include final specifications, implementation notes, and lessons learned
- Reference for future similar features
` : `
- Place deprecated or abandoned feature documentation
- Include reasons for deprecation and migration notes
- Reference for understanding project evolution
`}

## File Naming Convention

Use descriptive filenames: \`feature-name.md\`

## Template

\`\`\`markdown
# Feature Name

## Description
Brief description of the feature

## Requirements
- Requirement 1
- Requirement 2

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Technical Notes
Any technical implementation details

## Status
${subdir === 'active' ? 'In Progress' : subdir === 'planned' ? 'Planned' : subdir === 'completed' ? 'Completed' : 'Archived'}
\`\`\`
`;

        await fs.writeFile(path.join(featuresDir, subdir, 'README.md'), readmeContent);
    }

    console.log(chalk.green('✅ Features directory structure created'));
}

program.parse(); 