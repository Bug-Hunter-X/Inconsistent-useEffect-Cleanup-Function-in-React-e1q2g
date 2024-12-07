# Inconsistent useEffect Cleanup Function in React

This repository demonstrates a scenario where the cleanup function within React's `useEffect` hook exhibits inconsistent behavior.  The expected behavior is for the cleanup function to execute before the next effect runs, ensuring proper resource release or state reset. However, under certain conditions, this may not occur as expected.

## Problem

The provided `bug.js` file contains a simple counter component that utilizes `useEffect` with a cleanup function. While the effect and cleanup functions log messages, the consistency of the cleanup function's execution is not guaranteed. This inconsistency may lead to unexpected behavior, especially when dealing with resources like timers, subscriptions, or event listeners.

## Solution

The `bugSolution.js` file presents a potential fix or workaround, possibly improving the reliability of the cleanup function execution.  The solution may involve adjusting the dependencies array or altering the effect's logic to ensure that the cleanup function is reliably called before subsequent renders.