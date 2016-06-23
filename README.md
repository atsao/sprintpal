# SprintPal

TBD

## Team

  - __Product Owner__: Andrew Tsao
  - __Scrum Master__: Brett Celestre
  - __Development Team Member__: Brett Celestre, Andrew Tsao

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

(UNDER CONSTRUCTION)

A group is trying to decide whether or not to a do a particular thing (watch a particular movie, go out to dinner, etc.)

One person in the group goes to our site and sees View 1: Voting setup. They can incremenet or decrement the number of voters (the size of the group) at the top, then press the button to start the voting session.

The organizer, as well as anyone who was already on the site, is now seeing View 2: Voting session. Anyone who goes to the site at this time for the first time will also see View 2. Anyone who comes in can press the Yes or the No button once. Once it's pressed, only the person that's voted will move onto View 3: Results; everyone else will still be on View 2 in order to vote. If you're on View 3 after you've voted but others still haven't, you'll see your vote but the group results will be empty. If at any time the reset button is pressed (it's only visible to the organizer), that voting session will be reset and anyone visiting the site will see View 1.

Once the vote count has reached the original number of voters set up by the organizer, everyone will now be seeing View 3, and the group results will be displayed. In order to reset for a new voting session they would need to press the reset button, the same as before.

NOTE ON MVP: Anyone who visits our site will see the current group's session.  Therefore in our first iteration only one group can be using the site at a time.

## Dependencies
All these dependencies are listed as such in the package.json file, and will be installed with 'npm install'

These three are downloaded to node_modules and used by the app
- Node
- Express
- Socket.io

These four will be downloaded to node_modules, but we don't actually use these files in the app. Instead in our index.html when we inject the scripts we do so with CDN (just linking to their sources online). This was the result of a refactor, but we decided to leave them in the package.json for readability's sake.
- Angular
- Angular Routes
- Bootstrap
- Socket.io Client



## Development

### Installing Dependencies

From within the root directory:

```
npm install
```


## Feature List

  UI Features:

    -All Views
      -Name of App - Header

    - View 1
      - Voting instruction - “How many  people need to vote”
      - Counter - Keep track of number of voters
        -Decrementer
        -Incrementer
        -Display Current Count
      - Go Button - Start Voting - Route to next view if already on the site, defaults View 2 to newcomers
        -post # of voters


    - View 2
      - Yes Button: Counts a Yes Vote
        - Post vote
        - Causes user to route to View 3, displaying their vote
      - No Button: Counts a No Vote
        - Post vote
        - Causes user to route to View 3, displaying their vote
      - Reset Button: Resets all voter data back to defaults (only visible to the organizer)
        - Ask for confirmation (confirm)
        - Routes back to View 1

    - View 3
      - ”The group votes:” show result of vote (Yes, No, Tie)
      - Reset Button: Resets all voter data back to defaults
        - Ask for confirmation (confirm)
        - Routes back to View 1

  Server:
  
    - serve static files: html, css, any assets
    - Keep track of votes - Yes or No
    - Know number of voters
    - Calculate results
    - handle get and post
      - respond to get with vote data object
      - respond to post vote 301
        - tally vote
      - respond to post reset
        - scrap votes


### User Views

(UNDER CONSTRUCTION)

You can see the UX/UI sketches of views 1, 2, and 3 here:
https://drive.google.com/file/d/0ByfR6UjPYbmhSTcweVJaNjRwcWs/view?usp=sharing

- NOTE: The numbers indicated by each UI component reference the numbers listed in the Architecture sketch, listed below.


### Architecture

(UNDER CONSTRUCTION)


You can see the sketch of our client and server (and how they interact with each other) here:
https://drive.google.com/file/d/0ByfR6UjPYbmhaS02R01OZEVsLW8/view?usp=sharing


## Contributing

See [CONTRIBUTING.md](_CONTRIBUTING.md) for contribution guidelines.
