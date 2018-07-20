# React Full Header
[![Build Status](https://travis-ci.org/filipegorges/react-full-header.svg?branch=master)](https://travis-ci.org/filipegorges/react-full-header)

Udemy course: https://www.udemy.com/js-com-tdd-na-pratica

A header component with video support for React.

## Demo
![A gif with header containing video](images/header_demo.gif)

## Installation

```sh
$ npm install --save reuwsaat-react-full-header
```

## Basic Usage

```jsx
import FullHeader from 'reuwsaat-react-full-header';

...
render() {
    return (
        <FullHeader
            title="FullHeader component"
            subtitle="a header component with video support"
            bgColor="#bbb"
            textColor="#d5fd07"
            font="Helvetica"
            video="http://mazwai.com/system/posts/videos/000/000/161/original/leonard_soosay--missfit.mp4?1424004876"
        />
    );
}
...
```

## Props

- `title` (string) - main title
- `subtitle` (string) - subtitle
- `bgColor` (string) - background color
- `bgImg` (string) - image to background
- `video` (string) - video to background
- `textColor` (string) - texts color
- `font` (string) - font-family to texts

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

If you want to contribute with this component:
[Contributing Documentation](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md)