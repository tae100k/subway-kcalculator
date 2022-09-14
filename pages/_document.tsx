import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.svg" />
          <link
            rel="preload"
            href="/assets/video/burn-success.mp4"
            as="video"
            type="video/mp4"
          />
          <link
            rel="preload"
            href="/assets/video/burn-error.mp4"
            as="video"
            type="video/mp4"
          />
          <link
            rel="preload"
            href="/assets/video/burn-waiting.mp4"
            as="video"
            type="video/mp4"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://https://fonts.googleapis.com/css?family=Epilogue"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
