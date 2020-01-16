# Project Todos

Simple web app, to create to-do list using React and Redux, styled as R.P.G. Quest log, to make everyday activities more EPIC ;)

## How it works?

Redux state:
* questsList- array for quest objects: { text: string, status: boolean, category: string };
* categories- array of strings;

Redux actions:
* createQuest: payload: { text, category}- pushes new quest to questsList array;
* doneToggle: payload: { questIndex }- toggle the true/false value of field status in questsList[ questIndex ]
* deleteQuest: payload: { questIndex }- delete the questsList[ questIndex ];
* deleteAllQuests: reset state to initialState.

### Extra:

Styling made by using SCSS format!!

## Deployed version:

https://questlog.netlify.com/