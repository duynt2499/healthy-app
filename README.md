# Healthy App

Healthy is small web application UI challenge for interview.
Time spent: **7** hours spent in total

- Tech stack using for App: ReactJS, Typescript, TailwindCSS.

## Required functionality

- [x] Build Cleanly Codebase
- [x] Build Component UI system
- [x] Build Top Page
- [x] Build My Record Page
- [x] Build Column Page
- [x] Responsive

## Tech Stack

- [ReactJS]
- [Typescript]
- [TailwindCSS]
- [ReactRouterV6]

## Installation

Healthy App requires [Node.js](https://nodejs.org/) v14+ to run.

Run Project:

```sh
cd healthy-app
yarn
yarn start
```

- web run on url <http://localhost:3000>

### Structure (src)

```
├── src
├─────_mock
│     ├───── dataColumn.ts
│     ├───── dataExercises.json
│     ├───── index.ts
│     ├───── ...
├───── assets
│     ├───── fonts
│     ├───── icons
│     ├───── images
├───── components
│     ├───── Button
│     ├────────── CircleIconButton.tsx
│     ├────────── PrimaryButton.tsx
│     ├────────── index.tsx
│     ├───── Card
│     ├────────── ColumnCard.tsx
│     ├────────── MyDiaryListCard.tsx
│     ├────────── PhotoCard.tsx
│     ├────────── RecommendedCard.tsx
│     ├────────── RecordCard.tsx
│     ├────────── index.tsx
│     ├───── DropdownMenu
│     ├────────── DropdownItem.tsx
│     ├────────── index.tsx
│     ├───── Hex
│     ├────────── index.tsx
│     ├───── HomeBanner
│     ├────────── index.tsx
│     ├───── LineChart
│     ├────────── TableLineChart.tsx
│     ├────────── index.tsx
│     ├───── ListMyExercise
│     ├────────── ItemExercise.tsx
│     ├────────── index.tsx
│     ├───── Logo
│     ├────────── index.tsx
│     ├───── NavBar
│     ├────────── NavBarItem.tsx
│     ├────────── index.tsx
├───── hooks
│     ├───── useResponsive.ts
│     ├───── useScrollToTop.ts
│     ├───── useToggle.ts
├───── layout
│     ├───── Footer
│     ├───── Header
│     ├───── index.tsx
├───── pages
│     ├───── Column.tsx
│     ├───── Home.tsx
│     ├───── MyRecord.tsx
├───── router
│     ├───── index.tsx
├───── styles
│     ├───── index.css
├───── index.js
├───── react-app-env.d.ts
├───── reportWebVitals.ts
├───── setupTests.ts
```
### Package

```json
{
    "dependencies": {
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.6",
        "@types/react": "^18.0.26",
        "@types/react-dom": "^18.0.9",
        "chart.js": "^4.0.1",
        "react": "^18.2.0",
        "react-chartjs-2": "^5.0.1",
        "react-dom": "^18.2.0",
        "react-icons": "^4.7.1",
        "react-router-dom": "^6.4.5",
        "react-scripts": "5.0.1",
        "typescript": "^4.9.4",
        "web-vitals": "^2.1.4"
    }
}
```
## Video Walkthrough

Here's a walkthrough of implemented user stories:
> Video

https://user-images.githubusercontent.com/52862752/206626936-30d1d364-ac31-4d31-a03b-18f97afcf71e.mp4

> Link Production
> https://healthy-app.vercel.app/

## License

MIT