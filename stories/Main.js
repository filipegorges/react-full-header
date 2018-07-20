import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('<FullHeader />', module)
    .add('with title', () => (
        <FullHeader title="TDD" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
        />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299BB"
        />
    ))
    .add('with title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#3299BB"
            textColor="#FF9900"
        />
    ))
    .add('with title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgColor="#96060C"
            textColor="#FF9900"
            font="cursive"
        />
    ))
    .add('with title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="Curso de JS com TDD na prática."
            bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
        />
    ))
    .add('with title, subtitle and video', () => (
        <FullHeader
            title="FullHeader component"
            subtitle="a header component with video support"
            bgColor="#bbb"
            textColor="#d5fd07"
            font="Helvetica"
            video="http://mazwai.com/system/posts/videos/000/000/161/original/leonard_soosay--missfit.mp4?1424004876"
        />
    ));