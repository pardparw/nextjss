// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { createContext } from 'react';

// Create a custom context
const MyContext = createContext();

class MyDocument extends Document {
  render() {
    // Define the context value
    const contextValue = 'Your context value goes here';

    return (
      <Html>
        <Head>
          {/* Add any custom head elements here */}
        </Head>
        <body>
          {/* Your custom body content */}
          <Main />

          {/* Provide the context in your custom body */}
          <MyContext.Provider value={contextValue}>
            {/* Your components that use the context */}
          </MyContext.Provider>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
