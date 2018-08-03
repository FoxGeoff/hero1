# Hero1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***
***
# Project: Angular Hero


# 5. Master / Detail
## Summary

*@Input hero (child component class) and <child [hero] = val> (in parent component template). This passes down a value from val to hero.*

* You created a separate, reusable HeroDetailComponent.
* You used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.
* You used the @Input decorator to make the hero property available for binding by the external HeroesComponent.

 
# 6. Services

* Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. They should focus on presenting data and delegate data access to a service.
* Services are a great way to share information among classes that don't know each other. You'll create a MessageService and inject it in two place

## Observable data -  Observable HeroService
 We will refactor from a synchronus to an asynchronous service using Observable (HttpClient) rather then Promise.

## Show messages

In this section you will:

* add a MessagesComponent that displays app messages at the bottom of the screen.
* create an injectable, app-wide MessageService for sending messages to be displayed
* inject MessageService into the HeroService
* display a message when HeroService fetches heroes successfully.

## Summary

* You refactored data access to the HeroService class.
* You registered the HeroService as the provider of its service at the root level so that it can be injected anywhere in the app.
* You used Angular Dependency Injection to inject it into a component.
* You gave the HeroService get data method an asynchronous signature.
* You discovered Observable and the RxJS Observable library.
* You used RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
* The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
* You created a MessageService for loosely-coupled communication between classes.
* The HeroService injected into a component is created with another injected service, MessageService.

![Screen Shot](/images/ScreenShot1.png)

# 7. Routing

## Add app-routing.module.ts
1. Run: `ng generate module app-routing --flat --module=app`
1. `--flat` puts the file under src/app instead of it's own folder
1. `--module=app` tells CLI to register it in the array of the AppModule

## Add Navigation to details

The user should be able to get to these details in three ways.
1. By clicking a hero in the dashboard.
1. By clicking a hero in the heroes list.
1. By pasting a "deep link" URL into the browser address bar that identifies the hero to display.

## Add Routable HeroDetailComponent

Previously, the parent HeroesComponent set the HeroDetailComponent.hero property and the HeroDetailComponent displayed the hero.

HeroesComponent doesn't do that anymore. Now the router creates the HeroDetailComponent in response to a URL such as `~/detail/11`.

The HeroDetailComponent needs a new way to obtain the hero-to-display.

* Get the route that created it,
* Extract the id from the route
* Acquire the hero with that id from the server via the HeroService

## Summary
1. You added the Angular router to navigate among different components.
1. You turned the AppComponent into a navigation shell with `<a>` links and a `<router-outlet>`.
1. You configured the router in an AppRoutingModule
1. You defined simple routes, a redirect route, and a parameterized route.
1. You used the routerLink directive in anchor elements.
1. You refactored a tightly-coupled master/detail view into a routed detail view.
1. You used router link parameters to navigate to the detail view of a user-selected hero.
1. You shared the HeroService among multiple components.

# 8. HTTP

Using `HTTPClient` we will show how:
1. The HeroService gets hero data with HTTP requests.
1. Users can add, edit, and delete heroes and save these changes over HTTP.
1. Users can search for heroes by name

# Install the In-memory Web API package from npm
Important: the In-memory Web API module has nothing to do with HTTP in Angular.
1. Run : `npm install angular-in-memory-web-api --save `
1. Add the HttpClientInMemoryWebApiModule to the @NgModule.imports array— after importing the HttpClient, —while configuring it with the InMemoryDataService.
``` 
HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
```
# Get heroes with HttpClient

## Add Heros and HTTP

# Search

## Add Search by name
## Add search to the Dashboard
## Add  HeroSearchComponent
In hero-search.component.ts
1. debounceTime(300) waits until the flow of new string events pauses for 300 milliseconds before passing along the latest string. You'll never make requests more frequently than 300ms.

1. distinctUntilChanged() ensures that a request is sent only if the filter text changed.

1. switchMap() calls the search service for each search term that makes it through debounce and distinctUntilChanged. It cancels and discards previous search observables, returning only the latest search service observable.

