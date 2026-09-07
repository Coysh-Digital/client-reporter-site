# Contributing and integration pull requests

Client Reporter is open source, and contributions are welcome. If a service would be useful to other agencies, you can propose adding its integration to the core project and open a pull request to build it.

This page covers integration contributions. For development setup, coding standards and the general pull request process, read the [development guide](/docs/development) and the repository's full [CONTRIBUTING.md](https://github.com/coysh-digital/client-reporter/blob/main/CONTRIBUTING.md).

## Core integration or your own extension?

An integration does not have to be part of Client Reporter itself. The [Integration SDK guide](/docs/creating-an-integration) explains how to keep an integration in your installation's update-safe `extensions/` directory or publish it as a Composer package.

A core integration is a good fit when:

- the service is useful to a meaningful number of Client Reporter users;
- it has a stable, documented API that can support the integration;
- the data fits an existing Client Reporter category or makes a clear case for a new one;
- authentication can be implemented safely without asking users for unnecessary access; and
- the contribution can include tests, setup guidance and documentation.

Keeping a specialist or private integration as an extension is completely valid. It can always be proposed for the core later.

## Before writing the integration

Check the [existing issues](https://github.com/coysh-digital/client-reporter/issues) and integrations first. If nobody is already working on the provider, open an **Integration proposal** using the repository's issue templates.

Include:

- the provider and the API documentation;
- the data and metrics the integration would collect;
- the authentication method it requires;
- whether one connection can cover a whole workspace or belongs to one site;
- any API limits, paid-plan requirements or unusual setup steps; and
- whether you intend to build it yourself.

An early proposal gives maintainers and other contributors a place to agree on the shape of the integration before time goes into the implementation.

## Building it

Start with the [Creating an integration](/docs/creating-an-integration) guide. The generator provides a working extension skeleton:

```bash
php artisan client-reporter:make-integration "Provider name"
```

Use a similar bundled integration under `app/Integrations/` as the reference for how the core project organises clients, collectors and tests. A core integration should:

- expose a clear manifest and the smallest set of configuration fields it needs;
- verify credentials with a lightweight real request;
- use the shared HTTP client and outbound URL protection;
- collect standard category metrics where they apply;
- use shared report blocks unless the provider genuinely needs a bespoke presentation;
- provide useful setup steps and safe, actionable error messages;
- keep credentials and sensitive response data out of logs and errors; and
- include its own automated tests with provider requests faked.

If an account naturally covers several sites, support a workspace connection and discovery rather than making users enter the same credentials repeatedly.

## Opening the pull request

1. Fork the [Client Reporter repository](https://github.com/coysh-digital/client-reporter) and create a focused topic branch.
2. Add the integration, tests and any supporting documentation or assets.
3. Run the full project checks with `composer check`.
4. Test the connection flow, collection and relevant report blocks locally.
5. Open a pull request against the default branch and link the integration proposal.

In the pull request description, explain what the provider supplies, how authentication works, what you tested and any limits reviewers should know about. Screenshots of the connection flow and report output are helpful when the contribution changes the interface.

## What review looks for

Review is there to make the integration dependable for everyone who installs Client Reporter. Maintainers will look at:

- whether the API calls are minimal, read-only where possible and resilient to provider errors;
- whether credentials are handled securely;
- whether the collected metrics have clear names and consistent units;
- whether the integration behaves correctly at both site and workspace scope;
- whether tests cover successful collection and common failure cases; and
- whether another developer could maintain the integration from the code and documentation.

Feedback and follow-up changes are a normal part of the process. Once the checks pass and review is complete, the integration can ship with the core project and appear in the integrations catalogue for every installation.
