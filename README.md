# CpasAngularBoilerplate

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@cpas-angular-boilerplate/mylib`.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## CPAS help

NPM SCOPE cpas
### Generate apps
To create the dashboard I used : `ng generate @nrwl/angular:application dashboard`
> Choose : sass and routing
---
### Generate Libs
To create material lib for reuse in all apps I used : `ng g @nrwl/angular:lib material `
> Install material lib I run : `ng add @angular/material`

To create the core-data lib : `ng g @nrwl/angular:lib core-data`

### Generate service
run `ng g s users/users --project=core-data`

### Generate interface	
run `ng g i users/user.model --project=core-data`



### Generate routing module in default app
run `ng g m home –routing`
>You then need to generate a component after
run `ng g c home`

### Generate a component in a other project
run `ng  g c ui-toolbar --project=ui-toolbar --export`

