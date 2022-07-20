# Innowise Lab Internship: Level 1: Workout app

You can check how it works here: https://murashko-workout-app.netlify.app/

## Task

https://docs.google.com/document/d/1Q_rP2rMNaK0oaT6RcjggMxDDgW-bHhP3nh-41ibaK2o/edit#

## How to run the app

```
1. git clone https://github.com/murashkoIl/workout-app.git
2. cd workout-app
3. npm install
4. npm start
```

## Application stack

- React
- react-content-loader
- react-router-dom
- TypeScript
- Redux Toolkit
- Async Thunk
- Axios
- FontAwesome Icons
- Eslint
- Prettier
- Husky
- Scss
- Netlify
- Firebase

## Folders structure

    .
    ├── .husky
    ├── build
    ├── node_modules
    ├── public
        ├── favicon.ico
        ├── index.html
        ├── manifest.json
        ├── robots.txt
    ├── src
        ├── components
            ├── AnimatedRoutes
                ├── index.tsx
            ├── Buttons
                ├── MainButton
                    ├── index.tsx
                    ├── MainButton.module.scss
                ├── SwitchButton
                    ├── index.tsx
                    ├── SwitchButton.module.scss
                ├── SubmitButton 
                    ├── index.tsx
                    ├── SubmitButton.module.scss
                ├── PlayStopButton
                    ├── index.tsx
                    ├── PlayStopButton.module.scss
            ├── CompletePage
                ├── CompletePage.modulde.scss
                ├── index.tsx
            ├── Divider
                ├── Divider.module.scss
                ├── index.tsx
            ├── Exercises
                ├── components
                    ├── ExercisePage
                        ├── index.tsx
                    ├── GetReady
                        ├── GetReady.module.scss
                        ├── index.tsx
                    ├── GoBack
                        ├── GoBack.module.scss
                        ├── index.tsx
                    ├── PauseSection
                        ├── index.tsx
                    ├── Pause
                        ├── index.tsx
                        ├── Pause.module.scss
                    ├── Video
                        ├── index.tsx
                        ├── Video.module.scss
                    ├── VideoBlock
                        ├── index.tsx
                    ├── VideoControls
                        ├── index.tsx
                        ├── VideoControls.module.scss
                    ├── VideoWrapper
                        ├── index.tsx
                        ├── VideoWrapper.module.scss
            ├── ExercisesFetchingError
                ├── index.tsx
            ├── ExerciseSkeleton
                ├── ExerciseSkeleton.module.scss
                ├── index.tsx
            ├── LoginPage
                ├── components
                    ├── ForgotPassword
                        ├── ForgotPassword.module.scss
                        ├── index.tsx
                    ├── InputField
                        ├── index.tsx
                        ├── InputField.module.scss
                    ├── Login
                        ├── index.tsx
                    ├── LoginStatusBlock
                        ├── index.tsx
                        ├── LoginStatusBlock.module.scss
                    ├── LogOut
                        ├── index.tsx
                        ├── LogOut.module.scss
                    ├── SignUp
                        ├── index.tsx
                        ├── SignUp.module.scss
            ├── NotFoundPage
                ├── index.tsx
                ├── NotFoundPage.module.scss
            ├── Overview
                ├── components
                    ├── OverviewPage
                        ├── index.tsx
                    ├── About
                        ├── About.module.scss
                        ├── index.tsx
                    ├── ExerciseBlock
                        ├── ExerciseBlock.module.scss
                        ├── index.tsx
                    ├── ExerciseCard
                        ├── ExerciseCard.module.scss
                        ├── index.tsx
                    ├── ExerciseWrapper
                        ├── ExerciseWrapper.module.scss
                        ├── index.tsx
            ├── Timer
                ├── index.tsx
                ├── Timer.module.scss
        ├── firebase
            ├── firebase.js
        ├── images
            ├── icons
                ├── check.svg
            ├── exercise-1.jpeg
            ├── main.jpeg
        ├── interfaces
            ├── DataInterface.ts
            ├── UserDataInterface.ts
            ├── ExerciseCardInterface.ts
            ├── VideosInterface.ts
        ├── redux
            ├── hooks
                ├── hooks.ts
            ├── slices
                ├── authSlice.ts
                ├── dataSlice.ts
                ├── pagesSlice.ts
                ├── pauseSlice.ts
                ├── timerSlice.ts
            ├── store.ts
        ├── shared
            ├── consts.ts
        ├── App.scss
        ├── App.test.tsx
        ├── App.tsx
        ├── index.scss
        ├── index.tsx
        ├── react-app-env.d.ts
        ├── reportWebVitals.ts
        ├── setupTests.ts
    ├── .env
    ├── .eslintignore
    ├── .eslint.json
    ├── .gitignore
    ├── .prettierrc
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
