[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# React Native Chatify

> Write a project description

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

To install and set up the library, run:

```sh
$ npm install react-native-chatify
```

Or if you prefer using Yarn:

```sh
$ yarn add react-native-chatify
```

## Example

```javascript
import Chatify from "react-native-chatify-2";

const MyComponent: React.FC = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    {
      _id: 1,
      user: { id: "123", name: "Test User 1" },
      text: "Test1",
      direction: "InBound",
    },
    {
      _id: 2,
      user: { id: "123", name: "Test User 2" },
      text: "Test2",
      direction: "OutBound",
    },
  ]);

  const onChange = (data) => {
    setText(data);
  };

  const sendChat = () => {
    const message = {
      text: text,
      user: {
        id: "456",
        name: "Test User 2",
      },
      direction: "OutBound",
    };
    setMessages((prevState) => [...prevState, message]);
  };

  return (
    <Chatify
      data={messages}
      text={text}
      title="Test User"
      onSend={sendChat}
      onTextChange={onChange}
      theme={chatThemeConfig}
    />
  );
};
```

## Props

| Prop            | Type       | Description                                                                                                                                                   | Default |
| --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `data`          | `Array`    | An array of message objects. Each message should include `_id`, `text`, `createdAt`, and `user` object along with `direction` either "InBound" or "OutBound". | `[]`    |
| `text`          | `string`   | Input field value                                                                                                                                             | -       |
| `text`          | `Function` | A callback function for sending new messages. This function should update the `messages` state.                                                               | `-`     |
| `onTextChange`  | `Function` | A callback function that returns the text input value entered                                                                                                 | `-`     |
| `theme`         | `Object `  | A theme object which takes the custom styling option for headers, input field, footer                                                                         | `{}`    |
| `onTextChange`  | `Function` | A callback function that returns the text input value entered                                                                                                 | `-`     |
| `_renderHeader` | `Function` | A callback function that receives your custom header component, allowing you to replace the default header with your own design.                              | `-`     |
| `_renderFooter` | `Function` | A callback function that receives your custom footer component, allowing you to replace the default footer with your own design..                             | `-`     |

### theme

```
const chatThemeConfig = {
  avoidingView: {}, // Customize properties for keyboard avoiding view
  header: {
    backgroundColor: "red", // Styles for header
    headerImage: {},       // Styles for the header image
    headerIcon: {},        // Styles for icons within the header
    headerIconLayout: {},  // Layout styles for icon arrangement in the header
    headerTitle: {},       // Styles for the header title text
  },
  row: {
    marginTop: 20,         // Set margin for rows within the chat layout
  },
  footer: {
    inputField: {},        // Customize the input field styles in the footer
    footerIconLayout: {},  // Layout for icons in the footer
    footerIcon: {},        // Styles for individual icons in the footer
  },
};

```

## Authors

- **Maaz** - _Initial work_ - [Maazy](https://github.com/mmaazy03)
- **Maaz** - _Portfolio_ - [Maazy](https://portfolio-henna-one-63.vercel.app/)

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY
