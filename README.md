# Calculate recovery time and gain for drawdown

A client-only HTML5/JS calculator for the gain and time needed to recover from a portfolio drawdown. There is no server. A loss and the gain needed to recover are not the same size: a 20% fall, for example, needs a 25% gain to get back to even.

Use it at [inverteum.com/coding/calculate-recovery-time-and-gain-for-drawdown](https://www.inverteum.com/coding/calculate-recovery-time-and-gain-for-drawdown/).

## How to open

Open `index.html` in a browser, or serve the folder with any static file server, for example:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`. No build step and no dependencies are required.

## What it does

- Choose a portfolio fall (1% to 80%) and an assumed annual return after the fall.
- The page shows the remaining value starting from 100, the gain needed to get back to even, and an estimate of how long recovery would take at that annual return, compounded.

Figures on this page are illustrative. They are not Inverteum performance, and they are not a forecast.
