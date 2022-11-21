# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!-- EXAMPLE

## [1.0.0]

### Added

- I've added feature XY (#1000)

### Changed

- I've cleaned up XY (#1000)

### Deprecated

- I've deprecated XY (#1000)

### Removed

- I've removed XY (#1000)

### Fixed

- I've fixed XY (#1000)

### Security

- I've improved the security in XY (#1000)

-->

## [4.0.1-alpha.1]

### Added

-   Added and exported three reusable utility functions: `pollTillDefined`, `rejectIfTimeout` and `rejectIfConditionAtInterval` which are useful when dealing with promises that involves polling, rejecting after timeout or rejecting if a condition was met when calling repeatably at every time intervals.

## [Unreleased]

### Added

-   Export a new function `uuidV4` that generates a random v4 Uuid (#5373).

### Fixed

-   Use Uuid for the response id, to fix the issue "Responses get mixed up due to conflicting payload IDs" (#5373).