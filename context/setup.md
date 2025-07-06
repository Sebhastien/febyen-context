# Project Setup Interview Guide

## Purpose

This guide helps AI assistants conduct structured interviews with users to gather project information needed to populate the context system files. The goal is to collect necessary details to create accurate and useful project documentation.

## Setup Depth Decision

**CRITICAL FIRST STEP**: Before beginning any interview process, always ask:

> "Would you like a detailed setup (including architecture, design system, and comprehensive documentation) or a simple setup (basic project information only)?"

### Simple Setup

- Only update `context/CONTEXT.md` with essential project information
- Skip architecture, design system, and detailed documentation
- Focus on basic project details: name, purpose, technology stack, target users
- **Follow the Simple Setup Process section below**

### Detailed Setup

- Follow the full interview process outlined in the Detailed Setup Process section
- Populate all context files with comprehensive information
- Include architecture, design system, and detailed documentation
- **Follow the Detailed Setup Process section below**

---

## Simple Setup Process

### Essential Questions Only

When a user chooses simple setup, ask only these essential questions:

1. **"What is the name of your project?"**
   - Use this to populate `[PROJECT_NAME]` in CONTEXT.md

2. **"What type of application are you building?"**
   - Web app, mobile app, desktop app, CLI tool, API, etc.

3. **"What is the main purpose or problem this project solves?"**
   - Use this to populate `[PROJECT_DESCRIPTION]` and `[PROJECT_GOALS]`

4. **"Who are the target users of this application?"**
   - Use this to populate `[TARGET_USER_1]`, `[TARGET_USER_2]`, `[TARGET_USER_3]`

5. **"What frontend framework or technology will you use?"**
   - React, Vue, Angular, Next.js, Svelte, vanilla JS, etc.
   - Use this to populate `[FRONTEND_FRAMEWORK]`

6. **"What backend technology will you use?"**
   - Node.js, Python, Ruby, Java, .NET, etc.
   - Use this to populate `[BACKEND_FRAMEWORK]`

7. **"What type of database will you use?"**
   - PostgreSQL, MySQL, MongoDB, SQLite, etc.
   - Use this to populate `[DATABASE]`

8. **"What are the most critical features for your MVP?"**
   - Use this to populate `[ACTIVE_FEATURE_1]`, `[ACTIVE_FEATURE_2]`, etc.

### File Updates for Simple Setup

#### Only Update CONTEXT.md

For simple setup, **ONLY** update the `context/CONTEXT.md` file with the essential information gathered above.

**DO NOT** update or create:

- `context/architecture/ARCHITECTURE.md`
- `context/design/DESIGN_SYSTEM.md`
- `context/design/design-system.json`
- `context/features/ROADMAP.md`
- Any other detailed documentation files

#### CONTEXT.md Fields to Update

Replace these placeholder values in `context/CONTEXT.md`:

- `[PROJECT_NAME]`
- `[PROJECT_DESCRIPTION]`
- `[PROJECT_GOALS]`
- `[FRONTEND_FRAMEWORK]`
- `[BACKEND_FRAMEWORK]`
- `[DATABASE]`
- `[TARGET_USER_1]`, `[TARGET_USER_2]`, `[TARGET_USER_3]`
- `[ACTIVE_FEATURE_1]`, `[ACTIVE_FEATURE_2]`, `[ACTIVE_FEATURE_3]`

#### Leave Other Fields as Placeholders

For simple setup, leave these fields as placeholders (they can be filled in later if needed):

- `[PROJECT_VISION]`
- `[PRODUCT_OWNER_NAME]`
- `[TECHNICAL_LEAD_NAME]`
- `[ARCHITECTURE_DESCRIPTION]`
- `[SYSTEM_COMPONENTS]`
- All roadmap and detailed planning fields

### Next Steps After Simple Setup

After completing the simple setup:

1. **Confirm the basic information is correct**
2. **Offer to upgrade to detailed setup later** if needed
3. **Provide guidance on next development steps**
4. **Remind the user they can always run the detailed setup process later**

### When to Suggest Detailed Setup

Consider suggesting detailed setup if the user mentions:

- Complex architecture requirements
- Multiple team members
- Need for comprehensive documentation
- Enterprise or production deployment
- Integration with multiple systems
- Design system requirements
- Long-term project planning needs

---

## Detailed Setup Process

### Phase 1: Project Overview (5-10 minutes)

Start with high-level questions to understand the project scope and goals:

#### Essential Questions

1. **"What is the name of your project?"**
   - Use this to populate `[PROJECT_NAME]` in all files
   - Ask for clarification if the name is unclear or too generic

2. **"What type of application are you building?"**
   - Web app, mobile app, desktop app, CLI tool, API, etc.
   - This helps determine the appropriate architecture and technology stack

3. **"What is the main purpose or problem this project solves?"**
   - Use this to populate `[PROJECT_DESCRIPTION]` and `[PROJECT_GOALS]`
   - Ask follow-up questions to get specific details

4. **"Who are the target users of this application?"**
   - Use this to populate `[TARGET_USER_1]`, `[TARGET_USER_2]`, `[TARGET_USER_3]`
   - Get specific user personas if possible

5. **"What is your vision for this project in 6-12 months?"**
   - Use this to populate `[PROJECT_VISION]`
   - Understand long-term goals and success criteria

### Phase 2: Technology Stack (5-10 minutes)

Gather information about the technical implementation:

#### Frontend Questions

1. **"What frontend framework or technology will you use?"**
   - React, Vue, Angular, Next.js, Svelte, vanilla JS, etc.
   - Use this to populate `[FRONTEND_FRAMEWORK]`

2. **"Will you use any specific styling framework?"**
   - Tailwind CSS, Bootstrap, Material-UI, styled-components, etc.
   - Use this to populate `[CSS_FRAMEWORK]`

3. **"Do you have any specific UI/UX requirements or preferences?"**
   - Design system preferences, accessibility requirements, etc.
   - Use this to inform design system decisions

#### Backend Questions

1. **"What backend technology will you use?"**
   - Node.js, Python, Ruby, Java, .NET, etc.
   - Use this to populate `[BACKEND_FRAMEWORK]`

2. **"What type of database will you use?"**
   - PostgreSQL, MySQL, MongoDB, SQLite, etc.
   - Use this to populate `[DATABASE]`

3. **"Will you need any external integrations or APIs?"**
   - Payment processors, authentication services, third-party APIs, etc.
   - Use this to populate `[EXTERNAL_SERVICES]` and `[API_INTEGRATIONS]`

#### Development Questions

1. **"What package manager will you use?"**
   - npm, yarn, pnpm, etc.
   - Use this to populate `[PACKAGE_MANAGER]`

2. **"What testing framework do you prefer?"**
   - Jest, Vitest, Cypress, Playwright, etc.
   - Use this to populate `[TESTING_FRAMEWORK]`

### Phase 3: Architecture & Design (5-10 minutes)

Understand the technical architecture and design requirements:

#### Architecture Questions

1. **"What is the overall architecture of your application?"**
   - Monolithic, microservices, serverless, etc.
   - Use this to populate `[ARCHITECTURE_DESCRIPTION]`

2. **"What are the main components or modules of your system?"**
   - Use this to populate `[SYSTEM_COMPONENTS]`

3. **"How will users interact with your application?"**
   - Web interface, mobile app, API endpoints, etc.
   - Use this to populate `[INTERACTION_DESCRIPTION]`

#### Design Questions

1. **"Do you have any existing brand colors or design preferences?"**
   - Use this to populate color tokens in `design-system.json`
   - Ask for hex codes or color descriptions

2. **"What type of user interface are you envisioning?"**
   - Dashboard, e-commerce, social media, admin panel, etc.
   - Use this to determine component patterns

3. **"Are there any accessibility requirements?"**
   - WCAG compliance, screen reader support, etc.
   - Use this to populate accessibility settings

### Phase 4: Development Workflow (3-5 minutes)

Understand the development process:

#### Process Questions

1. **"What is your preferred branching strategy?"**
   - Git Flow, GitHub Flow, trunk-based development, etc.
   - Use this to populate `[BRANCH_STRATEGY]`

2. **"How will you handle code reviews and testing?"**
   - Use this to populate `[CODE_REVIEW_PROCESS]` and `[TESTING_STRATEGY]`

3. **"What is your deployment strategy?"**
   - Use this to populate `[DEPLOYMENT_PROCESS]`

### Phase 5: Project Timeline & Features (5-10 minutes)

Understand the development timeline and feature priorities:

#### Timeline Questions

1. **"What is your target launch date or milestone?"**
   - Use this to populate roadmap dates

2. **"What are the most critical features for your MVP?"**
   - Use this to populate `[ACTIVE_FEATURE_1]`, `[ACTIVE_FEATURE_2]`, etc.

3. **"What features are planned for future releases?"**
   - Use this to populate `[PLANNED_FEATURE_1]`, `[PLANNED_FEATURE_2]`, etc.

4. **"What features have you already completed?"**
   - Use this to populate `[COMPLETED_FEATURE_1]`, `[COMPLETED_FEATURE_2]`, etc.

### Phase 6: Stakeholders & Team (2-3 minutes)

Gather information about the project team:

#### Team Questions

1. **"Who is the product owner or project lead?"**
   - Use this to populate `[PRODUCT_OWNER_NAME]` and `[PRODUCT_OWNER_EMAIL]`

2. **"Who is the technical lead or lead developer?"**
   - Use this to populate `[TECHNICAL_LEAD_NAME]` and `[TECHNICAL_LEAD_EMAIL]`

3. **"What is the team size and structure?"**
   - Use this to inform development workflow decisions

## File Population Strategy

### Priority Order

1. **CONTEXT.md** - Start with basic project information
2. **design-system.json** - Populate with design tokens and component patterns
3. **DESIGN_SYSTEM.md** - Update with framework-specific guidance
4. **ARCHITECTURE.md** - Fill in technical architecture details
5. **ROADMAP.md** - Create development timeline and feature roadmap

### Critical File Path Rules

**IMPORTANT**: Use these EXACT file paths:

- `context/features/ROADMAP.md` (NOT `context/ROADMAP.md`)
- `package.json` exists in the root directory
- All feature files should be created in `context/features/` directory structure
- NEVER create features in `docs/` directory

### Context File Updates

- **CONTEXT.md**: Update all `[PLACEHOLDER]` values with actual project information
- **design-system.json**: Replace color values, typography, spacing, and component definitions
- **DESIGN_SYSTEM.md**: Update framework references and implementation guidelines
- **ARCHITECTURE.md**: Fill in system architecture, data flow, and technical decisions
- **ROADMAP.md**: Create realistic timeline with actual features and milestones

### Rules Files

- Update framework-specific rules in the `rules/` directory based on the chosen technology stack
- Ensure all file paths and commands match the selected frameworks

## Follow-up Questions

If any information is unclear or missing, ask these follow-up questions:

1. **"Can you provide more details about [specific aspect]?"**
2. **"What are your preferences for [technical decision]?"**
3. **"Are there any constraints or requirements I should know about?"**
4. **"Do you have any existing code or design assets to reference?"**

## Validation Checklist

Before finalizing the context files, ensure you have:

- [ ] Project name and description
- [ ] Technology stack (frontend, backend, database)
- [ ] Target users and use cases
- [ ] Key features and priorities
- [ ] Development timeline
- [ ] Team structure and stakeholders
- [ ] Design preferences and requirements
- [ ] Architecture decisions
- [ ] Deployment strategy

## Tips for Effective Interviews

1. **Listen actively** and ask clarifying questions
2. **Take notes** during the interview
3. **Validate understanding** by summarizing key points
4. **Be flexible** - adapt questions based on the user's technical knowledge
5. **Provide examples** when users seem unsure about technical choices
6. **Set expectations** about what will be created from the interview

## Common Scenarios

### Scenario 1: Solo Developer with Simple Project

- Focus on simple setup
- Ask about immediate development needs
- Keep documentation minimal but useful

### Scenario 2: Team Project with Complex Requirements

- Use detailed setup
- Gather comprehensive stakeholder information
- Plan for scalability and maintainability

### Scenario 3: Startup with Rapid Development

- Balance between simple and detailed setup
- Focus on MVP features
- Plan for future scaling

### Scenario 4: Enterprise Project

- Always use detailed setup
- Gather extensive requirements
- Plan for compliance and security needs
