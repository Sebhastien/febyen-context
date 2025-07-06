# Project Setup Interview Guide

## Purpose

This guide helps AI assistants conduct structured interviews with users to gather comprehensive project information needed to populate the context system files. The goal is to collect all necessary details to create accurate and useful project documentation.

## Interview Process

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

### Scenario 1: New Project (No Existing Code)

- Focus on requirements gathering and technology selection
- Help users make informed decisions about their stack
- Create comprehensive initial documentation

### Scenario 2: Existing Project (Adding Context)

- Understand current implementation
- Identify gaps in documentation
- Update context to reflect actual state

### Scenario 3: Project Migration

- Understand current and target technologies
- Plan migration strategy
- Update context for new architecture

## Next Steps After Interview

1. **Immediately update** the context files with gathered information
2. **Create a summary** of key decisions and next steps
3. **Validate** that all placeholders have been replaced
4. **Suggest** any missing information that could be valuable
5. **Offer** to help with initial project setup or next development steps
